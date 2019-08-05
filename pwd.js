module.exports = cmd => {
  if (cmd === 'pwd') {
    process.stdout.write(process.cwd());
  }
};
