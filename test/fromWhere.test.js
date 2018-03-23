
describe('Where are you from based on registration number', function(){
   it('checks if from Cape Town', function(){
      assert.equal(fromWhere('CA 85867'), 'Cape Town');
   });

   it('checks if from Bellville', function(){
      assert.equal(fromWhere('CY 85867'), 'Bellville');
   });

   it('checks if from Paarl', function(){
      assert.equal(fromWhere('CJ 85867'), 'Paarl');
   });

   it('checks type', function(){
      assert.typeOf(fromWhere('CA 85867'), 'string');
   });
});
