//Function to send captured information to email address a part of form submission
function sendEmail(contactInfo){
    emailjs.send("gmail", "testemail", {
        "from_name": contactInfo.name.value,
        "from_email": contactInfo.email.value
    })
    .then (
        function(response){
            alert("Newsletter sign up was successfully sent.", response);
            $('#newsletterModal').modal('hide');
           
        },
        function(error){
           alert("Error: Email not sent, please try again.", error); 
        });
        return false;
}

//JQuery to clear modal content after submission -- adapted from https://stackoverflow.com/questions/21151044/how-to-clear-all-input-fields-in-bootstrap-modal-when-clicking-data-dismiss-butt/35079811
$('#newsletterModal').on('hidden.bs.modal', function () {
    $(this).find('form').trigger('reset');
})