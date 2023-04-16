// var student = {
//     "name":"abc",
//     rollNo:135,
//     marks:90,
//     address:{
//         city:"New Delhi",
//         Pincode:110032
//     }


// };
// function PrintProperty(obj,prop){
//     console.log(obj[prop]);
// }
// PrintProperty(student,"marks");


// var sec = 1;
// function sayHello(){
//     console.log("after",sec);
//     sec++;
//     if (sec == 6){
//         //stop
//         clearInterval(id);
//     }
// }
// var id = setInterval(sayHello,1000);


var sec = 1;
function sayHello(){
    console.log("10",sec);
    sec++;
    if(sec == 10){
        //stop
        clearInterval(id);
    }
}
var id = setInterval(sayHello,1000);

