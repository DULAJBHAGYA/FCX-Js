let size = 5;

for (let i = 1; i <= size; i++) {
    let row = '';
    for (let j = 1; j <= i; j++) {
        row += '*';
    }
    console.log(row);
}

for (let i = size - 1; i >= 1; i--) {
    let row = '';
    for (let j = 1; j <= i; j++) {
        row += '*';
    }
    console.log(row);
}
