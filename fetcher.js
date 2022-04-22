const request = require('request');
const fs = require('fs');

//set up stdin keyboard listener:
const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  const handleUserInput = function(data) {
    if (data === 'n')
      process.exit();
    if (data === 'y')
      console.log("alright alright");
    stdin.on("data", handleUserInput);
  }

  return stdin;
};

//set up handleUserInput
  
//setup args
let args = process.argv.slice(2);
let source = args[0].toString();
let dest = args[1].toString()
//let size = body.length;

request( source, (error, response, body) => { //here comes the callback which takes these three paramenters
  if (error) { //first: what to do if error
    console.log('error:', error);
  // } if ("./index.html") {
    
  //   console.log(`This file already exists. Push Y + ENTER to overwrite, or N + ENTER to exit.`),//put the option here to overwrite(Y) or not (N)
  //   setupInput();
   } // else (if the filepath is no good) {..what to do};
  else { //here's where to inject the writeFile function to use the body information
   fs.writeFile(dest, body, () => {
     console.log(`Downloaded and saved ${body.length} bytes to ${dest}`);
   });
  }
  
  //console.log('statusCode:', response && response.statusCode);
});

