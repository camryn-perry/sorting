
let swapCounter = 0;
let comparisonCounter = 0;
function bubbleSort(array, len = array.length){

  for(let i = 0; i < len; i++){
    if(i !== len - 1){
      comparisonCounter++;
    }
    if(array[i] > array[i+1]){
      let stash = array[i+1];
      array[i+1] = array[i];
      array[i] = stash;
      swapCounter++;
    }
  }
  if(len === 0){
    return array;
  }else{
    return bubbleSort(array, len -1);
  }

}
