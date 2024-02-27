let size = 5;

for (let i = 0; i < size; i++) {
    let row = '';
    for (let j = 0; j < size; j++) {
        if (j === i || j === size - 1 - i) {
            row += '* ';
        } else {
            row += '  ';
        }
    }
    console.log(row);
}
