let display = document.getElementById("display");
let history = document.getElementById("history");

function appendValue(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = "";
  history.value = "";
}

function deleteLast() {
  display.value = display.value.slice(0, -1);
}

function calculate() {
  try {
    history.value = display.value;
    display.value = eval(display.value);
  } catch {
    display.value = "Error";
  }
}