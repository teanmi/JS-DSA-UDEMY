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

## Official Intro to Big O
Big O Notation is a way to formalize fuzzy counting
An algorithm is O(f(n)) if the # of simple operations the computer does is eventually less than constant time f(n) as n increases

addUpToTwo is O(1)
addUpToOne is O(n)

(examples.js)

## Simplifying Big O Expressions
Rules:
- Simplify constants down ex. O(2n)=O(n), O(500)=O(1)
- Smaller terms do not matter ex. O(n + 10)=O(n)

Big O Shorthands
1. Arithmetic Operations are constant
2. Variable Assignment is constant
3. Accessing elements in array & object are constant
4. In loop complexity is length of loop times complexity inside the loop

## Space Complexity
Auxiliary Space Complexity - space taken up by algorithm not including inputs

Rules:
1. Most primitives are constant space
2. Strings require O(n) space
3. Reference types are generally O(n)

## Logs and Section Recap
log~2~(value)=exponent -> 2^exponent^=value
Logarithmic time is great (O(log n))
