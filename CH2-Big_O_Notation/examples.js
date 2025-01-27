// Time Complexity
// countUpAndDown O(n) - Linear Time

const countUpAndDown= (num) => {
    console.log("Going up!");
    for (let i = 0; i < num; i++) {
        console.log(i);
    }
    console.log("At the top!\nGoing down...");
    for (let j = num - 1; j >= 0; j--) {
        console.log(j);
    }
    console.log("Back down. Bye!");
}

// printAllPairs O(n^2) - Quadratic Time

const printAllPairs = (n) => {
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            console.log(i, j);
        }
    }
}

// logAtLeast5 O(n) - Linear Time

const logAtLeast5 = (n) => {
    for (let i = 1; i <= Math.max(5, n); i++) {
        console.log(i);
    }
}

// logAtMost5 O(1) - Constant Time

const logAtMost5 = (n) => {
    for (let i = 1; i <= Math.min(5, n); i++) {
        console.log(i);
    }
}

// Space Complexity
// sum O(1) - Constant Space

const sum = (arr) => {
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
        total += arr[i];
    }
    return total;
}

// double O(n) - Linear Space

const double = (arr) => {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        newArr.push(2 * arr[i]);
    }
    return newArr;
}
