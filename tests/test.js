const SimpleCrypto = require("simple-crypto-js").default;

const simpleCrypto = new SimpleCrypto('5F33468BECE4BFBCCACF4F2A9C112');

const token = "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiMSIsImlhdCI6MTU2OTUxODgxMH0.lLpUmzchf6MtpUcLZR8r2S15rPcgFumZo2JGcjmVGM36LrqOqgXYOmipF2TwKPgTDRoQhRZ1TefQYI-fCimZs04ivf9gXtkJXhqCcF2saR0CbOtqrphnxeFjnDHwg_cGI_uf-dj0QRyeqaKwrtX76-SytZ9H3AktTn3wSZiMLEPGHUp5STdho8wHhCWmFeuSuh_XF9BKkTGN8qSNXaf-pdUKQyLFc4g8yTjic-KbZJy741zHLYXbqCTUsgWkKtKkaTlvBl9WFSZeqoC0x7ubh0JI8dE6Oop4E78uX5bOIY1PXVn5-xdOu05buLQz4gf4YAOlrFMhBzEiExazC9G_HA";

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