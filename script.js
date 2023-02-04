//  Functionality of form on Volunteer page
// 1. by pressing submit, show the project or tutoring project
// 2. check the terms and condition
document.addEventListener("DOMContentLoaded", function(){
    var submitBtn = document.getElementById("submit-btn");
    var contentDiv = document.getElementById("content");
    var contentDiv2 = document.getElementById("content2");
    var select = document.getElementById("exampleSelect");

    submitBtn.addEventListener("click", function(event){
        event.preventDefault();
        // get the id for project or tutoring
        var selectedValue = document.querySelector('input[name="flexRadioDefault"]:checked').id; 
        // check agree and terms codition, get the button is checked or not
        var invalidCheck = document.querySelector("#invalidCheck").checked;
        var invalidFeedback = document.querySelector(".invalid-feedback"); 
        
        
        if (select.value === "1") {
            Swal.fire({
                title: 'Begineer Advice',
                text: 'We suggest you can begin with our course to improve your skills.',
                icon: 'warning',
                confirmButtonText: '<a href="learn.html" style="color:white;">Go to Learn</a>',
                confirmButtonActions: 'OK'
              });
        } else {
            // if the agree and terms is not checked, show invalid feedback
            if (!invalidCheck) {
                invalidFeedback.style.display = "block";            
                return false;
            } else {
                // else, don't show the invalid feedback
                invalidFeedback.style.display = "none";
                // show the project result
                if(selectedValue == "project") {
                    contentDiv.style.display = "block";
                    contentDiv2.style.display = "none";
                // show the tutor result
                } else if(selectedValue == "tutor") {
                    contentDiv2.style.display = "block";
                    contentDiv.style.display = "none";
                }
                return true;
            }

        }
    });
});



// Functionality of cards on Learn Page
// This line targets the class learnContainer, which is on the Learn page, so that the cards are added into this container when created.
const learnCards = document.querySelector(".learnContainer")
//This is the createCard function which determines the structure of the cards on the Learn page, and adds classes to each section.
function createCard([type, title, description, link]) {
    let code = `
    
    <div class="col">        
        <div class="card learnCard">
            <div class="card-header">
            ${type}
            </div>
                <div class="card-body">
                    <h5 class="card-title">${title}</h5>
                    <p class="card-text">${description}</p>
                    <a href="${link}" class="btn btn-primary">Go somewhere</a>
                </div>
        </div>
    </div>
    

    `;
    learnCards.innerHTML += code;
}
// Information about each course
let HTML1 = ["Learn HTML", "Codecademy HTML Course", "This course teaches you how to make HTML from scratch!", "https://www.codecademy.com/learn/learn-html"]
let CSS1 = ["Learn CSS", "Codecademy CSS Course", "This course teaches you how to use CSS styling.", "https://www.codecademy.com/learn/learn-css"]
let HTML2 = ["Learn HTML", "FreeCodeCamp HTML Course", "This course teaches you about HTML.", "https://www.freecodecamp.org/news/learn-html-beginners-course/"]
let CSS2 = ["Learn CSS", "FreeCodeCamp CSS Course", "This course teaches you how to add CSS to your website.", "https://www.freecodecamp.org/news/learn-css-in-11-hours/"]
// Here, the createCard function is used to make a card for each of the course variables above.
createCard(HTML1)
createCard(CSS1)
createCard(HTML2)
createCard(CSS2)

