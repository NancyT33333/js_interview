/* Некоторые из региональных офисов Tinkoff.ru связаны двухсторонним железнодорожным сообщением.
Всего у нас N городов, нужно посчитать общее число железных дорог между городами.

Первая строка содержит число N (1<=N<=100).
Следующие N строк содеражт по N цифр в каждой строке(0 или 1). Если между городами i и j есть железная дорога,
то на позиции (i,j) стоит1 , иначе 0. */


var readline = require('readline');
 
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
 
let result = 0;
let matrix = [];

 
rl.on('line', function (data) {    // line example: "0 0 1 1"
	
    matrix.push(data);
});

rl.on('close', () => { 

	matrix = matrix.slice(1); //removed 1st element which is length of array

	for (str in matrix) {
		let cstr = matrix[str].split(' ');
		var currRes = cstr.reduce((first,last)=> Number(first)+Number(last));
		result+=Number(currRes);
	}
	result = result / 2;
	process.stdout.write(result.toString());

	
	
	process.exit(0); 
});