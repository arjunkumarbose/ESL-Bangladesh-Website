<div align="center">
  <img height="60" src="https://edurev.gumlet.io/AllImages/original/ApplicationImages/CourseImages/944e5d47-8c55-4a89-91e5-22ab5f2798fc_CI.png">
  <h1>MCQ TEST</h1>
</div>

###### 1. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let greeting;
greetign = {};
console.log(greetign);
```

- A: `{}`
- B: `ReferenceError: greetign is not defined`
- C: `undefined`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: B

Explanation: There is a typographical error in the code. Instead of "greeting," an empty object is assigned to the variable "greetign." As 'greetign' is not defined, a 'ReferenceError' will be generated.

</p>
</details>

###### 2. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sum(a, b) {
  return a + b;
}

sum(1, "2");
```

- A: `NaN`
- B: `TypeError`
- C: `"12"`
- D: `3`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: C

Explanation: When you attempt to combine a number with a string in JavaScript, type coercion is used. In this instance, it will stringify the number 1 and combine it with the remainder of the string "2" to produce the string "12".

</p>
</details>

###### 3. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
const food = ["🍕", "🍫", "🥑", "🍔"];
const info = { favoriteFood: food[0] };

info.favoriteFood = "🍝";

console.log(food);
```

- A: `['🍕', '🍫', '🥑', '🍔']`
- B: `['🍝', '🍫', '🥑', '🍔']`
- C: `['🍝', '🍕', '🍫', '🥑', '🍔']`
- D: `ReferenceError`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: A

Explanation: In this code, the 'food' array is not specifically altered. Only the 'favoriteFood' property of the 'info' object is changed to 🍝. As a result, the food variety is still ['🍕', '🍫', '🥑', '🍔'].

</p>
</details>

###### 4. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sayHi(name) {
  return `Hi there, ${name}`;
}

console.log(sayHi());
```

- A: `Hi there,`
- B: `Hi there, undefined`
- C: `Hi there, null`
- D: `ReferenceError`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: B

Explanation: The 'sayHi' function is called without any arguments even though it requires a 'name' input. If you attempt to call a function in JavaScript without any arguments, the missing arguments are given the value "undefined." Therefore, the code returns "Hi there, undefined."

</p>
</details>

###### 5. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let count = 0;
const nums = [0, 1, 2, 3];

nums.forEach((num) => {
  if (num) count += 1;
});

console.log(count);
```

- A: 1
- B: 2
- C: 3
- D: 4

<details><summary><b>Answer</b></summary>
<p>

#### Answer: C

Explanation: In the JavaScript, values like "0," "null," "undefined," and empty strings """ are all regarded as falsy. The 'if (num)' condition in the provided code determines whether the value of 'num' is truthy, and if so, increases the value of the 'count' variable. The 'nums' array only contains the truthy values '1', '2', and '3', thus the 'count' is increased three times, giving the result '3'.

</p>
</details>
