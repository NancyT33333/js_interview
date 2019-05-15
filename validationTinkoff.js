var readline = require('readline');
 
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
 
 
function check(str1) {
		  if (str1.length < 8) {
		    return("NO")
		  }
		  if ( !str1.match("[a-z]") ) {
		    return("NO")    
		  }
		   if ( !str1.match("[A-Z]") ) {
		    return("NO")    
		  }
		  if ( !str1.match("[0-9]") ) {
		    return("NO")    
		  }
		  return("YES")
		}

var str1='';		
 
rl.on('line', function (data) {    // line example: "0 0 1 1"
    		    

	str1+=data.toString();
   
});
 
rl.on('close', () => {

	var res = check(str1);
    process.stdout.write(res.toString());
 
   
   
    process.exit(0);
    });