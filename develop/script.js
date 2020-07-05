function displayTime() {
    var time = moment().format("MMMM Do YYYY")
    $("#currentDay").html(time);
    
};

$(".saveBtn").on("click", saveTask);


function saveTask() {
    var timeSlot = $(this).parent().attr("id");
    var textArea = $(this).siblings(".description").val();
    localStorage.setItem(timeSlot, textArea);
};
saveTask();
displayTime();


//$("#slot-nine").val(localStorage.setItem("slot-nine"));






// var t = new Date().getHours();
// function updateBackgroundSlot() {
//   var 
//     hr = (new Date()).getHours(),
    
//     bstyle = body.style,    
       
//   if (hr < 10) {
     
//     bstyle.color = "black";
    
//   } else if (hr < 20) {
     
//     bstyle.color = "white";
    
//   } else {
     
//     bstyle.color = "white";
    
//   } 
// }



// $(document).ready(function(e) {
//     $('<input/>').attr({ type: 'text', id: 'test', name: 'test' }).appendTo('#myForm').focus();
// });


// function myFuntion() {
//     var x = document.getElementById("myText").nodeValue;
//     document.getElementById("demo").innerHTML = x;
// }

// const m = moment();
//console.log(m.toString());