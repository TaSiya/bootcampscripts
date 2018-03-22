
let itemList2 = [
{name : 'apples', qty : 10},
{name : 'pears', qty : 37},
{name : 'orange', qty : 5},
{name : 'bananas', qty : 27},
{name : 'apples', qty : 3},
];


describe('Find the items over given threshold', function(){

   let results1 = [
   {name : 'pears', qty : 37},
   {name : 'apples', qty : 10},
   {name : 'orange', qty : 5},
   {name : 'bananas', qty : 27},
   {name : 'apples', qty : 3},
];

   it('checks if the given list of objects are over given threshold ', function(){
      assert.deepEqual(findItemsOver(itemList2,0),results1);
   });

   it('checks if the output is an Array', function(){
      assert.isArray(findItemsOver(itemList2,7));
   });
});
