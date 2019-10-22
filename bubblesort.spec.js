describe('Bubble Sort', function(){
  //let swapCounter = 0;
  //let comparisonCounter = 0;
  afterEach(function(){
    swapCounter = 0;
    comparisonCounter = 0;
  })
  it('handles an empty array', function(){
    expect( bubbleSort([], 0) ).toEqual( [] );
  });
  it('sorts two items correctly', function(){
    expect( bubbleSort([2,1], 2) ).toEqual( [1,2] );
  });
  it('swap counter is incremented for each swap for one array loop', function(){
    bubbleSort([2,1,4,5,3,6], 6);
    expect(swapCounter).toEqual(3);
  });
  it('comparison counter is incremented for each comparison for one array loop', function(){
    bubbleSort([2,1,4,5,3,6], 6);
    expect(comparisonCounter).toEqual(15);
  });
  it('properly sorted array', function(){
    expect(bubbleSort([2,1,4,5,3,6], 6)).toEqual([1,2,3,4,5,6]);
  });

});
