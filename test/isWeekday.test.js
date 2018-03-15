
describe('Checks if a day is a weekday', function(){

   it('is it weekday', function(){
      assert.equal(isWeekday('saturday'),false);
   });

   it('check the type', function(){
      assert.equal(isWeekday('Monday'), true);
   });
});
