
describe('Is from bellville', function(){

   it('checks if the registration number is from bellville', function(){

      assert.equal(isFromBellville('CY 23646'),true);
   });

   it('checks if the registration number is not from bellville', function(){

      assert.notEqual(isFromBellville('CY 3244'), false);
   });


});
