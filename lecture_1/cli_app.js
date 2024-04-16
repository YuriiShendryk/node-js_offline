const readline = require('readline');
const rl = readline.createInterface({
 input: process.stdin, // введення зі стандартного потоку
 output: process.stdout, // виведення у стандартний потік
});

rl.question('What is your name?', answer => {
    console.log(`Nice to meet you ${answer}`);
    
    rl.close();
});