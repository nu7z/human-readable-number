module.exports = function toReadable (number) {
    if (number === 0) return 'zero';
    const objNumber = {
        upToNineTeen: {
            1: 'one',
            2: 'two',
            3: 'three',
            4: 'four',
            5: 'five',
            6: 'six',
            7: 'seven',
            8: 'eight',
            9: 'nine',
            10: 'ten',
            11: 'eleven',
            12: 'twelve',
            13: 'thirteen',
            14: 'fourteen',
            15: 'fifteen',
            16: 'sixteen',
            17: 'seventeen',
            18: 'eighteen',
            19: 'nineteen'
        },
        tenths: {
            2: 'twenty',
            3: 'thirty',
            4: 'forty',
            5: 'fifty',
            6: 'sixty',
            7: 'seventy',
            8: 'eighty',
            9: 'ninety'
        }
    };

  const string = String(number);
  const [first, ...last] = string;
  switch (string.length) {
    case 2:
        if (number < 20) return objNumber.upToNineTeen[string];
        if (+last === 0) return objNumber.tenths[first];
        return `${objNumber.tenths[first]} ${objNumber.upToNineTeen[last]}`;
        break;
    case 3:
        const lastNumber = String(+last.join(''));
        let count = `${objNumber.upToNineTeen[first]} hundred`;
        if (+lastNumber === 0) return count;
        if (+lastNumber < 20) return `${count} ${objNumber.upToNineTeen[lastNumber]}`;
        const [decile, unit] = lastNumber;
        if (+unit === 0) return `${count} ${objNumber.tenths[decile]}`;
        return `${count} ${objNumber.tenths[decile]} ${objNumber.upToNineTeen[unit]}`;
        break;
    default: 
        return objNumber.upToNineTeen[first];
  }
}
