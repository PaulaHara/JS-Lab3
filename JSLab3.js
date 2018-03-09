// JSLab 3- Paula Akemi Hara

/* Q1: 
      a. “dogdeer”
      
      b. var children = girls.concat(boys);
      
      c. Will execute without error and the value of arr is “[20, 30, 4, 9, 16]”.
      
      d. The sum is 270.   
         Fixing: for (var i = 0; i < arr.length; i++)
         
      e. 9 
         “mi = ”  1  ” m = ”  9
*/

// Q2: 
function sumArray(arr, num){
    let sum = 0;
    
    for(let index = 0; index < num; index++){
        sum += arr[index];
    }
    
    return sum;
}