function* generator(x = 1) {
  for (;;) {
    x = (yield x++) || x;
  }
}

let gen = generator();
console.log(gen.next().value);
console.log(gen.next().value);
