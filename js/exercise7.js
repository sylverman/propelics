var resultExercise7 = "";
for (var i=1;i<=200;i++){
  var curr;
  if(i % 3 === 0 && i % 5 === 0){
    curr = 'fizzbuzz';
  } else if(i % 3 === 0) {
    curr = 'fizz';
  } else if(i % 5 === 0) {
    curr = 'buzz';
  } else {
    curr = i;
  }
  resultExercise7 += curr+", ";
}
document.getElementById('resultExercise7').innerHTML = resultExercise7;
