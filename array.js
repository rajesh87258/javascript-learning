// var arr=[2,3,4,5,6,7]

// function print(element){
//     console.log(element);
// }
// arr.forEach(print);
var i=20;
function hoistDemo(){
   
    var i=30;
   
}
hoistDemo();
console.log(i);





var a = 10;

function test() {
    console.log(a);
    a = 20;
}

test();


function scopeDemo(){
  
    var i = 10;
   
}
scopeDemo();
console.log(i);
