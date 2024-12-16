// let a = 10;
// function n1() {
//     let a = 20;
//     console.log(a);
//     function n2() {
//         let a = 300000;
//         console.log(a);
        
//     }
    
//     return n2 ;
    
// }
// let z = n1();
// console.log(z);

// console.log(a);
// //'''''''''''''

// z();
function a(){
    let x = 10;
    function b(){
        let x = 20;
        function c(){
            console.log(x);
            
        }
        x = 200;
        c();
    }
    b();
}
a()

