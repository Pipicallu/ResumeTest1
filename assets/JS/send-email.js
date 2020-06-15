function sendMail(contactForm){
    emailjs.send("gmail", "rosie_project_request", 
    {"from_name":contactForm.name.value,
    "from_email":contactForm.emailaddress.value,
    "project_request": contactForm.projectsummary.value})
    .then(
        function(response){
            console.log("success", response);
        },
        function(error){
            console.log("error, it failed", error);
        });
        return false;
}