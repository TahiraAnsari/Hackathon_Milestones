//Get reference to the form and display area 
var forms = document.getElementById('resume-form');
var resumeDisplayElements = document.getElementById('resume-display');
//handle form Submission
forms.addEventListener('submit', function (event) {
    event.preventDefault(); //prevent page reload
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var mobile = document.getElementById('mobile').value;
    var address = document.getElementById('address').value;
    var education = document.getElementById('education').value;
    var skill = document.getElementById('skill').value;
    var experience = document.getElementById('experience').value;
    //Generate the resume content dynamically
    var resumeHTML = " \n    <h2><b>Editable Resume</b></h2>\n    <h3>Personal Information</h3>\n    <p><b>Name: </b><span contenteditable = \"true\">".concat(name, "</span></p>\n    <p><b>Email: </b><span contenteditable = \"true\">").concat(email, "</span></p>\n    <p><b>Mobile no: </b><span contenteditable = \"true\">").concat(mobile, "</span></p>\n    <p><b>Address: </b><span contenteditable = \"true\">").concat(address, "</span></p>\n    \n    <h3>Education</h3>\n    <pre contenteditable = \"true\">").concat(education, "</pre>\n    \n    <h3>Skills</h3>\n    <pre contenteditable = \"true\">").concat(skill, "</pre>\n\n    <h3>Experience</h3>\n    <pre contenteditable = \"true\">").concat(experience, "</pre>\n\n    <h3>Skills</h3>\n    <pre contenteditable = \"true\">").concat(skill, "</pre>\n    ");
    //Display the generated Resume
    if (resumeDisplayElements) {
        resumeDisplayElements.innerHTML = resumeHTML;
    }
    else {
        console.error('The resume display element is missing.');
    }
});
