//1-A
function values(number1, number2){
    if(typeof(number1) === 'number' && typeof(number2) === 'number')
    console.log(number1 + ' is a number ' )
    console.log(number2 + ' is a number ' )
}

 values (5, 6);



 //1-B
 function values2(x, y){
     for(i=0 ; i < y ; i++){
         console.log(x ** (i+1));
     }
   
}

 values2 (3, 5);
 

 function values3(x, y){
     for(i=1 ; i <= y ; i++){
         console.log(x ** i );
     }
   
}
values3 (2, 8);

//2
let myFavoriteFruit = 'mango';
function printFavoriteFruit() {
    myFavoriteFruit = 'banana'
    console.log('My favorite fruit is: ' + myFavoriteFruit);
}
printFavoriteFruit();
