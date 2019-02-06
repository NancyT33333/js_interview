/** 
Дан упорядоченный по неубыванию массив целых 32-разрядных чисел. Требуется удалить из него все повторения.

Желательно получить решение, которое не считывает входной файл целиком в память, т.е., использует лишь константный объем памяти в процессе работы.
*/

const readline = require('readline');


const rl = readline.createInterface({
    input: process.stdin
});

var lines = [];

function duplRemover(input) {
    input = input.slice(1);
  var output = [];
  for (var i=0; i<input.length; i++) {    
    input[i]!==input[i-1] ? output.push(input[i]) : output;  
  }
  return output;
}

rl.on('line', (line) => {
    lines.push(line);

});


rl.on('close', () => {
    var res = duplRemover(lines); 
    
  
    for (var i=0; i<res.length; i++) {  
        process.stdout.write(res[i]);
    };
});
