let displayValue = "";

function appendCharacter(character) {
  displayValue += character;
  document.getElementById("display").value = displayValue;
}

function clearDisplay() {
  displayValue = "";
  document.getElementById("display").value = displayValue;
}

function calculate() {
  try {
    const result = eval(displayValue);
    document.getElementById("display").value = result;
    displayValue = result.toString();
  } catch (error) {
    document.getElementById("display").value = "Error";
    displayValue = "";
  }
}
