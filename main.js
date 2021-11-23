 var cnt = 0;

	for(cnt = 1; cnt <101; cnt++){
	
		if((cnt%3 === 0)&&(cnt % 5 === 0)){
			console.log("fizzbuzz");
		
		}
		else if(cnt%3 === 0){
			console.log("fizz")
		}
		else if(cnt%5 === 0){
			console.log("buzz")
		}
		else{
			console.log(cnt)
		}
		}


