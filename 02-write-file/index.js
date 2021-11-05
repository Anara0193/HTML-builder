const fs = require('fs');
const readline = require('readline');
const process = require('process');
const rl = readline.createInterface({
  input : process.stdin,
  output : process.stdout
});

function fileHandler(){
  fs.open('02-write-file/text.txt', 'w', (err) => {
      if(err) throw err;
      console.log('Enter text');
  });  
}

fileHandler();

rl.on('line', (input) => {
  if(input === 'exit') {
    console.log('Input completed');
    process.exit();
  }
  fs.appendFile('02-write-file/text.txt', `${input} \n`, (err) => {
    if(err) throw err;
});
});

rl.on('SIGINT', () => {
  rl.close();
  console.log('Input completed');
});