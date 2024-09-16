//Get reference to the form and display area 
var forms = document.getElementById('resume-form') as HTMLElement;
var resumeDisplayElements = document.getElementById('resume-display') as HTMLElement;

//handle form Submission
forms.addEventListener('submit', (event:Event) => {
    event.preventDefault();//prevent page reload

    const name = (document.getElementById('name') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const mobile = (document.getElementById('mobile') as HTMLInputElement).value;
    const address = (document.getElementById('address') as HTMLInputElement).value;
    const education = (document.getElementById('education') as HTMLInputElement).value;
    const skill = (document.getElementById('skill') as HTMLInputElement).value;
    const experience = (document.getElementById('experience') as HTMLInputElement).value;

    //Generate the resume content dynamically
    const resumeHTML = ` 
    <h2><b>Editable Resume</b></h2>
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
    if(resumeDisplayElements){
        resumeDisplayElements.innerHTML = resumeHTML
    }else{
        console.error('The resume display element is missing.')
    }
})