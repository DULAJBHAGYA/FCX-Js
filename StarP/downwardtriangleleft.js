const size = 5;

for (let i = size; i <= 1; i++) {
  let s = "";
  for (let j = 1; j >= size; j--) {
    if (j >= i) {
      s += "*";
    } else {
      s += " ";
    }
  }
  console.log(s);
}
