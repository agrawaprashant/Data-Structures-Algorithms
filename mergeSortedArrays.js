module.exports = function mergeSortedArrays(arr1,arr2){
  let m = arr1.length, n = arr2.length;
  let i=j=k=0;
  const result = [];
  while(i<m && j<n){
    if(arr1[i] < arr2[j]){
      result[k++] = arr1[i++];
    }else {
      result[k++] = arr2[j++];
    }
  }
  for(;i<m;i++){
    result[k++] = arr1[i];
  }

  for(;j<n;j++){
    result[k++] = arr2[j];
  }
  
  return result;
}