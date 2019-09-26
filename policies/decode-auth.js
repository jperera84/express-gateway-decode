var SimpleCrypto = require("simple-crypto-js").default;
module.exports = {
    name: 'decode',
    policy: (actionParams) => {
      return (req, res, next) => {
        try{
          const tokenHeader = req.header('authorization');
          delete req.headers['authorization'];
          const tokenArray = tokenHeader.split(' ');
          const tokenCifer = tokenArray[1];
          const simpleCrypto = new SimpleCrypto('5F33468BECE4BFBCCACF4F2A9C112');
          const token = simpleCrypto.decrypt(unescape(tokenCifer).toString());
          req.headers.authorization = `Bearer ${token}`;
          next();
        } catch(error) {
          return res.status(401).send("Unauthorized");
        }
        
      };
    }
};