/** Требуется найти в бинарном векторе самую длинную последовательность единиц и вывести её длину.

    Желательно получить решение, работающее за линейное время и при этом проходящее по входному массиву только один раз.

*/



const readline = require('readline');
 
const rl = readline.createInterface({
    input: process.stdin
});
 
var numbersSequence = '';

function getMaxSeq(str) {  
  var counter=0;
  var currCounter=0;
  for (let i=0; i<str.length; i++) {  
    

    if (str[i] == 1) {
      currCounter++; 

      counter = (currCounter > counter) ? currCounter : counter;   
    }
    if (str[i] == 0 ) {
      if (currCounter !== 0) {
        counter = (currCounter > counter) ? currCounter : counter;   
        
        currCounter = 0;
        }
      }      
  }
  return counter;
};

rl.on('line', (line) => {
    numbersSequence+=line;

});


rl.on('close', () => {        
    numbersSequence = [].slice.call(numbersSequence, 1).join('');
    var res = getMaxSeq(numbersSequence);
    process.stdout.write(res.toString());
});
