
describe('Check the function how many years ago', function(){

   it('checks how many years ago was 2017', function(){

      assert.equal(yearsAgo(2017), 1);
   });

   it('checks how many years ago was 2000', function(){

      assert.equal(yearsAgo(2000), 18);
   });
});
