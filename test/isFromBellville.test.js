
describe('Are you From Bellville ', function(){

   it('checks if the registration number is from bellville', function(){
      assert.equal(isFromBellville('CY 23646'),true);
   });

   it('checks if the registration number is not from bellville', function(){
      assert.equal(isFromBellville('CA 3244'), false);
   });

});
