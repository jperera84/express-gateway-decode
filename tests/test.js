const jwt = require("jsonwebtoken");
const fs = require('fs');

const token = "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiMTU2Mjg1NzkwIiwiY2xpZW50X2lkIjoiNUYzMzQ2OEJFQ0U0QkZCQ0NBQ0Y0RjJBOUMxMTIiLCJpYXQiOjE1NzU5MDgzMDYsImV4cCI6MTU3NTkzNzEwNn0.WPBPVa5o8JX_mWWpLX8poFuaS0exVQE6VyJtRyh1Lm2ixMi8v2hewoyOPHfCt0vv_FDFAYET9QXhWriML3R4vuBNSfDYyWAhr3Ot6cthNnhQkWSdkU5PU3kDVofxU0eW0k07XagBMQwQcUJ419cbgUla778qH2JyS45qamhSgfh2ZFtbvix6T4aDLv1_Yy2qutbWered5Nqvrdj34CowMaqsg43qQ6fd_EunCYAa-Tkl4miFZn7pp_833_bRAkX09aU7Gvjg9e2vxHWQvPHpnVBjLGVQEdnek9u715QMbYcsv9c786SVX-Qbl97T0Mf3OxoUaeDoRMN0mgszImpPeg";

try{
    fs.readFile('./key.pem', 'utf8', function(err, contents) {
        console.log(contents);
        const decoded = jwt.verify(token, contents, { algorithm: 'HS256'});
        console.log(decoded);
        if( decoded.token === token) {
            console.log("Equal");
        } else {
            console.log("Not Equal");
        }
    });
    
} catch(error) {
    console.log(error);
    console.log("unauthorized");
}