//Get reference to the form and display area 
var forms = document.getElementById('resume-form');
var resumeDisplayElements = document.getElementById('resume-display');
var shareableLinkContainer = document.getElementById('shareable-link-container');
var shareableLinkElement = document.getElementById('sahreable-link');
var downloadPdfButton = document.getElementById('download-pdf');
//handle form Submission
forms.addEventListener('submit', function (event) {
    event.preventDefault(); //prevent page reload
    var username = document.getElementById('username').value;
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var mobile = document.getElementById('mobile').value;
    var address = document.getElementById('address').value;
    var education = document.getElementById('education').value;
    var skill = document.getElementById('skill').value;
    var experience = document.getElementById('experience').value;
    // Save form Data in localStorage with the username as the key 
    var resumeData = {
        name: name,
        email: email,
        mobile: mobile,
        address: address,
        education: education,
        experience: experience,
        skill: skill
    };
    localStorage.setItem(username, JSON.stringify(resumeData)); //Saving the data locally
    //Generate the resume content dynamically
    var resumeHTML = " \n    <h2><b>Shareable Resume</b></h2>\n    <h3>Personal Information</h3>\n    <p><b>Name: </b><span contenteditable = \"true\">".concat(name, "</span></p>\n    <p><b>Email: </b><span contenteditable = \"true\">").concat(email, "</span></p>\n    <p><b>Mobile no: </b><span contenteditable = \"true\">").concat(mobile, "</span></p>\n    <p><b>Address: </b><span contenteditable = \"true\">").concat(address, "</span></p>\n    \n    <h3>Education</h3>\n    <pre contenteditable = \"true\">").concat(education, "</pre>\n    \n    <h3>Skills</h3>\n    <pre contenteditable = \"true\">").concat(skill, "</pre>\n\n    <h3>Experience</h3>\n    <pre contenteditable = \"true\">").concat(experience, "</pre>\n\n    <h3>Skills</h3>\n    <pre contenteditable = \"true\">").concat(skill, "</pre>\n    ");
    //Display the generated Resume
    resumeDisplayElements.innerHTML = resumeHTML;
    var shareableURL = "\n    ".concat(window.location.origin, "?username=").concat(encodeURIComponent(username), "\n    ");
    // Display the shareable link
    shareableLinkContainer.style.display = 'block';
    shareableLinkElement.href = shareableURL;
    shareableLinkElement.textContent = shareableURL;
});
// Handle PDF download
downloadPdfButton.addEventListener('click', function () {
    window.print(); //This will open the print dialog and allow the user to save as PDF
});
// Prefill the form based on the username in teh URL
window.addEventListener('DOMContentLoaded', function () {
    var urlParams = new URLSearchParams(window.location.search);
    var username = urlParams.get('username');
    if (username) {
        // Autofill form if data is found in localStorage
        var savedResumeData = localStorage.getItem(username);
        if (savedResumeData) {
            var resumeData = JSON.parse(savedResumeData);
            document.getElementById(username).value = username;
            document.getElementById('name').value = resumeData.name;
            document.getElementById('email').value = resumeData.email;
            document.getElementById('mobile').value = resumeData.mobile;
            document.getElementById('address').value = resumeData.address;
            document.getElementById('education').value = resumeData.education;
            document.getElementById('experience').value = resumeData.experience;
            document.getElementById('skill').value = resumeData.skill;
        }
    }
});
