let n=prompt("Enter the number");
let sum=0;
function sumOfnumbers(n){
    for(let i=1;i<=n;i++){
        sum=sum+i;
    }
    return sum;
}
console.log("Sum:"+sumOfnumbers(n));