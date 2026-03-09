function getLargestElement(arr){
	var largest=0;
	for(var i=0;i<arr.length;i++){
		if(typeof arr[i]==='object'){
			var temp=getLargestElement(arr[i])
			if(temp>largest){
				largest=temp;
			}		
		}else{
			if(arr[i]>largest){
				largest=arr[i];
			}
		}
	}
	return largest;
}
var nestedArray = [3, [7, 21], [9, [19, 1]], 6];
var result = getLargestElement(nestedArray);
console.log("Largest element:", result);
