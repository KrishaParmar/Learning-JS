// function a(){
//     let x = 10;
//     function b(){
//         console.log(x);
        
//     }
//     return b;
// }
// a()(); //10 
// inner function



// function a(){
//     let x = 10;
//     function b(i){
//         console.log(x,i);
        
//     }
//     return b;
// }
// a()("hello");

//10 hello

// function a(){
//     var count = 0;
//     return function b(){
//         count++;
//         console.log(count);
        
//     }
// }
// let count1 = a();
// count1();
//1

function counter(){
    var count = 0;
    this.increment = function(){
        count++;
        console.log(count);
        
    }
    this.decrecrement = function(){
        count--;
        console.log(count);
        
    }
}
let count1 = new counter();
count1.increment();
count1.increment();
count1.increment();
count1.increment();
count1.increment();
// 1
// 2
// 3
// 4
// 5

