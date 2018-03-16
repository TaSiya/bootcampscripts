
describe('Cslculstes total phone bill', function(){

   it('checks how much are these calls and sms\'s', function(){
      assert.equal(totalPhoneBill('call, sms, call, sms, sms'),'R7.45')
   });

   it('checks the type if it is a string', function(){
      assert.typeOf(totalPhoneBill('call, sms, call, sms, sms'),'string')
   });
});
