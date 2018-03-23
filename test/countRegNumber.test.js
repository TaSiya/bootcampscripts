
describe('Count registration numbers in a array', function(){

   it('checks if they are 3', function(){

      assert.equal(countRegNumber('CA 182736,CY 523519,CJ 812328'),3);
   });

   it('checks if they are 5', function(){

      assert.equal(countRegNumber('CA 182736,CY 523519,CJ 812328,CY 523519,CJ 812328'),5);
   });
});
