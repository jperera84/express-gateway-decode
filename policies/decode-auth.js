var SimpleCrypto = require("simple-crypto-js").default;
module.exports = {
    name: 'decode',
    policy: (actionParams) => {
      return (req, res, next) => {
        const tokenHeader = req.header('Authorization');
        const tokenArray = tokenHeader.split(' ');
        const tokenCifer = tokenArray[1];
        const simpleCrypto = new SimpleCrypto('5F33468BECE4BFBCCACF4F2A9C112');
        const token = simpleCrypto.decrypt(tokenCifer);
        req.headers.Authorization = `Bearer ${token}`;
        next();
      };
    }
};