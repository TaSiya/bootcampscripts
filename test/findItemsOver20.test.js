
describe('Find the items over 20', function(){

   let itemList = [
    {name : 'apples', qty : 10},
    {name : 'pears', qty : 37},
    {name : 'bananas', qty : 27},
    {name : 'apples', qty : 3},
];

   it('checks if the given list objects are over 20 ', function(){
      assert.equal(findItemsOver20(itemList),[]{"name":"pears","qty":37},{"name":"bananas","qty":27}]);
   });
});
