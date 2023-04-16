// var box = 15 ;
// function outer(){
//     var outerVar=10;
//     function inner(){
//         var innerVar=16;
        
//     }
    
//     inner();
//     console.log(innerVar);
   
// }
// // console.log(outerVar);
// outer();



// var name="global";
function outer(){
    // var name="outer"
    console.log(name);
    function inner(){
        var name = " inner";
        console.log(name);
    }
    inner();

}
outer();
console.log(name);
