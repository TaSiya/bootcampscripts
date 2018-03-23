
let salesDate =[
   {department : 'hardware', sales : 4500},
   {department : 'outdoor', sales : 1500},
   {department : 'outdoor', sales : 500},
   {department : 'electronics', sales : 5500},
   {department : 'hardware', sales : 3500},
   {department : 'outdoor', sales : 2000},
   {department : 'hardware', sales : 4500},
];

describe('Most Profitable Department', function(){

   it('checks profitable department', function(){
      assert.deepEqual(mostProfitableDepartment(salesDate),'hardware')
   });

   it('check type', function(){
      assert.typeOf(mostProfitableDepartment(salesDate), 'string');
   });

});
