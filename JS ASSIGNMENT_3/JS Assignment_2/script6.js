function averageOfNum(arr){
    let sum=0;
    for(let i=0;i<arr.length;i++){
        sum=sum+arr[i];
    }
    let avg=sum/arr.length;
    return avg;
}
let arr=[1, 2 ,3 ,4 ,5];
console.log("Average:"+averageOfNum(arr));