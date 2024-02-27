let size = 4;
let s = "";

for (let i = 0; i < size; i++) {
  for (let j = 0; j < i; j++) {
    s += " ";
  }
  for (let k = 0; k < 2 * (size-i) - 1; k++) {
    s += "*";
  }
  s += "\n";
}

console.log(s);