let size = 5;

for (let i = 0; i < size; i++) {
    let s = '';
    for (let j = 0; j < size; j++) {
        if (i === 0 || i === size - 1 || j === 0 || j === size - 1) {
            s += '* ';
        } else {
            s += '  ';
        }
    }

    console.log(s);
}
