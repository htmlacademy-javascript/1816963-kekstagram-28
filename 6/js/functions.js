function checkStringLength(value, max){
  value = String(value);
  return value.length <= max;
}
checkStringLength();


function isPalidrom(value){
  const normalized = String(value).toLocaleLowerCase().replaceAll(' ', '');
  const reversed = normalized.split('').reverse().join('');

  return reversed === normalized;

}
isPalidrom();


function parsDigits(value){
  const digit = String(value).replace(/[^0-9]/g, '');
  return digit ? Number(digit) : NaN;
}
parsDigits();


function addStringChar(value, stringLength, pad) {
  if (value.length > stringLength) {
    return value;
  }

  let paddings = '';

  while (paddings.length < stringLength - value.length) {
    const availableSpace = stringLength - value.length - paddings.length;
    let addPiece = '';

    if (availableSpace < pad.length) {
      addPiece = pad.slice(0, availableSpace);
    } else {
      addPiece = pad;
    }

    paddings = addPiece + paddings;
  }

  return paddings + value;
}

addStringChar();
