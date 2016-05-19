const numberOfRoutes = (m, n) => fact(m + n) / (fact(m) * fact(n));

const fact = n => n == 1 ? 1 : n * fact(n - 1);

console.log(numberOfRoutes(3, 2));