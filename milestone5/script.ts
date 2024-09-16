//Get reference to the form and display area 
const forms = document.getElementById('resume-form') as HTMLFormElement;
const resumeDisplayElements = document.getElementById('resume-display') as HTMLDivElement;
const shareableLinkContainer = document.getElementById('shareable-link-container') as HTMLDivElement;
const shareableLinkElement = document.getElementById('sahreable-link') as HTMLAnchorElement;
const downloadPdfButton = document.getElementById('download-pdf') as HTMLButtonElement;

//handle form Submission
forms.addEventListener('submit', (event:Event) => {
    event.preventDefault();//prevent page reload

    const username = (document.getElementById('username') as HTMLInputElement).value;
    const name = (document.getElementById('name') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const mobile = (document.getElementById('mobile') as HTMLInputElement).value;
    const address = (document.getElementById('address') as HTMLInputElement).value;
    const education = (document.getElementById('education') as HTMLInputElement).value;
    const skill = (document.getElementById('skill') as HTMLInputElement).value;
    const experience = (document.getElementById('experience') as HTMLInputElement).value;

// Save form Data in localStorage with the username as the key 
const resumeData = {
    name,
    email,
    mobile,
    address,
    education,
    experience,
    skill
};

    localStorage.setItem(username, JSON.stringify(resumeData));//Saving the data locally

    //Generate the resume content dynamically
    const resumeHTML = ` 
    <h2><b>Shareable Resume</b></h2>
    <h3>Personal Information</h3>
    <p><b>Name: </b><span contenteditable = "true">${name}</span></p>
    <p><b>Email: </b><span contenteditable = "true">${email}</span></p>
    <p><b>Mobile no: </b><span contenteditable = "true">${mobile}</span></p>
    <p><b>Address: </b><span contenteditable = "true">${address}</span></p>
    
    <h3>Education</h3>
    <pre contenteditable = "true">${education}</pre>
    
    <h3>Skills</h3>
    <pre contenteditable = "true">${skill}</pre>

    <h3>Experience</h3>
    <pre contenteditable = "true">${experience}</pre>

    <h3>Skills</h3>
    <pre contenteditable = "true">${skill}</pre>
    `;

    //Display the generated Resume
    resumeDisplayElements.innerHTML = resumeHTML;

    const shareableURL = `
    ${window.location.origin}?username=${encodeURIComponent(username)}
    `;

    // Display the shareable link
    shareableLinkContainer.style.display = 'block';
    shareableLinkElement.href = shareableURL;
    shareableLinkElement.textContent = shareableURL;
});

// Handle PDF download
downloadPdfButton.addEventListener('click', () => {
    window.print();//This will open the print dialog and allow the user to save as PDF
});

// Prefill the form based on the username in teh URL
window.addEventListener('DOMContentLoaded', () =>{
    const urlParams = new URLSearchParams(window.location.search);
    const username = urlParams.get('username');

    if(username){
        // Autofill form if data is found in localStorage
        const savedResumeData = localStorage.getItem(username);
        if(savedResumeData){
            const resumeData = JSON.parse(savedResumeData);
            (document.getElementById(username) as HTMLInputElement).value = username;
            (document.getElementById('name') as HTMLInputElement).value = resumeData.name;
            (document.getElementById('email') as HTMLInputElement).value = resumeData.email;
            (document.getElementById('mobile') as HTMLInputElement).value = resumeData.mobile;
            (document.getElementById('address') as HTMLInputElement).value = resumeData.address;
            (document.getElementById('education') as HTMLTextAreaElement). value = resumeData.education;
            (document.getElementById('experience') as HTMLTextAreaElement).value = resumeData.experience;
            (document.getElementById('skill') as HTMLTextAreaElement).value = resumeData.skill;
        }
    }
});