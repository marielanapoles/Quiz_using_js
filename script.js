var score = 0;


// alert('Hello');

var answer1 = prompt('Enter first  value');//question_1
var random_number1 = (Math.floor(Math.random()* 5) + 1);
  if (parseInt(answer1) === random_number1) {
    score += 1;
  }


var answer2= prompt('Enter 2nd value'); //question_2
var random_number2 = (Math.floor(Math.random()* 5) + 1);
  if (parseInt(answer2) === random_number2) {
    score += 1;
  }

var answer3 = prompt('Enter 3rd value'); //question_3
var random_number3 = (Math.floor(Math.random()* 5) + 1);
  if (parseInt(answer3) === random_number3) {
    score += 1;
  }


var answer4 = prompt('Enter 4th value'); //question_4
var random_number4 = (Math.floor(Math.random()* 5) + 1);
  if (parseInt(answer4) === random_number4) {
    score += 1;
  }

var answer5 = prompt('Enter 5th value'); //question_5
var random_number5 = (Math.floor(Math.random()* 5) + 1);
  if (parseInt(answer5) === random_number5) {
    score += 1;
  }

//condition_2
if (score === 5) {
  var crown = 'GOLD CROWN';
}
else if (score >= 3) {
  var crown = 'SILVER CROWN';
}
else if (score >= 1) {
  var crown = 'BRONZE CROWN'
}
else {
  var crown = 'No Crown. Please try again';
}

alert('You got ' + score + ' points. You have ' + crown);


// document.write('Your 1st answer is ' + answer1 + '. The correct random number is ' + random_number1 + '<br>');
// document.write('Your 2nd answer is ' + answer2 + '. The correct random number is ' + random_number2 + '<br>');
// document.write('Your 3rd answer is ' + answer3 + '. The correct random number is ' + random_number3 + '<br>');
// document.write('Your 4th answer is ' + answer4 + '. The correct random number is ' + random_number4 + '<br>');
// document.write('Your 5th answer is ' + answer5 + '. The correct random number is ' + random_number5 + '<br>');
