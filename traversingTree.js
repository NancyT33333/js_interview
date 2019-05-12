/**в некоторой компании у всех сотр, кроме мистера Х есть ровно
* один руководитель.
* определите уровень каждого сотрудника.
* Первая строка - число сотр в компании. 
* далее - имя сотрудника и имя руководителя через пробел.
* вывод программы - в лексикографическом порядке имя - уровень.
* Входные данные 
* 3
* Stas X
* Artem X
* Вывод:
* Artem 1
* Stas 1
* X 0 */


var readline = require('readline');
 
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
 
var inpStr =""
var people = [];

var result = {X : 0}
var tree ={}
 
function dfs(key, tree, result) {
  if (tree[key]) {
    result[tree[key]];
 
    for (name in tree[key]) {
     
      result[tree[key][name]] = result[key] + 1;
      dfs(tree[key][name], tree, result);
      
    }
  }
}


rl.on('line', function (data) {    // line example: "0 0 1 1"
    inpStr+=data.toString()+",";

   
}); 

rl.on('close', () => {
	var [n, ...people] = inpStr.split(",");
    for (let i=0; i < n-1; i++) {
		let tupl= people[i].split(' ');
		
		if (tree[tupl[1]]) {
			tree[tupl[1]].unshift(tupl[0]);
		}
		if( !tree[tupl[1]]) {
		  tree[tupl[1]] = [tupl[0]];
    	}
  
	}

	dfs('X', tree, result);
	
	var items = Object.keys(result).map(function(key) {
    	return([key, result[key]]);
    	
	});
	
	items.sort((a, b) => {
		
		return(a[0].charCodeAt(0) - b[0].charCodeAt(0));
	});
	process.stdout.write("\n");
	for (i in items) {
		
			process.stdout.write(items[i][0].toString() + " " + items[i][1].toString() + "\n");   	
	}
   
    process.exit(0);
    });