 var cnt = 0;
 var arr = [];
	for(cnt = 0; cnt <100; cnt++){
		arr.push(cnt+1);
	}
	

	arr.forEach((item)=>{
		if((item % 3 === 0)&&(item % 5 === 0)){
			console.log("fizzbuzz");
		
		}
		else if(item % 3 === 0){
			console.log("fizz")
		}
		else if(item % 5 === 0){
			console.log("buzz")
		}
		else{
			console.log(item)
		}

	})

