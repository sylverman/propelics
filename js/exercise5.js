operation = "512/2+43-9+1*2+100*2";
document.getElementById('operationExercise5').value = operation;
operationExercise5 = document.getElementById('operationExercise5');

var calc = function(operation) {
  var operators = operation.split("").reduce((total, current) => {
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

    return total;
  }, []);

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

    function simplify (array, operator){
      var operatorPosition = array.indexOf(operator);
      rightValue = array[operatorPosition+1];
      leftValue = array[operatorPosition-1];
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
    return array.toString();
  }

  return simplifying(operators);
}


document.getElementById('resultBoxExercise5').innerHTML = calc(operation);
