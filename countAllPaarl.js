
function countAllPaarl(reg){

   var regList = reg.split(', ');
   var found = 0;

   for(var i = 0 ; i < regList.length ; i++){

      if(regList[i].startsWith('CJ')){found++;}
   }

   return found;
}
