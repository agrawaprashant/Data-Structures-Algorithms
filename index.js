// function findFactors(num) {
//   let factors = [];
//   for(let i=1;i<=num/2; i++) {
//     if(num % i === 0) {
//       factors.push(i);
//     }

//   }
//   factors.push(num)
//   return factors;
// }

// // findFactors(0)

// const findBinary = require('./decimalToBinary');
// console.log(findBinary(14));

//     const bubbleSort = require('./bubbleSort');
//     console.log(bubbleSort([2,1,4,3,7,5,4,2,88,54,73]))
    
//     const insertionSort = require('./insertionSort');
//     console.log(insertionSort([2,1,4,3,7,5,4,2,88,54,73]));

//     const selectionSort = require('./selectionSort');
//     console.log(selectionSort([2,1,4,3,7,5,4,2,88,54,73]))

//     const quickSort = require('./quickSort');
//     const arr = [2,1,4,3,7,5,4,2,88,54,73];
//     quickSort(0,10,arr);
//     console.log('Quick Sorted Array-->', arr)

//     const merge = require('./mergeSortedArrays');
//     console.log(merge([1,2,4,6],[3,5,7,9]));

    const {iMergeSort} = require('./mergeSort');
    const {rMergeSort} = require('./mergeSort');
    let arr2 = [2,1,4,3,7,5,4,2,88,54,73];
    iMergeSort(arr2)
    console.log('Iterative Merge Sort-->',arr2);
    let arr3 = [2,1,4,9,7,8,4,1,88,54,32,55];
    rMergeSort(arr3,0,11)
    console.log('Recursive Merge Sort-->', arr3)