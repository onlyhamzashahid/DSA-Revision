function countUnique(nums) {
    if (nums.length > 0) {
      let i = 0;
      for (let j = 1; j < nums.length; j++) {
        if (nums[i] !== nums[j]) {
          i++;
          nums[i] = nums[j];
        }
      }
      return i + 1;
    } else {
      throw new Error("Array is Empty");
    }
    
}


let check = countUnique([1,1,2,3,3,3,3,4,4,5])
console.log(check)