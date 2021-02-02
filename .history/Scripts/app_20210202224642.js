/* Custom JavaScript goes here */


"use strict";

(function(){

    function displayHome(){
        let paragraphOneText = "Welcome to DeRa Development Website for WebD6201";
        let paragraphOneElement = document.getElementById("paragraphOne");

        paragraphOneElement.textContent = paragraphOneText;
    }
    function displayAbout(){

    }
    function displayProducts(){

    }
    function displayServices(){

    }
    function displayContact(){

        let messageArea = document.getElementById("messageArea");
        messageArea.hidden = true;

        //Form Validation...

        let fullName = document.getElementById("fullName");
        fullName.addEventListener("blur", function(){
            if(fullName.value.length < 2){
                fullName.focus;
                fullName.select();
                messageArea.hidden = false;
                messageArea.className = "alert alert-danger";
                messageArea.textContent = "Please, Enter an appropriate name."
            }
            else{
                messageArea.removeAttribute("Class");
                messageArea.hidden = true;
            }
        });

        let sendButton = document.getElementById("sendButton");
        sendButton.addEventListener("click", function(event){
            event.preventDefault();
        });

        let contactNumber = document.getElementById("contactNumber");
        contactNumber.addEventListener("blur", function(){
            if(!(/[0-9]/.test(contactNumber))){
                contactNumber.focus;
                contactNumber.select();
                messageArea.hidden = false;
                messageArea.className = "alert alert-danger";
                messageArea.textContent = "Invalid Phone Number";
            }
            else
            {
                messageArea.removeAttribute("Class");
                messageArea.hidden = true;
            }
        })



    }


    function Start(){
        console.log("App Start...");

        switch (document.title) {

            case 'Home':
                displayHome();
                break;
            case 'About':
                displayAbout();
                break;
            case 'Products':
                displayProducts();
                break;
            case 'Services':
                displayServices();
                break;
            case 'Contact':
                displayContact();
                break;

        }
        displayHome();

    }
    window.addEventListener("load",Start);

})();