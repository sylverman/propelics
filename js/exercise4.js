// Only UI controls
stringOne = document.getElementById('exercise4String1');
stringTwo = document.getElementById('exercise4String2');
resultBoxExercise4 = document.getElementById('resultExercise4');

stringOne.onkeyup = function(){
  findingMatches(document.getElementById('exercise4String1').value, document.getElementById('exercise4String2').value);
}
stringTwo.onkeyup = function(){
  findingMatches(document.getElementById('exercise4String1').value, document.getElementById('exercise4String2').value);
}

// The magic here
function findingMatches(stringOne, stringTwo){
  // functional programming
  var matchedCharacters = stringOne.toLowerCase().split("").filter((val, index, arr) => { //ECMA6 Arrow functions
    if(val != " " && stringTwo.toLowerCase().indexOf(val) != -1){
      return arr.indexOf(val, index+1) < 0
    }
  });
  resultBoxExercise4.innerHTML = matchedCharacters.toString().replace(/[ ]*,[ ]*|[ ]+/g, " ");
  //return matchedCharacters;
}
findingMatches(document.getElementById('exercise4String1').value, document.getElementById('exercise4String2').value);
