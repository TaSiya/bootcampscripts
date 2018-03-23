
describe('Count all Paarl Registration plates', function(){

   it('How many in this situation: CJ 5354, CA 6492, CJ 653, CY 6534, CA 78286, CY 782478, CJ 98478', function(){
      assert.equal(countAllPaarl('CJ 5354, CA 6492, CJ 653, CY 6534, CA 78286, CY 782478, CJ 98478'), 3);
   });

   it('How many in this situation: CJ 5354, CA 6492, CJ 653, CY 6534, CJ 78286, CJ 782478, CJ 98478', function(){
      assert.equal(countAllPaarl('CJ 5354, CA 6492, CJ 653, CY 6534, CJ 78286, CJ 782478, CJ 98478'), 5);
   });

   it('Check the type', function(){
      assert.typeOf(countAllPaarl('CJ 5354, CA 6492, CJ 653, CY 6534, CJ 78286, CJ 782478, CJ 98478'), 'number');
   });
});
