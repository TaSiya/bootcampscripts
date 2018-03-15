function yearsAgo(year){

  	var yea = new Date(year);
  	var today = new Date();
  	console.log(today.getFullYear());
 	return(today.getFullYear() - yea );
}
