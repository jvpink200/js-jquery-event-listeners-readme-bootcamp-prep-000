//define functions here
function getIt(){
  $("p").on("click", function(event){
    alert("Hey!");
  });
}

$(document).ready(function(){

// call functions here
return getIt();
});
