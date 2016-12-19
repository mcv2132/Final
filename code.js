// the MouseOverX functions manipulate the image sources
function mouseOverGirls() {
  $( "#kidsPic" ).attr("src","images/kids2.png");
}
function mouseOverBoys() {
  $( "#kidsPic" ).attr("src","images/kids3.png");
}
function mouseOverKids() {
  $( "#kidsPic" ).attr("src","images/kids4.png");
}
function mouseOverNoKids() {
  $( "#kidsPic" ).attr("src","images/kids1.png");
}
function mouseOverTulips() {
  $( "#flowersPic" ).attr("src","images/flowers2.png");
}
function mouseOverDaffodils() {
  $( "#flowersPic" ).attr("src","images/flowers3.png");
}
function mouseOverFlowers() {
  $( "#flowersPic" ).attr("src","images/flowers4.png");
}
function mouseOverNoFlowers() {
  $( "#flowersPic" ).attr("src","images/flowers1.png");
}

//The checkFractionQuiz function changes background colors to
// indicate whether the input is correct or not.
function checkFractionQuiz() {
  var CN = $( "#carsNumerator" ).val();
  var CD = $( "#carsDenominator" ).val();
  var PN = $( "#pizzaNumerator" ).val();
  var PD = $( "#pizzaDenominator" ).val();
  var BN = $( "#ballsNumerator" ).val();
  var BD = $( "#ballsDenominator" ).val();

  if( CN != "?" && CD != "?") {
    if(CN == "3" && CD == "7") {
      $( "#CarsFractionQuiz" ).css("background", "green");
    }
    else {
      $( "#CarsFractionQuiz" ).css("background", "red");
    }
  }
  if( PN != "?" && PD != "?") {
    if(PN == "1" && PD == "5") {
      $( "#PizzaFractionQuiz" ).css("background", "green");
    }
    else {
      $( "#PizzaFractionQuiz" ).css("background", "red");
    }
  }
  if( BN != "?" && BD != "?") {
    if(BN == "4" && BD == "9") {
      $( "#BallsFractionQuiz" ).css("background", "green");
    }
    else {
      $( "#BallsFractionQuiz" ).css("background", "red");
    }
  }
}

//This function will be used for providing feedback to users' input, plus
// a little clean-up.
function alertThanks() {
  alert("Thank you for sharing!");
  $( "#shareArea" ).value = "My Fractions";
}

//Assign event listeners to each of the relevant DOM elements
$( "#girlsLabel" ).mouseover(mouseOverGirls);
$( "#boysLabel" ).mouseover(mouseOverBoys);
$( "#kidsLabel" ).mouseover(mouseOverKids);

$( "#tulipsLabel" ).mouseover(mouseOverTulips);
$( "#daffodilsLabel" ).mouseover(mouseOverDaffodils);
$( "#flowersLabel" ).mouseover(mouseOverFlowers);

$( ".quizFraction" ).change(checkFractionQuiz);

$( "#shareButton" ).click(alertThanks);
