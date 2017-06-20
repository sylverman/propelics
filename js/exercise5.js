operation = "512+43-9+1+100";
document.getElementById('operationExercise5').innerHTML = operation;

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
  /*
  array.forEach(function(current, index, array){
    if(array.indexOf('+') != -1){
      plusPosition = array.indexOf('+');
      rightValue = array[plusPosition+1];
      leftValue = array[plusPosition-1];
      var newVal = parseInt(leftValue)+parseInt(rightValue);
      console.log(newVal);
      array.splice(plusPosition-1, 3, newVal);
      //console.log(array);
    }
  });
  */
  var operations = ['*', '/', '+', '-'];

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
  if(array.indexOf('+') != -1){
    plusPosition = array.indexOf('+');
    rightValue = array[plusPosition+1];
    leftValue = array[plusPosition-1];
    var newVal = operationCalc('+', [parseInt(leftValue),parseInt(rightValue)]);
    console.log(newVal);
    array.splice(plusPosition-1, 3, newVal);
    console.log(array);
  }
  if(array.indexOf('+') != -1){
    // If the same operation must be performed again, we use a recursive function
    simplifying(array);
  }
  operations.forEach((currOperation) => {
    console.log(currOperation);
  });

}
simplifying(operators);
//console.log(operators);
