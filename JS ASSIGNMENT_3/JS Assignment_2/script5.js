function multiplicationTable(n){
    let table=new Array(n);
    for(let i=0;i<n;i++){
        table[i]=new Array(n); //row er jonno array
        for(let j=0;j<n;j++){
            table[i][j]=(i+1)*(j+1);

        }
        
    }
    return table;
}
let n=3;
let table=multiplicationTable(n);
console.log(multiplicationTable(n));