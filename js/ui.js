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

// Exercise 6

//This Object is already instaceated previously in its js file
differenceBetweenDates.setConfig({
  dateOne: "date1Exercise6",
  dateTwo: "date2Exercise6",
  resultBox: "resultExercise6"
});
differenceBetweenDates.init();
