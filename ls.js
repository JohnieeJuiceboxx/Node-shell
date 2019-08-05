module.exports = (fs, done) => {
  fs.readdir('./', 'utf8', (err, files) => {
    if (err) {
      done('Something went wrong!');
    } else {
      done(files.join('\n'));
      //   process.stdout.write(files.join('\n'));
      //   process.stdout.write('\nprompt >');
    }
  });
};
