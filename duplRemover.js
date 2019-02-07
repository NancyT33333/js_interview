/** 
Дан упорядоченный по неубыванию массив целых 32-разрядных чисел. Требуется удалить из него все повторения.

Желательно получить решение, которое не считывает входной файл целиком в память, т.е., использует лишь константный объем памяти в процессе работы.
*/

const readline = require('readline');


const rl = readline.createInterface({
    input: process.stdin
});

var prevLine='';
var output=[];

rl.on('line', (line) => {
    
    if (line !== prevLine) {
        output.push(line);
    }
    prevLine = line;    

});


rl.on('close', () => {      
    output = output.slice(1);
    for (var i=0; i<output.length; i++) {  
        process.stdout.write(output[i] + '\n');
    };
});
