let r = [1,2,3,4];
let area = function(arr){
    return Math.PI*arr*arr;
}


//1
const calculate = function(arr,logic){
    let output = [];
    for(let i = 0;i<arr.length ; i++){
        output.push(logic(arr[i]))
    }
    return output;
}
console.log(calculate(r,area));

//2
console.log(r.map(area));

