export default function addCommas(value) {
	// Ensure the value is explicitly converted to a number
	const number = Number(value);
	
	// Check if the value is a valid number
	if (isNaN(number)) {
	  return "Invalid number";
	}
  
	// Convert the number to a string with commas for thousands
	const integerPart = Math.floor(number).toLocaleString();
  
	// Ensure the decimal part has exactly 3 digits
	const decimalPart = (number % 1).toFixed(3).substring(2); // Remove '0.'
	
	return `${integerPart}.${decimalPart}`;
  }
  