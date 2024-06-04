const readline = require('node:readline');
const process = require('node:process');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.question('Welcome to Holberton School, what is your name?\n', (name) => {
  console.log(`Your name is: ${name}`);
  rl.close();
});

process.on('exit', () => {
  console.log('This important software is now closing');
});
