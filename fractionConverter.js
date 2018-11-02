const toFraction = val => {
  if (val === 0) {
    return '0';
  }
  const gcd = (a, b) => {
    if (a < b) {
      [a, b] = [b, a];
    }
    let remainder = a % b;
    if (remainder === 0) {
      return b;
    }
    return gcd(b, remainder);
  }
  let valStr = val.toString();
  let leadingChar = '';
  if (valStr.startsWith('-')) {
    leadingChar = '-';
    valStr = valStr.substring(1);
  }
  const decimalIndex = valStr.indexOf('.');
  const decimalLength = decimalIndex >= 0
    ? valStr.length - decimalIndex - 1
    : 0;

  let numerator = parseInt(valStr.replace('.', ''));
  let denominator = Math.pow(10, decimalLength);
  const gcdVal = gcd(numerator, denominator);

  numerator /= gcdVal;
  denominator /= gcdVal;

  return `${leadingChar}${numerator}/${denominator}`;
};

console.log(toFraction(0.5)); // 1/2
console.log(toFraction(3.0)); // 3/1
console.log(toFraction(2.5)); // 5/2
console.log(toFraction(0)); // 0
console.log(toFraction(5)); // 5/1
console.log(toFraction(-5/10)); // -1/2
console.log(toFraction(12.75));  // 51/4
