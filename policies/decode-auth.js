const cryptojs = require("crypto-js");
module.exports = {
    name: 'decode',
    policy: (actionParams) => {
      return (req, res, next) => {
        const tokenHeader = req.header('Authorization');
        const tokenArray = tokenHeader.split(' ');
        const tokenCifer = tokenArray[1];
        const bytes  = cryptojs.AES.decrypt(tokenCifer, '5F33468BECE4BFBCCACF4F2A9C112');
        var token = bytes.toString();
        req.headers.authorization = `Bearer ${token}`;
        next();
      };
    }
};