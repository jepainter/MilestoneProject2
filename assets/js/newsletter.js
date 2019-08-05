//Function to send captured information to email address a part of form submission
function sendEmail(contactInfo){
    emailjs.send("gmail", "testemail", {
        "from_name": contactInfo.name.value,
        "from_email": contactInfo.email.value
    })
    .then (
        function(response){
            console.log("Email was successfully sent", response);
        },
        function(error){
           console.log("Error: Email not sent", error); 
        });
        return false;
}