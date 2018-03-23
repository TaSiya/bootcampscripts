
describe('greeting function', function(){

   it('says hello to siya.', function(){

      assert.equal(greet('siya'), 'Hello, siya');
   });

   it('Check the type', function(){
      assert.typeOf(greet('John'), 'string');
   });
});
