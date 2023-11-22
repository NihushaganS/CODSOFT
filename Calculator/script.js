    let currentInput = '';
    let currentOperation = '';
    let previousInput = '';

    function appendNumber(number) {
      currentInput += number;
      document.getElementById('result').value = currentInput;
    }

    function operation(operator) {
      currentOperation = operator;
      previousInput = currentInput;
      currentInput = '';
    }

    function clearInput() {
      currentInput = '';
      document.getElementById('result').value = '';
    }

    function calculate() {
      let result;
      const num1 = parseFloat(previousInput);
      const num2 = parseFloat(currentInput);

      switch (currentOperation) {
        case '+':
          result = num1 + num2;
          break;
        case '-':
          result = num1 - num2;
          break;
        case '*':
          result = num1 * num2;
          break;
        case '/':
          result = num1 / num2;
          break;
        default:
          return;
      }

      document.getElementById('result').value = result;
      currentInput = result.toString();
      currentOperation = '';
      previousInput = '';
    }
