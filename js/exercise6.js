// Using Prototype Design Patern for this exercise

var ExerciseSix = function() {
  // Private variables
  var dateOne,
    dateTwo,
    resultBox;

  // Public methods
  this.setConfig = function(params) {
    self = this;
    // Setting the UI controls
    dateOneInput = document.getElementById(params.dateOne);
    dateOne = dateOneInput.value;
    dateTwoInput = document.getElementById(params.dateTwo);
    dateTwo = dateTwoInput.value;
    resultBox = document.getElementById(params.resultBox);
  }

  // The _construct function
  // I don't run it automatically when I instanciate because I need the config params before
  this.init = function(){
    this.getDifference(dateOne, dateTwo);
    dateOneInput.onchange = function() {
      self.getDifference(this.value, dateTwoInput.value);
    }
    dateTwoInput.onchange = function() {
      self.getDifference(dateOneInput.value, this.value);
    }
  }

  // The magic happens here
  this.getDifference = function(dateOne, dateTwo) {
    var difference = (_parseDate(dateTwo).getTime()-_parseDate(dateOne).getTime());
    _printResult(difference);
    return difference;
  }

  // Private methods
  var _parseDate = function(dateString) {
    //console.log(dateString);
    var dateArray = dateString.split(/\D+/);
    return new Date(dateArray[0], --dateArray[1], dateArray[2], dateArray[3], dateArray[4], dateArray[5]||0, dateArray[6]||0);
  }

  // Sending the result to a DOM element
  var _printResult = function(time) {
    timeInMinutes = Math.ceil(time/1000/60);
    resultBox.innerHTML = timeInMinutes+' minutes';
  }

}

// I create an instance from my function constructor
var differenceBetweenDates = new ExerciseSix;

// Very neat :D  I ♥ this way
