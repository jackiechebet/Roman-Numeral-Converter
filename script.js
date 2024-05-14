document.getElementById("convert-btn").addEventListener("click", function() {
    const numberInput = document.getElementById("number").value.trim();
    const outputDiv = document.getElementById("output");
    
    // Check if the input is empty
    if (numberInput === "") {
      outputDiv.textContent = "Please enter a valid number";
      return;
    }
    
    // Parse the input to an integer
    const number = parseInt(numberInput);
    
    // Check if the number is less than 1
    if (number < 1) {
      outputDiv.textContent = "Please enter a number greater than or equal to 1";
      return;
    }
    
    // Check if the number is greater than or equal to 4000
    if (number >= 4000) {
      outputDiv.textContent = "Please enter a number less than or equal to 3999";
      return;
    }
    
    // Convert the number to a Roman numeral
    const romanNumeral = convertToRoman(number);
    
    // Display the Roman numeral in the output
    outputDiv.textContent = romanNumeral;
  });
  
  function convertToRoman(num) {
    const romanNumerals = [
      { value: 1000, numeral: "M" },
      { value: 900, numeral: "CM" },
      { value: 500, numeral: "D" },
      { value: 400, numeral: "CD" },
      { value: 100, numeral: "C" },
      { value: 90, numeral: "XC" },
      { value: 50, numeral: "L" },
      { value: 40, numeral: "XL" },
      { value: 10, numeral: "X" },
      { value: 9, numeral: "IX" },
      { value: 5, numeral: "V" },
      { value: 4, numeral: "IV" },
      { value: 1, numeral: "I" }
    ];
    
    let result = "";
    
    for (let i = 0; i < romanNumerals.length; i++) {
      while (num >= romanNumerals[i].value) {
        result += romanNumerals[i].numeral;
        num -= romanNumerals[i].value;
      }
    }
    
    return result;
  }