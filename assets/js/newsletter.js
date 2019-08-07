//Function to send captured information to email address a part of form submission
function sendEmail(contactInfo){
    emailjs.send("gmail", "testemail", {
        "from_name": contactInfo.name.value,
        "from_email": contactInfo.email.value
    })
    .then (
        function(response){
            alert("Email was successfully sent, you can close the sign-up form.", response);
        },
        function(error){
           alert("Error: Email not sent, please try again later.", error); 
        });
        return false;
}