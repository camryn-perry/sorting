function split(wholeArray) {

  /* your code here to define the firstHalf and secondHalf arrays */

  const halfwayPoint = Math.floor(wholeArray.length/2);
  const firstHalf = wholeArray.slice(0, halfwayPoint);
  const secondHalf = wholeArray.slice(halfwayPoint)

  return [firstHalf, secondHalf];
}

function merge(arr1, arr2) {
  const newArr = [];
  let idx1 = 0;
  let idx2 = 0;

  while (idx1 < arr1.length || idx2 < arr2.length) {
    if (arr1[idx1] < arr2[idx2] || !arr2[idx2]) {
      newArr.push(arr1[idx1]);
      idx1++;
    }
    else if (arr2[idx2] < arr1[idx1] || !arr1[idx1]) {
      newArr.push(arr2[idx2]);
      idx2++;
    }
  }
  return newArr;
}

function mergeSort(array) {
  if (array.length === 1) return array;

  const pair = split(array);
  const sorted1 = mergeSort(pair[0]);
  const sorted2 = mergeSort(pair[1]);
  return merge(sorted1, sorted2);
}
