//🔟 Valid Parentheses
function isParenthesesValid(str) {
  let stack = [];
  let obj = {
    "]": "[",
    "}": "{",
    ")": "(",
  };
  for (let char of str) {
    if (char === "(" || char === "{" || char === "[") {
      stack.push(char);
    } else {
      if (stack[stack.length - 1] === obj[char]) {
        stack.pop();
      } else {
        return false;
      }
    }
  }
  return stack.length === 0;
}
console.log(isParenthesesValid("{[()]}"));
//8️⃣ First Non-Repeating Character
function firstnonrepeat(str) {
  let map = new Map();
  for (let char of str) {
    map.set(char, map.has(char) ? map.get(char) + 1 : 1);
  }
  for (const [key, Value] of map) {
    if (Value === 1) return key;
  }
}
console.log(firstnonrepeat("swiss"));
//6️⃣ Move All Zeros to End (Two Pointer)
function moveerostoend(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      [arr[i], arr[count]] = [arr[count], arr[i]];
      count++;
    }
  }
  return arr;
}
console.log(moveerostoend([0, 1, 0, 3, 12]));
//4️⃣ Find Missing Numbers in Range
function findmissing(arr) {
  let max = Math.max(...arr);
  let missingdigits = max - arr.length;
  let result = [];
  for (let i = 1; i < max; i++) {
    if (!arr.includes(i)) {
      result.push(i);
      missingdigits--;
      if (missingdigits === 0) return result;
    }
  }
}
console.log(findmissing([1, 3, 4, 6]));
//2️⃣ Flatten Nested Array (No built-in flat)
function flatarray(arr) {
  let res = [];
  for (let num of arr) {
    if (Array.isArray(num)) {
      res.push(...flatarray(num));
    } else {
      res.push(num);
    }
  }
  return res;
}
console.log(flatarray([1, [2, [3, 4], 5], 6]));
