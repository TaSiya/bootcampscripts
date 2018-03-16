

function countAllFromTown(reg, location){

   var regList = reg.split(',');
   var found = 0 ;

   for(var i = 0 ; i < regList.length ; i++){
      if(regList[i].startsWith(location)){found++;}
   }
   return found;
}
