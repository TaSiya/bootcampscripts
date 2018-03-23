
describe('transport fee', function(){

   it('For morning', function(){
      assert.equal(transportFee('morning'), 'R20')
   });

   it('For afternoon', function(){
      assert.equal(transportFee('afternoon'), 'R10')
   });

   it('For nighshift', function(){
      assert.equal(transportFee('nighshift'), 'free')
   });

   it('look at the type', function(){
      assert.typeOf(transportFee('afternoon'), 'string')
   });
});
