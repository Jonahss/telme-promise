module.exports = telme = function telme(question) {
 var stdin = process.stdin, stdout = process.stdout;

 stdin.resume();
 stdout.write(question + ": ");

 return new Promise((resolve, reject) => {
   stdin.once('data', function(data) {
     data = data.toString().trim();
     stdin.pause();
     resolve(data);
   });
  });
};
