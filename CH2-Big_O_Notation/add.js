const addUpToOne = (num) => {
    let total = 0;
    for (let i = 1; i <= num; i++) {
        total += i;
    }
    return total;
}

const addUpToTwo = (num) => {
    return num * (num + 1) / 2;
}

const start = performance.now();
addUpToOne(100000000);
const finishTimeOne = performance.now();
addUpToTwo(100000000);
const finishTimeTwo = performance.now();
console.log(`addUpToOne time: ${(finishTimeOne - start) / 1000} seconds`)
console.log(`addUpToTwo time: ${(finishTimeTwo - finishTimeOne) / 1000} seconds`)
