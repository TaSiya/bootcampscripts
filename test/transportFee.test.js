
describe('Checks if the user have enough money for transport', function(){

   it('checks the money for morning', function(){
      assert.equal(transportFee('morning'), 'R20')
   });

   it('checks the money for afternoon', function(){
      assert.equal(transportFee('afternoon'), 'R10')
   });

   it('checks the money for nighshift', function(){
      assert.equal(transportFee('nighshift'), 'free')
   });

   it('look at the type', function(){
      assert.typeOf(transportFee('afternoon'), 'string')
   });
});
