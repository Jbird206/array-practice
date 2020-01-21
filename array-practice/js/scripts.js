$(document).ready(function() {
  var foods = [];
  console.log(foods);


  $("form").submit(function(event) {
    var currentInput = $("#foodInput").val();
    foods.push(currentInput);
    var food1 = foods[0];
    var food2 = foods[1];
    var food3 = foods[2];

    $(".results1").text(food1);
    if (food2) {
      $(".results2").text(food2);
    }
    if (food3) {
      $(".results3").text(food3);
    }

    event.preventDefault();
    
  });
});