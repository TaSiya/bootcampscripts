
describe('checking registration numbers', function(){

   it('checks if the number plate is from GP, L, EC, MP', function(){
      assert.equal(regCheck('DV 646 MP', 'MP'), true);
   });

   it('checks if the number plate is not from GP, L, EC, MP', function(){
      assert.equal(regCheck('CY 646 888 ', 'CY'), false);
   });

   it('checks if the number plate is not from GP, L, EC, MP', function(){
      assert.equal(regCheck('CY 646 888 ', 'CY'), false);
   });

});
