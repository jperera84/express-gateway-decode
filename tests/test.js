const jwt = require("jsonwebtoken");

//const simpleCrypto = new SimpleCrypto('5F33468BECE4BFBCCACF4F2A9C112');

const token = "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiMSIsImlhdCI6MTU2OTg0NDk1MiwiZXhwIjoxNTcwMTA0MTUyfQ.Ad_BX2RwDgOQwsJhPbTRBvUzTrpbwtwg16I6dEXVJbEDrP_RI5mcE11rpzT7LhO-WBjy0MvzQZpPqCKDptbJCReokrar7QnUbf9RbX_NLR-XrIGhF6TnQsA-ndMZM7QtpLWtxMNstJlNvQ1EQXZELfRt8bQwgTFAwT2WICKuWboRuaW6IX_WL5_WzRo49GkwEtkYtfr00DWX_0lmeN734aFSMFqDjz5x99fhkDpsnVH4tiyWd4fEPZ7bcvmzqZlKrfXsGylH1DYZ_ObGQObrvhT0-5blFEy9FBt9jp4RuWNA4WYuenWIEwb9yhkuu0BPrV4KYEfimJmGJ7KVWbHTLQ";

jwt.sign({ token: token }, "5F33468BECE4BFBCCACF4F2A9C112", { algorithm: 'HS256', expiresIn: 60 }, function(err, tokenRet) {
    if(err){
        console.log(err);
        return;
    }
    const signature =  tokenRet;
    console.log(signature);
    setTimeout(() => {
        try{
            const decoded = jwt.verify(signature, "5F33468BECE4BFBCCACF4F2A9C112", { algorithm: 'HS256'});
            console.log(decoded);
            if( decoded.token === token) {
                console.log("Equal");
            } else {
                console.log("Not Equal");
            }
        } catch(error) {
            console.log("unauthorized");
        }
    }, 5001);
    
});