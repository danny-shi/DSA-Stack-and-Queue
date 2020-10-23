// 1. Create a stack class
const Stack = require("./stack");
function main() {
  const starTrek = new Stack();

  console.log(isEmpty(starTrek));

  console.log("#######");

  starTrek.push("Kirk");
  starTrek.push("Spock");
  starTrek.push("McCoy");
  starTrek.push("Scotty");

  display(starTrek);

  starTrek.pop();

  console.log("#######");

  display(starTrek);

  console.log("#######");

  console.log(isEmpty(starTrek));

  console.log("#######");

  console.log(peek(starTrek));
}

// 2. Useful methods for a stack

// 3. Check for palindromes using a stack

// 4. Matching parantheses in an expression

// 5. Sort stack

// 6. Create a queue using Singly linked list

// 7. Create a queue class using Doubly linked List

// 8. Queue implementation using a stack

// 9. Square dance pairing

// 10. The Ophidian Bank
