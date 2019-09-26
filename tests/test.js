const SimpleCrypto = require("simple-crypto-js").default;

const simpleCrypto = new SimpleCrypto('5F33468BECE4BFBCCACF4F2A9C112');

const token = "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiMSIsImlhdCI6MTU2OTUyMDMwM30.CbaEKXzZH1dnAHff2I0o2q7eEkyGimdptjNPW8PwzIqiRLR6mK8kY43O0s7kj25eoVB9o-mXTq9FJ1q2v--RwQarTPh6J2Oal1st-xeUkYPuHsuLc7P6kV4GGwe_55AJmLfS_mjPtCXS6hYmhoy1Cfo7pPCVg-LszhMDH2d_I5MWQe8npiFvDuxBsYQDA4FBDsebJlejKHW8g6JPBer4Y4F2Bb_Nt1Q3lCpS-TeJpPUvZgHRF2PeLnwJdNZO8ndLbbEUafobnqt7P9CSqWyIR9ERCZA-XR-Ig1JFaGyCvdsz_bBlf2Z3bgxaoZoo8vjjUqERiPKCROxqYFVqvPn1dQ";

const cryptic  = simpleCrypto.encrypt(token);

console.log(escape(cryptic).toString());

const tokenHeader = `Bearer ${cryptic}`;
const tokenArray = tokenHeader.split(' ');
const tokenCifer = tokenArray[1];

const tokenAux = simpleCrypto.decrypt(unescape(tokenCifer).toString());
//console.log(tokenAux);

if(tokenAux === token){
    console.log("Equals");
} else {
    console.log("Not Equals");
}