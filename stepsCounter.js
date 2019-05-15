var readline = require('readline');
 
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
 
 

var input=[];		
 
rl.on('line', function (data) {   
    		    
  input.push(data);
	
   
});
function check(numX, numY) {
  var days = 0;
 
  while( numX < numY ) {
    
    numX+=numX*0.7;
    days++;
  }
  return(days);
}
rl.on('close', () => {
 
  var numX = parseInt(input[0].split(' ')[0]);
  var numY = parseInt(input[0].split(' ')[1]);

	var res = check(numX, numY);
  process.stdout.write(res.toString());
 
   
   
    process.exit(0);
    });