
function splitComparator(wholeArray) {
  const halfwayPoint = Math.floor(wholeArray.length/2);
  const firstHalf = wholeArray.slice(0, halfwayPoint);
  const secondHalf = wholeArray.slice(halfwayPoint)

  return [firstHalf, secondHalf];
}

function mergeComparator(func, arr1, arr2) {
  const newArr = [];
  let idx1 = 0;
  let idx2 = 0;

  while (idx1 < arr1.length || idx2 < arr2.length) {
    // debugger;
    if (arr1[idx1] && !arr2[idx2]) {
      newArr.push(arr1[idx1]);
      idx1++;
    }
    else if (arr1[idx1] && func(arr1[idx1], arr2[idx2]) < 0) {
      newArr.push(arr1[idx1]);
      idx1++;
    }
    else if (arr2[idx2] && !arr1[idx1]) {
      newArr.push(arr2[idx2]);
      idx2++;
    }
    else if (arr2[idx2] && func(arr1[idx1], arr2[idx2]) > 0) {
      newArr.push(arr2[idx2]);
      idx2++;
    }
  }
  return newArr;
}

function mergeSortComparator(func, array) {
  if (array.length === 1) return array;

  const pair = splitComparator(array);
  const sorted1 = mergeSortComparator(func, pair[0]);
  const sorted2 = mergeSortComparator(func, pair[1]);
  return mergeComparator(func, sorted1, sorted2);
}
