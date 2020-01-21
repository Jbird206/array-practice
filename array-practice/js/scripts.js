$(document).ready(function() {
  var foods = [];


  $("form").submit(function(event) {
    $(".printed").remove();

    var currentInput = $("#foodInput").val();
    foods.push(currentInput);

    foods.forEach(function(food){
      $(".results").append("<p class='printed'>" + food + "</p>");
    });

    


  

    event.preventDefault();
    
  });
});