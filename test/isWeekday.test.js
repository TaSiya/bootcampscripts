
describe('Is it a weekday', function(){

   it('check for a weekday', function(){
      assert.equal(isWeekday('saturday'),false);
   });

   it('check for a weekday', function(){
      assert.equal(isWeekday('monday'),true);
   });

   it('check the type', function(){
      assert.typeOf(isWeekday('Monday'), 'boolean');
   });
});
