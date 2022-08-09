const romanNumbers = {
  1000: 'M',
  500: 'D',
  100: 'C',
  50: 'L',
  10: 'X',
  5: 'V',
  1: 'I',
};

function repeatChar(times, c) {
  let tmp = '';
  for (let i = 0; i < times; i++) {
    tmp += c;
  }
  return tmp;
}

// recursive function that convert decimal to roman
function _decimalToRoman(decimal) {
  if (romanNumbers[decimal] !== undefined) {
    return romanNumbers[decimal];
  }
  if (decimal === 0) return '';
  const dString = decimal + '';
  const unit = +dString[0];
  const place = 10 ** (dString.length - 1);

  if (decimal >= 1000) {
    return repeatChar(decimal / 1000, romanNumbers[1000]);
  }

  if (unit <= 3) {
    return repeatChar(unit, romanNumbers[place]);
  }
  const keys = Object.keys(romanNumbers);
  const index = keys.indexOf(place + '');
  const first = unit === 9 ? place * 10 : +keys[index + 1];
  const second = decimal - first;
  if (second < 0)
    return _decimalToRoman(Math.abs(second)) + _decimalToRoman(first);
  return _decimalToRoman(first) + _decimalToRoman(second);
}

// actual api
function decimalToRoman(decimal) {
  const numberInStringFormat = `${decimal}`;
  const { length } = numberInStringFormat;
  const toRoman = [];
  for (let i = 0; i < length; ++i) {
    let num = undefined;
    if (+numberInStringFormat[i] !== 0)
      (num = +numberInStringFormat[i] * 10 ** (length - 1 - i)),
        toRoman.push(_decimalToRoman(num));
  }
  return toRoman.join('');
}

module.exports = decimalToRoman;
