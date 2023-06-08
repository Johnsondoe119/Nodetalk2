//PROBLEM 1

//Promises are used to manage asynchronous tasks like fetching data from a server or making API calls.
//It provides eventual success and failure of the async task.
//They offer several advantages over traditional callback-based approaches such as readability, error handling, chaining, and compostion:

function getData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      const data = "Got the data";
      resolve(data);
    }, 2000);
  });
}

getData()
  .then((data) => {
    console.log(data);
    return data.toUpperCase();
  })
  .then((upperData) => {
    console.log(upperData);
  })
  .catch((err) => {
    console.error(err);
  });

// PROBLEM #2
// A callback is a function that is passed as an argument to another function and is executed when a certain event or task is completed.
//Callbacks are commonly used in JavaScript for handling asynchronous operations, allowing the code to continue running while waiting for a response from an asynchronous task.
//callback hell is an exessive amount of callback functions.

function fetchData(callback) {
  setTimeout(() => {
    const data = "Fetched data";

    // Simulating another asynchronous operation
    setTimeout(() => {
      const processedData = data.toUpperCase();

      // Simulating yet another asynchronous operation
      setTimeout(() => {
        const finalData = processedData + " - Processed";
        callback(finalData);
      }, 2000);
    }, 2000);
  }, 2000);
}

fetchData((result) => {
  console.log(result);
});

// PROBLEM #3
// In regular functions, the value of this is determined by how the function is called. It refers to the object that is currently executing the function.
// The value of this can vary depending on the context in which the function is invoked.
// On the other hand, arrow functions do not bind their own this value.
//Instead, they inherit the this value from the enclosing lexical scope.
//In other words, the this value inside an arrow function is determined by the surrounding context where the arrow function is defined, not how it is called.
// Regular function

const regularFunction = function () {
  console.log(this);
};

const obj = {
  name: "John",
  regularMethod: regularFunction,
};

obj.regularMethod(); // 'this' refers to 'obj'

// Arrow function
const arrowFunction = () => {
  console.log(this);
};

const arrowObj = {
  name: "Jane",
  arrowMethod: arrowFunction,
};

arrowObj.arrowMethod(); // 'this' refers to the surrounding lexical scope (e.g., global/window object)

//   PROBLEM#4
const numbers = [48, 20, 18, 7, 12, 9, 8, 10, 12, 96, 3, 36, 51];

function filterNumbers() {
  return numbers.filter((number) => {
    return number % 3 === 0 && number % 6 === 0 && number % 9 !== 0;
  });
}

const filteredArray = filterNumbers();
console.log(filteredArray); // Output: [48, 12, 96]

// PROBLEM#5

//Await: The await keyword can only be used inside an async function.
// It pauses the execution of the function until the awaited promise is resolved or rejected. While waiting, it doesn't block the execution of the whole program, allowing other tasks to continue.
function resolveAfterDelay(delay) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Resolved!");
    }, delay);
  });
}

async function asyncFunction() {
  console.log("Start");

  const result1 = await resolveAfterDelay(2000);
  console.log(result1);

  const result2 = await resolveAfterDelay(1000);
  console.log(result2);

  console.log("End");
}

asyncFunction();
