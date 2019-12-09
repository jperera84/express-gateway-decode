const jwt = require("jsonwebtoken");
const fs = require('fs');

module.exports = {
    name: 'decode',
    policy: (actionParams) => {
      return (req, res, next) => {
        try{
          const tokenHeader = req.header('authorization');
          delete req.headers['authorization'];
          const tokenArray = tokenHeader.split(' ');
          const tokenCifer = tokenArray[1];
          const client_id = actionParams.clientId;
          try{
            fs.readFile('./key.pem', 'utf8', function(err, contents) {
              const decoded = jwt.verify(tokenCifer, contents, { algorithm: 'HS256'});
              if(client_id === decoded.client_id) {
                req.headers.clientid = decoded.client_id;
                next();
              } else {
                return res.status(401).send("Unauthorized");
              }
            });
          } catch(error){
            return res.status(401).send("Unauthorized");
          }
        } catch(error) {
          return res.status(401).send("Unauthorized");
        }
      };
    }
};