
describe('Is from bellville', function(){

   it('checks if the registration number is from bellville', function(){

      assert.equal(isFromBellville('CY'),true);
   });

   it('checks if the registration number is not from bellville', function(){

      assert.notEqual(isFromBellville('CY'), false);
   });

   
});
