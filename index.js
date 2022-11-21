function sum(...allNumbers) {
    return allNumbers.reduce((n, nn) => n + nn, 0);
}

console.log(sum(1, 2, 3)) // 6
console.log(sum(2, 2)) // 4
console.log(sum(10, 15, 249, 653, 846)) // 1773
console.log(sum());
console.log(sum(42));
