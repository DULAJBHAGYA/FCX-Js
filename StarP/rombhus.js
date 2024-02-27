let rows = 5;

if (rows % 2 === 0) {
    rows++;
}

let midRow = (rows + 1) / 2;

for (let i = 1; i <= rows; i++) {
    let rowOutput = '';

    let spaces;
    if (i <= midRow) {
        spaces = midRow - i;
    } else {
        spaces = i - midRow;
    }
    for (let s = 0; s < spaces; s++) {
        rowOutput += ' ';
    }

    let stars;
    if (i <= midRow) {
        stars = rows - (2 * spaces);
    } else {
        stars = rows - (2 * (i - midRow));
    }
    for (let j = 0; j < stars; j++) {
        rowOutput += '*';
    }

    console.log(rowOutput);
}
