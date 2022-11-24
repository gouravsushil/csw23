$(document).ready(function(){
    $("#hbtn").dblclick(function(){
        $("#container1").hide();
    });

    $("#sbtn").dblclick(function(){
        $("#container1,#container2").show();
    });
    // $("#container1").mouseenter(function(){
    //     alert("Danger Zone");
    // });
    // $("#container2").mouseleave(function(){
    //     alert("Kidhar Chale");
    // });

    $(document).ready(function(){
         $("#flip").click(function(){
             $("#panel").slideDown("slow");
         });
    });
 
    

});