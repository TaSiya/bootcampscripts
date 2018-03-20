
let itemList = [
{name : 'apples', qty : 10},
{name : 'pears', qty : 37},
{name : 'bananas', qty : 27},
{name : 'apples', qty : 3},
];

let results = [
{name : 'pears', qty : 37},
{name : 'bananas', qty : 27},
];

describe('Find the items over 20', function(){

   it('checks if the given list objects are over 20 ', function(){
      assert.deepEqual(findItemsOver20(itemList),results);
   });

   it('checks if the output is an Array', function(){
      assert.isArray(findItemsOver20(itemList), 'is a array');
   });
});
