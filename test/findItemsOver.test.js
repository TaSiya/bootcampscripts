
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
   {name : 'bananas', qty : 27},
];

let results2 = [
{name : 'pears', qty : 37},
{name : 'bananas', qty : 27},
];

   it('checks if the quantity is over 22 ', function(){
      assert.deepEqual(findItemsOver(itemList2,22),results1);
   });

   it('checks if the quantity is over 10 ', function(){
      assert.deepEqual(findItemsOver(itemList2,10),results2);
   });

   it('checks if the output is an Array', function(){
      assert.isArray(findItemsOver(itemList2));
   });
});
