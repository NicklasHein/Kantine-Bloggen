/* ======================================================================
  Author Custom JavaScript
====================================================================== */
// Loop through Array of Objects
var objPeople = [
    { // Object @ 0 index
        username: "sam",
        password: "codify"
    },
    { // Object @ 1 index
        username: "matt",
        password: "academy"
    },
    { // Object @ 2 index
        username: "chris",
        password: "forever"
    }

]

function getInfo() {
    var username = document.getElementById('username').value
    var password = document.getElementById('password').value

    for(var i = 0; i < objPeople.length; i++) {
        // tjekker brugerens input matcher brugernavn og adgangskode
        if(username == objPeople[i].username && password == objPeople[i].password) {
            console.log(username + " is logged in!!!")
            // stopper funktionen hvis den ikke er true
            return
        }
    }
    console.log("incorrect username or password")
}
