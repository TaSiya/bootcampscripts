
function totalPhoneBill(bill){
   var billList = bill.split(', ');
   var callBill = 2.75;
   var smsBill = 0.65;
   var total = 0 ;

   for(var i = 0 ; i < billList.length ; i++){
      if(billList[i].startsWith('c')){
         total = total + 2.75;
      }
      else if (billList[i].startsWith('s')) {
         total = total + 0.65;
      }
   }
   return 'R'+total.toFixed(2);
}
