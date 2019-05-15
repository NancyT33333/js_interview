var readline = require('readline');
 
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
 
 

var num=0;		
 
rl.on('line', function (data) {   
    		    

	num=parseInt(data.toString());
   
});
function check(num) {

  for (var i=2; i<Math.sqrt(parseInt(num)); i++ ) {
    if (parseInt(num) % i === 0 ) {
      return(i)
    }
    
  }

  return(num)
}
 
rl.on('close', () => {

	var res = check(num);
    process.stdout.write(res.toString());
 
   
   
    process.exit(0);
    });