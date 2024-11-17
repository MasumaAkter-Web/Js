function count_Occu_String(arr){
    let count={};
    for(let str of arr){
        count[str]=(count[str] || 0)+1;

    }
    return count;
}
let string=["apple","dates","apple","grapes","grapes"];
console.log(count_Occu_String(string));