const noBoringZeros = n => n ? ('' + n).replace(/0+$/, '') : 0;

console.log(noBoringZeros(2000));