const pwdFunction = require('./pwd');
const lsFunction = require('./ls');
const fs = require('fs');
const catFunction = require('./cat');

process.stdout.write('prompt >');

process.stdin.on('data', data => {
  const cmd = data.toString().trim();

  let string = cmd.split(' ');

  if (cmd === 'pwd') pwdFunction();
  if (cmd === 'ls') lsFunction(fs);

  if (string[0] === 'cat') {
    catFunction(fs, string[1]);
  }

  //process.stdout.write('You typed: ' + cmd);
});
