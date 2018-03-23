
describe('greeting function', function(){

   it('says hello to siya.', function(){

      assert.equal(greet('siya'), 'Hello, siya');
   });

   it('says hello to John.', function(){

      assert.equal(greet('John'), 'Hello, John');
   });

   it('says hello to everyone.', function(){

      assert.equal(greet('everyone'), 'Hello, everyone');
   });

   it('Check the type', function(){
      assert.typeOf(greet('John'), 'string');
   });
});
