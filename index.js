var twoSum = function (nums, target) {
  const hashMap = new Map();

  for (let i = 0; i < nums.length; i++) {
    const firstNum = nums[i];
    // console.log(firstNum)
    const secondNum = target - nums[i];
    // console.log(secondNum)
    // console.log(hashMap.has(secondNum))
    if (hashMap.has(secondNum)) {
      return [hashMap.get(secondNum),i];
    }
    hashMap.set(firstNum, i);
    // console.log(hashMap)
  }
};

// console.log(twoSum([2,7,11,13],9));
