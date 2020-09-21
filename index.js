var loginform = document.getElementById("loginform");
var Regform = document.getElementById("Regform");
var indicator = document.getElementById("indicator");

     function register() {
       Regform.style.transform = "translate(0px)";
       loginform.style.transform = "translate(0px)";
       indicator.style.transform = "translate(100px)";

     }


          function login() {
            Regform.style.transform = "translate(300px)";
            loginform.style.transform = "translate(300px)";
            indicator.style.transform = "translate(0px)";

          }
