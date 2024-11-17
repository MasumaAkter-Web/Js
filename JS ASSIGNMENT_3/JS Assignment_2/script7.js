function flatten2DArray(arr){
    let flattenArray=[];
    let index=0;
    for( let i=0;i<arr.length;i++){
        for(let j=0;j<arr.length;j++){
            flattenArray[index]=arr[i][j];
            index++;
        }
        
    }return flattenArray;
}
let arr=[
    [1,2],
    [3,4]
    ];
        console.log(flatten2DArray(arr));