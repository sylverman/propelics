// Setting Exercise 3 params

exerciseTwo.setConfig({
  uiResultBox: "resultExercise3",
  uiInput: "exercise3Input"
});
exerciseTwo.getCompresedString("aabcccccaaa");

//Exercice 5 Listener

operationExercise5.onkeyup = function() {
  document.getElementById('resultBoxExercise5').innerHTML = calc(this.value);
}
