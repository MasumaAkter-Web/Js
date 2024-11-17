function reverseArray(array){
    let rev_arr=[];
    for( let i=0;i<array.length;i++){
        rev_arr[i]=array[array.length-1-i];
    }
    return rev_arr;
}
console.log("Reversed array:"+reverseArray([1,2,3,4,5]));