describe('Merge Sort function with comparator', function(){
  var arrToSort = [{ age: 4 }, { age: 8 }, { age: 2 }, { age: 9 }];
  var comparator = function(a, b) {
    if (a.age < b.age) return -1; // returning `-1` means "a goes before b"
    if (a.age > b.age) return 1;  // returning  `1` means "b goes before a"
    return 0; // returning 0 means "a and b are equivalent"
  };

  it('is able to merge sort an array while accepting a comparator function', function(){
    expect(mergeSortComparator(comparator,arrToSort)).toEqual([{ age: 2 }, { age: 4 }, { age: 8 }, { age: 9 }]);
  });
});
