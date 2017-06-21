
//Using Revealing Module Pattern for this exercise
exerciseTwo = (function(){
  // Private variables
  var uiInput,
    uiResult,
    resultValue;

  // Private methods
  var compressingString = function(str){
    var counter = 0,
      currentChar,
      strArray = str.split(""),
      newString = "";

      for (var i = 0; i<str.length;i++) {
        chr = str.charAt(i);
        if (counter === 0){ // I do nothig for the first character, waiting to figure out if the next one it's the same
          currentChar = chr;
          counter++;
        } else {
          if (str.indexOf(chr) === str.lastIndexOf(chr)){ // If the character is unique in the string I set the values and add the resume of the previous character to the result string
            newString = newString.concat(currentChar+counter);
            counter = 1;
            currentChar = chr;
          } else {
            if (chr === currentChar){ // If the character is repeated I just plus the counter
              counter++;
            } else { // If the new character is different to the previous, I set the resume of the previous character in the result string
              newString = newString.concat(currentChar+counter);
              counter = 1;
            }
          }
        }
        if (i === (str.length-1)){ // I just add the final character resume
          newString = newString.concat(chr+counter);
        } else {
            currentChar = chr; //the previous character is now the current character
        }
      }
      resultValue = (str.length <= newString.length) ? str : newString;
      printResult(); //This is just for UI purposes
  }

  var printResult = function(){ // This method show the result in a UI element
    uiResult.innerHTML = resultValue;
  }

  //The following are going to be public methods throught a bridge

  getCompresedString = function(str){
    compressingString(str);
  }

  setUIElements = function(ui){
    uiResult = document.getElementById(ui.uiResultBox);
    uiInput = document.getElementById(ui.uiInput);
    uiInput.onkeyup = function(){
      compressingString(uiInput.value);
    }
  }

  return {
    // Public methods and variables
    getCompresedString: compressingString, // I bring public access to a private method using a bridge (This is called Revealing module pattern)
    setConfig: setUIElements
  }
})();

//
