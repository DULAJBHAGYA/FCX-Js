const size = 5;

for (let i = 1; i <= size; i++) {
    let s = "";

    for (let j = 1; j <= size - i; j++) {
        s += " ";
    }

    for (let k = 1; k <= i; k++) {
        if (k === 1 || k === i || i === size) {
            s += "* ";
        } else {
            s += "  ";
        }
    }
console.log(s);
}
