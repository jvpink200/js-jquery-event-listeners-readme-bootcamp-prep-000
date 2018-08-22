//define functions here
function getIt(){
  $("p").on("click", function(event){
    alert("Hey!");
  });
}

function frameIt(){
  $('img').on('load', function(){
    $("img").addClass("tasty");
  });
}

function submitIt(){
$("form").on("submit", function() {
    alert("Your form is going to be submitted now.");
  });
}

function pressIt(){
  $(document).on('keyup', function (key){
    if(key.which == 71){
      alert("The G key was pressed down.");
    }
  });
}

$(document).ready(function(){

// call functions here
getIt();
frameIt();
submitIt();
});
