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
                title: 'Beginner Advice',
                text: 'We suggest you begin with some courses to get your skills up to speed.',
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
                // direct to result_container
                window.location.hash = "#result_container";

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
        <div class="card learnCard ">
            <div class="card-header ${type}">${type}</div>
                <div class="card-body">
                    <h5 class="card-title">${title}</h5>
                    <p class="card-text">${description}</p>
                    <a href="${link}" class="btn btn-primary">Start the course!</a>
                </div>
        </div>
    </div>
    

    `;
    learnCards.innerHTML += code;
}
// Information about each course
let Basics = ["Learn the Basics", "FreeCodeCamp Basics", "Start your coding journey by learning the basics!", "https://www.freecodecamp.org/news/introduction-to-computer-programming-and-computer-science-course/"]
let HTML1 = ["Learn HTML", "Codecademy HTML Course", "This course teaches you how to make HTML from scratch!", "https://www.codecademy.com/learn/learn-html"]
let CSS1 = ["Learn CSS", "Codecademy CSS Course", "This course teaches you how to use CSS styling.", "https://www.codecademy.com/learn/learn-css"]
let HTML2 = ["Learn HTML", "FreeCodeCamp HTML Course", "This course teaches you about HTML.", "https://www.freecodecamp.org/news/learn-html-beginners-course/"]
let CSS2 = ["Learn CSS", "FreeCodeCamp CSS Course", "This course teaches you how to add CSS to your website.", "https://www.freecodecamp.org/news/learn-css-in-11-hours/"]
let JavaScript = ["Learn JavaScript", "FreeCodeCamp JavaScript Course", "This JavaScript course teaches you how to add functionality to your website.", "https://www.freecodecamp.org/news/learn-javascript-full-course/"]
let JavaScript2 = ["Learn JavaScript", "Frontendmasters JavaScript Course", "This course gives you confidence in applying JavaScript on your own", "https://www.frontendmasters.com/courses/?q=JavaScript/learn-JavaScript-in-14-hours/"]
let JavaScript3 = ["Learn JavaScript", "w3schools JavaScript Course", "This course teaches you how to make JavaScript on your own", "https://www.w3schools.com/js/default.asp=JavaScript/learn-JavaScript-in-14-hours/"]
let Python = ["Learn Python", "FreeCodeCamp Python Course", "Have fun learning the language of data and ML! Learn about libraries like 'pandas'.", "https://www.freecodecamp.org/news/python-programming-course/"]
let Python2 = ["Learn Python", "Frontendmasters Python Course", "This course teaches you how to make your own Python scripts!", "https://www.frontendmasters.com/courses/?q=python/learn-Python-in-15-hours/"]
let Python3 = ["Learn Python", "w3schools Python Course", "Learn Python through functional examples and scripts", "https://www.w3schools.com/python/"]
let Java = ["Learn Java", "FreeCodeCamp Java Course", "Java is a coding language that can run on any platform!", "https://www.freecodecamp.org/news/learn-java-free-java-courses-for-beginners/"]
let courses = [Basics, HTML1, HTML2, CSS1, CSS2, JavaScript, JavaScript2, JavaScript3, Python, Python2, Python3, Java] 

// Code so that all Learn courses are displayed when the page is loaded
courses.forEach(function(e) {
    createCard(e)
})


// Button functionality on Learn page: Here, the createCard function is used to make course cards, depending on which button is clicked on the Learn page.
function allCourses() {
    // Remove existing cards
    let cardContainer = document.getElementById("learnContainer");
    while (cardContainer.firstChild) {
        cardContainer.removeChild(cardContainer.firstChild);
    }

    // Create new cards
    courses.forEach(function(e) {
        createCard(e)
    })
}

function cFunc() {
    // Remove existing cards
    let cardContainer = document.getElementById("learnContainer");
    while (cardContainer.firstChild) {
        cardContainer.removeChild(cardContainer.firstChild);
    }

    // Create new cards
    for (let i = 0; i < courses.length; i++) {
        if (courses[i][0] == "Learn the Basics") {
            createCard(courses[i])
        };

      }
}


function htmlFunc() {
    // Remove existing cards
    let cardContainer = document.getElementById("learnContainer");
    while (cardContainer.firstChild) {
        cardContainer.removeChild(cardContainer.firstChild);
    }

    // Create new cards
    for (let i = 0; i < courses.length; i++) {
        if (courses[i][0] == "Learn HTML") {
            createCard(courses[i]);
        }
    }
}

function cssFunc() {
    // Remove existing cards
    let cardContainer = document.getElementById("learnContainer");
    while (cardContainer.firstChild) {
        cardContainer.removeChild(cardContainer.firstChild);
    }

    // Create new cards
    for (let i = 0; i < courses.length; i++) {
        if (courses[i][0] == "Learn CSS") {
            createCard(courses[i])
        };

      }
}

function jsFunc() {
    // Remove existing cards
    let cardContainer = document.getElementById("learnContainer");
    while (cardContainer.firstChild) {
        cardContainer.removeChild(cardContainer.firstChild);
    }

    // Create new cards
    for (let i = 0; i < courses.length; i++) {
        if (courses[i][0] == "Learn JavaScript") {
            createCard(courses[i])
        };

      }
}

function pyFunc() {
    // Remove existing cards
    let cardContainer = document.getElementById("learnContainer");
    while (cardContainer.firstChild) {
        cardContainer.removeChild(cardContainer.firstChild);
    }

    // Create new cards
    for (let i = 0; i < courses.length; i++) {
        if (courses[i][0] == "Learn Python") {
            createCard(courses[i])
        };

      }
}

function javaFunc() {
    // Remove existing cards
    let cardContainer = document.getElementById("learnContainer");
    while (cardContainer.firstChild) {
        cardContainer.removeChild(cardContainer.firstChild);
    }

    // Create new cards
    for (let i = 0; i < courses.length; i++) {
        if (courses[i][0] == "Learn Java") {
            createCard(courses[i])
        };

      }
}

function clearCards() {
    let cardContainer = document.getElementById("learnContainer");
    while (cardContainer.firstChild) {
        cardContainer.removeChild(cardContainer.firstChild);
    }
}