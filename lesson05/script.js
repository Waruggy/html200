let input = "";
var amount = 0.0;
function request() {
  input = "";
  while (input != "Q" && input != "q") {
    input = prompt(
      "Please enter Q for Quit, W for Withdraw, D for Deposit, or B for Balance"
    );
    let instruction;
    let result = input.toUpperCase();
    switch (result) {
      case "Q":
        instruction = "Goodbye. See you later.";
        alert(instruction);
        break;
      case "W":
        instruction = "Please enter the amount.";
        amount = amount - Number(prompt(instruction));
        break;
      case "D":
        instruction = "Please enter the amount.";
        amount = amount + Number(prompt(instruction));
        break;
      case "B":
        alert(amount.toFixed(2));
        break;
      default:
        alert("Only Q,W,D,B yields results");
        break;
    }
  }
}
