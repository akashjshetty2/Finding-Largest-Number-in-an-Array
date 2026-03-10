function getLargestNumber(arr){
if (arr.length===0){
  throw new ('The array has no element')
}
  let largest=arr[0]

  for(let i=1;i<arr.length;i++){
    if(arr[i]>largest){
      largest=arr[i]
    }
  }
return largest;
}
const numbers=[3,87,56,97,42,6]
const largestElement=getLargestNumber(numbers)
console.log('The largest element in an array is: ' + largestElement)
