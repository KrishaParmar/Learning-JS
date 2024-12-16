// let count = 0;
// document.getElementById('button').addEventListener("click",function xys() {
//     console.log("button cliked",++count);

// })

// useing closure for data hiding

function clone() {
  let count = 0;
  document.getElementById("button").addEventListener("click", function xys() {
    console.log("button cliked", ++count);
  });
}
clone();
