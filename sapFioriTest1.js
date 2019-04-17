/** Дано число N, необходимо посчитать количество нулей на конце числа, являющегося результатом вычисления факториала N!
 */



function getNumOfZeros(num) {
  let s = 1;
  let result=0;
  for (let i=1; i<=num; i++) {   
    s=s*i;    
  }
  
  s=s.toString().split('').reverse().join('');
 
  
    for (let i=0; i<s.length; i++) {

      if (s[i]==='0') {
        result++;
      } else return result
    }
  
  return result
}

getNumOfZeros(2) // 0 