const jwt = require("jsonwebtoken");
module.exports = {
    name: 'decode',
    policy: (actionParams) => {
      return (req, res, next) => {
        try{
          const tokenHeader = req.header('authorization');
          delete req.headers['authorization'];
          const tokenArray = tokenHeader.split(' ');
          const tokenCifer = tokenArray[1];
          const decoded = jwt.verify(tokenCifer, "5F33468BECE4BFBCCACF4F2A9C112", { algorithm: 'HS256'});
          req.headers.authorization = `Bearer ${decoded.token}`;
          next();
        } catch(error) {
          return res.status(401).send("Unauthorized");
        }
      };
    }
};