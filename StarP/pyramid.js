let size = 4;
let s = "";

for (let i = 1; i <= size; i++) {
  let row = "";
  for (let j = 1; j <= size * 2 - 1; j++) {
    if (j >= size - i + 1 && j <= size + i - 1) {
      row += "*";
    } else {
      row += " ";
    }
  }
  s += row + "\n";
}

console.log(s);
