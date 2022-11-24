// function errorMessage() {
//     var error = document.getElementById("error")
//     if (isNaN(document.getElementById("number").value))
//     {
         
//         // Changing content and color of content
//         error.textContent = "Please enter a valid number"
//         error.style.color = "red"
//     } else {
//         error.textContent = ""
//     }

    
// }

function p(){
    var answer = prompt('Do you want to submit?');
    if(answer == "yes"){
        $("#p").text("Welcome");
    }
    else{
        $("#p").text("Chala Ja");
    }
    
}
