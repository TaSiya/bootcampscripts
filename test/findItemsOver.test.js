
let itemList = [
{name : 'apples', qty : 10},
{name : 'pears', qty : 37},
{name : 'bananas', qty : 27},
{name : 'apples', qty : 3},
];

let results = [
{name : 'pears', qty : 37},
{name : 'apples', qty : 10},
{name : 'bananas', qty : 27},
];

describe('Find the items over given threshold ', function(){

   it('checks if the given list objects are over given threshold ', function(){
      assert.deepEqual(findItemsOver(itemList,5),results);
   });

   it('checks if the output is an Array', function(){
      assert.isArray(findItemsOver(itemList,2), 'is a array');
   });
});
