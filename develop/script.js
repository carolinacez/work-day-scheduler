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


$("#slot-nine .description").val(localStorage.getItem("slot-nine"));
$("#slot-ten .description").val(localStorage.getItem("slot-ten"));
$("#slot-eleven .description").val(localStorage.getItem("slot-eleven"));
$("#slot-twelve .description").val(localStorage.getItem("slot-twelve"));
$("#slot-one .description").val(localStorage.getItem("slot-one"));
$("#slot-two .description").val(localStorage.getItem("slot-two"));
$("#slot-three .description").val(localStorage.getItem("slot-three"));
$("#slot-four .description").val(localStorage.getItem("slot-four"));
$("#slot-five .description").val(localStorage.getItem("slot-five"));


displayTime();

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