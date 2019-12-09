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
          try{
            fs.readFile('./key.pem', 'utf8', function(err, contents) {
              console.log(contents);
              const decoded = jwt.verify(tokenCifer, contents, { algorithm: 'HS256'});
              req.headers.clientid = decoded.client_id;
              next();
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