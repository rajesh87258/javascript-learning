// function showAler(){
//     alert("Hey!!")
// }
// showAler();



// function showAlert(msg){
//     alert("hey!!!");

// }
// showAlert("Hello");



// function sum(a,b){
//     console.log(a+b);
// }
// sum(4,6);


function sum(a,b){
    return a + b;
}
var result=sum(5,6);
console.log(result);

function hoistDemo(){
    var i;
    console.log(i)
    var i =10;
}
hoistDemo();