// Procedural programming (Not so elegant honestly)

// Initial value for the operation
operation = "512/2+43-9+1*2+100*2";

//Picking the UI elements
document.getElementById('operationExercise5').value = operation;
operationExercise5 = document.getElementById('operationExercise5');


var calc = function(operation) {
  // Functional programming, using reduce instead of a for loop (most efficient in memory)
  var operators = operation.split("").reduce((total, current) => { //I separate the string in each character and analize it
    // What I am basically doing here is creating an array with full numeric values
    // for each item p.e. 492
    // and the sign characters in another array item
    if(!isNaN(current)){
      var previous = total.pop();
      if (previous){
        if (!isNaN(previous)) {
          total.push(previous.toString().concat(current.toString()));
        } else {
          total.push(previous);
          total.push(current);
        }
      } else {
        total.push(current);
      }
    } else {
      total.push(current);
    }

    return total; // This line is very important to deal with arrays using reduce()
  }, []); // I set the initial value as an array

  function simplifying(array){

    function operationCalc(operator, values){
      switch (operator) {
        case '*':
          return values[0]*values[1];
          break;
        case '/':
          return values[0]/values[1];
          break;
        case '+':
          return values[0]+values[1];
          break;
        case '-':
          return values[0]-values[1];
          break;
        default:

      }
    }

    // Performing math operators dinamically
    function simplify (array, operator){
      var operatorPosition = array.indexOf(operator);
      var rightValue = array[operatorPosition+1];
      var leftValue = array[operatorPosition-1];
      var newVal = operationCalc(operator, [parseInt(leftValue),parseInt(rightValue)]);
      array.splice(operatorPosition-1, 3, newVal);
    }

    if (array.indexOf('*') != -1 || array.indexOf('/') != -1) {
      if (array.indexOf('*') != -1) {
        operator = '*';
        simplify(array, operator);
      } else if (array.indexOf('/') != -1) {
        operator = '/';
        simplify(array, operator);
      }
    }
    if (array.indexOf('*') != -1 || array.indexOf('/') != -1) {
      // Recursive function it is calling itself as many times as needed
      // We avoid innecesary loops in this way
      simplifying(array);
    } else {
      if (array.indexOf('+') != -1 || array.indexOf('-') != -1) {
        plusPos = array.indexOf('+');
        withdrawPos = array.indexOf('-');
        if((plusPos < withdrawPos && plusPos > -1) || withdrawPos === -1){
          operator = '+';
        } else {
          operator = '-';
        }
        simplify(array, operator);
      }
      if (array.indexOf('+') != -1 || array.indexOf('-') != -1) {
        simplifying(array);
      }
    }
    // If the operaton cannot be completed I return a warning message instead
    // I use a ternary operator for this, pretty cute >:D
    return !isNaN(array.toString()) ? array.toString() : "Missing parameters";
  }
  // returning the final result
  return simplifying(operators);
}

// Just setting the initial result for the initial value
document.getElementById('resultBoxExercise5').innerHTML = calc(operation);
