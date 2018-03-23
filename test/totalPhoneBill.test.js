
describe('Calculates total phone bill', function(){

   it('checks how much calls and sms\'s cost', function(){
      assert.equal(totalPhoneBill('call, sms, call, sms, sms'),'R7.45')
   });

   it('checks how much calls and sms\'s cost', function(){
      assert.equal(totalPhoneBill('call, call, sms, call, sms, sms'),'R10.20')
   });

   it('checks the type', function(){
      assert.typeOf(totalPhoneBill('call, sms, call, sms, sms'),'string')
   });
});
