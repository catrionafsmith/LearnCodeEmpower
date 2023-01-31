// volunteer page, click botton event
// document.addEventListener("DOMContentLoaded", function(){
//     var submitBtn = document.getElementById("submit-btn");
//     var contentDiv = document.getElementById("content");
//     submitBtn.addEventListener("click", function(event){
//         event.preventDefault();
//         contentDiv.style.display = "block";
//     });
// });


//  Functionality of form on Volunteer page
document.addEventListener("DOMContentLoaded", function(){
    var submitBtn = document.getElementById("submit-btn");
    var contentDiv = document.getElementById("content");
    var contentDiv2 = document.getElementById("content2");
    submitBtn.addEventListener("click", function(event){
        event.preventDefault();
        var selectedValue = document.querySelector('input[name="flexRadioDefault"]:checked').id;        
        if(selectedValue == "project") {
            contentDiv.style.display = "block";
            contentDiv2.style.display = "none";
        } else if(selectedValue == "tutor") {
            contentDiv2.style.display = "block";
            contentDiv.style.display = "none";
        }
    });
});

// Functionality of cards on Learn Page
// This line targets the class learnContainer, which is on the Learn page, so that the cards are added into this container when created.
const learnCards = document.querySelector(".learnContainer")
//This is the createCard function which determines the structure of the cards on the Learn page, and adds classes to each section.
function createCard([img, title, description, link]) {
    let code = `
    
    <div class="col">        
            <div class="card learnCard">
                <img src="${img}" class="card-img-top1" alt="${title}">
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
let HTML1 = ["example.png", "Codecademy HTML Course", "This course teaches you how to make HTML from scratch!", "https://www.codecademy.com/learn/learn-html"]
let CSS1 = ["example.png", "Codecademy CSS Course", "This course teaches you how to use CSS styling.", "https://www.codecademy.com/learn/learn-css"]
let HTML2 = ["example.png", "FreeCodeCamp HTML Course", "This course teaches you about HTML.", "https://www.freecodecamp.org/news/learn-html-beginners-course/"]
let CSS2 = ["example.png", "FreeCodeCamp CSS Course", "This course teaches you how to add CSS to your website.", "https://www.freecodecamp.org/news/learn-css-in-11-hours/"]
// Here, the createCard function is used to make a card for each of the course variables above.
createCard(HTML1)
createCard(CSS1)
createCard(HTML2)
createCard(CSS2)



