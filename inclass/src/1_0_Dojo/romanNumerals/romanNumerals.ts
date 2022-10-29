const ROMAN_TO_ARABIC = {
  "M": 1000,
  "CM": 900,
  "D": 500,
  "CD": 400,
  "C": 100,
  "XC": 90,
  "L": 50,
  "XL": 40,
  "X": 10,
  "IX": 9,
  "V": 5,
  "IV": 4,
  "I":1,
}



export const romanNumbers = (num: number) => {

  let roman = "";

  for (let key in ROMAN_TO_ARABIC) {
    while (num >= ROMAN_TO_ARABIC[key]) {
      roman += key;
      num -= ROMAN_TO_ARABIC[key];
    }
  }

  return roman;
}
