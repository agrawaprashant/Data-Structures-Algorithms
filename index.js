function findFactors(num) {
  let factors = [];
  for(let i=1;i<=num/2; i++) {
    if(num % i === 0) {
      factors.push(i);
    }

  }
  factors.push(num)
  return factors;
}

// findFactors(0)

const findBinary = require('./decimalToBinary');
console.log(findBinary(14));

    const bubbleSort = require('./bubbleSort');
    console.log(bubbleSort([2,4,1,8,3,5]))