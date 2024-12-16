let a = [1,2,3,4,5,6,7,8,9];
let output1 = a.map((x)=>x*10)
console.log(output1);


let output2 = a.filter((x)=> x%2)
console.log(output2);


let age = [{alpha:'a',age:20},{alpha:'b',age:21},{alpha:'c',age:70},{alpha:'d',age:21}];
let output3 = age.reduce(function(acc,curr){
    if(acc[curr.age]){
        ++acc[curr.age];
    }else{
        acc[curr.age] = 1
    }
    return acc;
},{})
console.log(output3);

let ouput4 = age.filter((x)=>{
    if(x.age>30){
        console.log(x.age);
        
    }
})
let output4 = age.filter(x=>x.age>20).map(x=>x.alpha)
console.log(output4);
