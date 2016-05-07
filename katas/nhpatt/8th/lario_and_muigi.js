const pipeFix = ([first, ...rest]) => new Array(rest.pop() - first + 1).fill().map((_, i) => i + first);

console.log(pipeFix([1, 3]));