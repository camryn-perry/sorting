describe('Split Array function', function() {
  it('is able to split an array into two halves', function() {
    expect(split([1, 2, 3, 4])).toEqual([[1, 2],[3, 4]]);
  });
  it('can split an array into non-even halves', function() {
    expect(split([1, 2, 3, 4, 5])).toEqual([[1, 2],[3, 4, 5]]);
  });
});

describe('Merge function', function(){
  it('is able to merge two sorted arrays into one sorted array', function(){
    expect(merge([1, 2],[3, 4])).toEqual([1, 2, 3, 4]);
    expect(merge([1, 2],[3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
    expect(merge([3, 6],[2, 4, 5])).toEqual([2, 3, 4, 5, 6]);
  });
});

describe('Merge Sort function', function(){
  it('is able to merge sort an array', function(){
    expect(mergeSort([4, 6, 2, 1, 3, 5])).toEqual([1, 2, 3, 4, 5, 6]);
    expect(mergeSort([7, 4, 6, 2, 1, 3, 5])).toEqual([1, 2, 3, 4, 5, 6, 7]);
  });
});
