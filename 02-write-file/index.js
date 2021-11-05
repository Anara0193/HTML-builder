const fs = require('fs');
const readline = require('readline');
const rl = readline.createInterface({
  input : process.stdin,
  output : process.stdout
});

rl.question(`Enter text`,
(userInput)=>{
  console.log(userInput);
  fs.writeFile("02-write-file/hello.txt", userInput, function(error){
    if(error) throw error; 
  });
});


