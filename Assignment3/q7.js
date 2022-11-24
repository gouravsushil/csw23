$("#btn").click(function (){
    var a = document.forms["FName"]["name"].value;
    var b = document.forms["FName"]["email"].value;
    if (a == ""){
        alert("Please Enter Your Correct Name");
    }

    if (b == ""){
        alert("Please Enter Your Correct Email");
    }

});