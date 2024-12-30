function intToRoman(num: number): string {
  let str: string = "";

  let quotient = 0;
  if ((quotient = Math.floor(num / 1000))) {
    for (let i = 1; i <= quotient; i++) {
      str += "M";
      num %= 1000;
    }
  }

  if ((quotient = Math.floor(num / 900))) {
    str += "CM";
    num %= 900;
  }

  if ((quotient = Math.floor(num / 500))) {
    str += "D";
    num %= 500;
  }

  if ((quotient = Math.floor(num / 400))) {
    str += "CD";
    num %= 400;
  }

  if ((quotient = Math.floor(num / 100))) {
    for (let i = 1; i <= quotient; i++) {
      str += "C";
      num %= 100;
    }
  }

  if ((quotient = Math.floor(num / 90))) {
    str += "XC";
    num %= 90;
  }

  if ((quotient = Math.floor(num / 50))) {
    str += "L";
    num %= 50;
  }

  if ((quotient = Math.floor(num / 40))) {
    str += "XL";
    num %= 40;
  }

  if ((quotient = Math.floor(num / 10))) {
    for (let i = 1; i <= quotient; i++) {
      str += "X";
      num %= 10;
    }
  }

  if ((quotient = Math.floor(num / 9))) {
    str += "IX";
    num %= 9;
  }

  if ((quotient = Math.floor(num / 5))) {
    str += "V";
    num %= 5;
  }

  if ((quotient = Math.floor(num / 4))) {
    str += "IV";
    num %= 4;
  }

  if ((quotient = Math.floor(num / 1))) {
    for (let i = 1; i <= quotient; i++) {
      str += "I";
      num %= 1;
    }
  }

  return str;
}
