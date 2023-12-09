const accountId = 1444455
let accountEmail = "Hariom@gamil.com"
var accountPassword = "12344"
accountCity = "Bhadohi"
let accountState;


// accountId = 2  // not allowed.

accountEmail ="Alok@gmail.com"
accountPassword = "12345"
accountCity = "London"

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.log(accountId);

console.table([accountId, accountEmail, accountState, accountPassword, accountCity])