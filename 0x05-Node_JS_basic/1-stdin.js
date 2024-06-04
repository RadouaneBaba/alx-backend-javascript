console.log('Welcome to Holberton School, what is your name?');
process.stdin.on('readable', () => {
  const chunk = process.stdin.read();
  if (chunk != null) {
    process.stdout.write(`Your name is: ${chunk}`);
  }
});

process.on('exit', () => {
  console.log('This important software is now closing');
});
