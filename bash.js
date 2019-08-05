const pwdFunction = require('./pwd');
const lsFunction = require('./ls');
const fs = require('fs');
process.stdout.write('prompt >');

process.stdin.on('data', data => {
  const cmd = data.toString().trim();
  pwdFunction(cmd);
  lsFunction(fs);
  //process.stdout.write('You typed: ' + cmd);
});
