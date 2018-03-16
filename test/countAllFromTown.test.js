
describe('Number of a registration plates from selected location', function(){

   it('checks how many in this: CL 124,CY 567,CL 345, CJ 456,CL 341, CL', function(){
      assert.equal(countAllFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341','CL'),3);
   });

   it('checks how many in this: CY 87474,CA 78428,CY 3283,CJ 23789, CY 7433, CY', function(){
      assert.equal(countAllFromTown('CY 87474,CA 78428,CY 3283,CJ 23789,CY 7433','CY'), 3);
   });
});
