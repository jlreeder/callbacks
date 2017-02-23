const readline = require("readline");

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Write this first.
function askIfGreaterThan(el1, el2, callback) {
  reader.question(`Is ${el1} greater than ${el2} (yes/no)`, (answer) => {
    if (answer.match(/y*/)[0]) {
      callback(true);
    } else {
      callback(false);
    }
    reader.close();
  });
  // Prompt user to tell us whether el1 > el2; pass true back to the
  // callback if true; else false.
}

// Once you're done testing askIfGreaterThan with dummy arguments, write this.
function innerBubbleSortLoop(arr, i, madeAnySwaps, outerBubbleSortLoop) {
  // Do an "async loop":
  // 1. If (i == arr.length - 1), call outerBubbleSortLoop, letting it
  //    know whether any swap was made.

  if (i === arr.length - 1){
    outerBubbleSortLoop(madeAnySwaps);
    console.log(arr, "final sorted array");
  } else {
    // i++;
    madeAnySwaps = false;

    let el1 = arr[i];
    let el2 = arr[i+1];

    if (el1 > el2){
      let el1Value = el1;
      arr[i] = arr[i+1];
      arr[i+1] = el1Value;
      console.log(arr, "array after switch");

      madeAnySwaps = true;
    }
    i++;
    innerBubbleSortLoop(arr, i, madeAnySwaps, outerBubbleSortLoop);
  }

  // 2. Else, use `askIfGreaterThan` to compare `arr[i]` and `arr[i +
  //    1]`. Swap if necessary. Call `innerBubbleSortLoop` again to
  //    continue the inner loop. You'll want to increment i for the
  //    next call, and possibly switch madeAnySwaps if you did swap.
}

// Once you're done testing innerBubbleSortLoop, write outerBubbleSortLoop.
// Once you're done testing outerBubbleSortLoop, write absurdBubbleSort.

function absurdBubbleSort(arr, sortCompletionCallback) {
  function outerBubbleSortLoop(madeAnySwaps) {
    // Begin an inner loop if you made any swaps. Otherwise, call
    // `sortCompletionCallback`.
  }

  // Kick the first outer loop off, starting `madeAnySwaps` as true.
}

// absurdBubbleSort([3, 2, 1], function (arr) {
//   console.log("Sorted array: " + JSON.stringify(arr));
//   reader.close();
// });

// askIfGreaterThan(1,2, () => console.log("Callback was called"));

let sortedArray = [1, 2, 3];
let unsortedArray = [3, 1, 2];
innerBubbleSortLoop(unsortedArray, 0, false, () => {
  console.log("Finished!");
});
// console.log(sortedArray);
