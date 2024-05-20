// checking aum zero of sorted array problem 1
// [-5,-4,-3,-2,0,2,4,6,8]

function getSumZero(array) {
    for (let number of array){
        for (let i = 1; i < array.length; i++) {
            if (number + array[1] == 0) {
               return [number,array[i]] 
            }
            
        }
    }
  }

  const result = getSumZero([-5, -4, -3, -2, 0, 2, 4, 6, 8]);
  console.log(result);

  //o(n^2) quadratic time complexity