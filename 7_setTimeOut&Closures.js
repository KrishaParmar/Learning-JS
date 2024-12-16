// let a = 20;
// setTimeout(function () {
//     console.log(a);
    
// },3000);
// console.log("heyyaa");

for(var i = 1;i <=5;i++){
    setTimeout(function () {
        console.log(i);
        
    },i * 1000);
}
console.log("heyyaa");
//heyyaa
// 5
// 5
// 5
// 5
// 5 --> because function referemce to the same memory of i & you use var that 

for(let i = 1;i <=5;i++){
    setTimeout(function () {
        console.log(i);
        
    },i * 1000);
}
console.log("heyyaa");
//heyyaa
// 1
// 2
// 3
// 4
// 5 --> not located to the same memory of i

for(var i = 1;i <=5;i++){
    function close(x){
        setTimeout(function () {
            console.log(x);
            
        },i * 1000);
    }
    close(i)
}
console.log("heyyaa");
