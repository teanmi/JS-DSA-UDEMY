# Big O Notation

## Intro to Big O
Big O is used to give a numeric representation of code.
Useful for discussing trade-offs between different approaches.

## Timing Our Code
What does better mean for our code?
- Faster?
- Less Memory?
- Readable?

Situation dependent but for now speed is biggest important.
Is add1 or add2 a better solution (add.js)?
- Based on time add2 is clearly faster by manual timing

Problem with manual time?
- Different machines will record different times
- Same machines will record different times
- For fast algorithms, speed might not be precise enough

## Counting Operations
Instead of counting time, count simple operations
addUpToTwo: has 3 operations (mult, add, divide)
addUpToOne: has 5n+2 operations

## Visualizing Time Complexities
[Visualizing Tool](https://rithmschool.github.io/function-timer-demo/)
