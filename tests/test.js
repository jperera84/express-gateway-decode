const SimpleCrypto = require("simple-crypto-js").default;

const simpleCrypto = new SimpleCrypto('5F33468BECE4BFBCCACF4F2A9C112');

const token = "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiMSIsImlhdCI6MTU2OTUxMTI0M30.OzWNI7z78tOYNS8-4QmjsNvFQQAO-7FpeP8O1SBk657_cz7_VJQJPYB6BJVCOegpLsRt9nEvAdATG2zKdpeKGX-fmuo8WCW1t0CfQr1QhJTKdU_MeTkyD3bLKznaQdJ88PXtWkmKCHG0hD2uf-fA6tQ_Rixikiieu_-IoIYHa3qDlnaWJYnVLxjG5c7ezStFX2mDjohb78vNFeOBaxNCG__M0JKANE7eYRETAdgr8Cprm8alt-FfSFIqewlU7qyGoL2JeB_jxFlXAplOY8zDF1FWshU5I93_DYo6X1LQhFa39h0QHoo5ELMmnF_IyfTHytooXyiJ-u5HBc2Xyt2uDg";

const cryptic  = simpleCrypto.encrypt(token);

console.log(escape(cryptic));

const tokenHeader = `Bearer ${cryptic}`;
const tokenArray = tokenHeader.split(' ');
const tokenCifer = tokenArray[1];

const tokenAux = simpleCrypto.decrypt(unescape(tokenCifer));
//console.log(tokenAux);

if(tokenAux === token){
    console.log("Equals");
} else {
    console.log("Not Equals");
}