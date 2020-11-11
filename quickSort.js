module.exports = function quickSort(start,end,arr){
  if(start < end){
    const pIndex = partition(arr,start,end);
    quickSort(start,pIndex-1,arr);
    quickSort(pIndex+1,end,arr);
  }
}

function partition(arr,start,end) {
  let pIndex = start,pivot = arr[end];
  for(let i=start;i<end;i++){
    if(arr[i] <= pivot){
      swap(i,pIndex,arr);
      pIndex++;
    }
  }
  swap(pIndex,end,arr);
  return pIndex;
}

function swap(index1,index2,arr){
  let temp = arr[index1];
  arr[index1] = arr[index2];
  arr[index2] = temp;
}
