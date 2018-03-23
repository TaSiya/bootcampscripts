describe('Years ago', function(){
   it('checks how many years ago was 2017', function(){
      assert.equal(yearsAgo(2017), 1);
   });
   it('checks how many years ago was 2000', function(){
      assert.equal(yearsAgo(2000), 18);
   });
   it('check the type', function(){
      assert.typeOf(yearsAgo(1990), 'number');
   });
});
