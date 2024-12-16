console.log("start");
setTimeout(function cb(){
    console.log("callBack");
    
},5000);
fetch("https://www.youtube.com/watch?v=2WJL19wDH68&list=PLlasXeu85E9cQ32gLCvAvr9vNaUccPVNP&index=19").then(function mt(){
    console.log("API fetched");
    
})
console.log("end");
