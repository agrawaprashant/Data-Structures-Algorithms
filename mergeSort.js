module.exports.iMergeSort = function iMergeSort(arr) {
  let p = 2;
  while(p <= arr.length){
    for(let i=0; i+p-1 < arr.length ;i=i+p) {
      let start = i;
      let end = i+p-1;
      let mid = Math.floor((start + end) / 2);
      merge(arr,start,mid,end);
    }

    p = p*2;
  }
  if(p/2 < arr.length){
    merge(arr,0,p/2,arr.length-1);
  }

}

module.exports.rMergeSort = function rMergeSort(arr,start,end) {
  if(start < end) {
    let mid = Math.floor((start+end)/2);
    rMergeSort(arr,start,mid);
    rMergeSort(arr,mid+1,end);
    merge(arr,start,mid,end);
  }
}

function merge(arr,start,mid,end){
  let aux = [];
  let i=start,j=mid+1,k=start;
  while(i<=mid && j<=end){
    if(arr[i] < arr[j]){
      aux[k++] = arr[i++];
    }else {
      aux[k++] = arr[j++];
    }
  }
  for(;i<=mid;i++){
    aux[k++] = arr[i];
  }
  for(;j<=end;j++){
    aux[k++] = arr[j]
  }
  for(let i=start;i<=end;i++){
    arr[i] = aux[i];
  }

}