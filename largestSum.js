// [1,2,3,4,3,5,4,6,7,8] Total Elemnts = 10
// Count largest sum of consecitive number
// number = 4
// answer = 25

// Conditions
// num > array else error message 
// formula to run loop = 10 - 4 + 1 ==7


function largestSum(array, num) {
    if(num > array.length){
        throw new Error("The number is greater than array")
    }else{
        let max = 0;
        for (let i = 0; i < array.length - num + 1 ; i++) {
            let temp = 0;
            for (let j = 0; j < num; j++) {
                temp += array[i + j]
            }
            if(temp > max){
                max = temp;
            }
            
        }
        return max;
    }
    
    
}


let check = largestSum([1, 2, 3, 4, 10, ],2);
console.log(check)