const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const addNumbers = (sum, numsLeft, completionCallback) => {

  if (numsLeft === 0){
    completionCallback(sum);
    rl.close();
  } else {
    rl.question('What number do you want to sum? ', (answer) => {
      sum += parseInt(answer);
      console.log(`sum is now ${sum}`);
      numsLeft--;
      addNumbers(sum, numsLeft, completionCallback);
    });
  }
};

addNumbers(0, 3, sum => console.log(`Total Sum: ${sum}`));
