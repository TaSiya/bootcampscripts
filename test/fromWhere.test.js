
describe('Where are you from based on registration number', function(){
   it('checks from Cape Town', function(){
      assert.equal(fromWhere('CA 85867'), 'Cape Town');
   });

   it('checks from Bellville', function(){
      assert.equal(fromWhere('CY 85867'), 'Bellville');
   });

   it('checks from Paarl', function(){
      assert.equal(fromWhere('CJ 85867'), 'Paarl');
   });

   it('checks the type', function(){
      assert.typeOf(fromWhere('CA 85867'), 'string');
   });
});
