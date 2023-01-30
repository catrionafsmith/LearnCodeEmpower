// volunteer page, click botton event
// document.addEventListener("DOMContentLoaded", function(){
//     var submitBtn = document.getElementById("submit-btn");
//     var contentDiv = document.getElementById("content");
//     submitBtn.addEventListener("click", function(event){
//         event.preventDefault();
//         contentDiv.style.display = "block";
//     });
// });

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