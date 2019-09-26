const cryptojs = require("crypto-js");
module.exports = {
    name: 'decode',
    policy: (actionParams) => {
      return (req, res, next) => {
        const tokenHeader = req.header('Authorization');
        const tokenArray = tokenHeader.split(' ');
        const tokenCifer = tokenArray[1];
        const bytes  = cryptojs.AES.decrypt(tokenCifer, 'superkeyperm');
        var token = bytes.toString(cryptojs.enc.Utf8);
        req.headers.authorization = `Bearer ${token}`;
        next();
      };
    }
};