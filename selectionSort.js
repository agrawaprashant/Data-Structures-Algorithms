module.exports = function selectionSort(arr) {
  for(let i=0;i<arr.length;i++){
    let j,k;
    for(j=k=i;j<arr.length;j++){
      if(arr[j] < arr[k]){
        k = j;
      }
    }
    let temp = arr[i];
    arr[i] = arr[k];
    arr[k] = temp;
  }
  return arr;
}