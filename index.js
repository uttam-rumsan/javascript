
    // let x="ram";
    // let color="red";
    // const pi="3.14";
    // console.log(x,color,pi);

    // alert("message");
//    let name= prompt("what is your name?");
//    alert(name);
// let hour=11;
// if(hour>10||hour<13){
//     alert("hello");
// }
// let result=condition?value1:value2;

// let result=(13>120)?true:false;
// console.log(result);

// for(var i=0;i<5;i++){
//     console.log(i);
// }

// var j=1;
// while(j<2){
//     console.log("hello");
// }

// function sayHi(name){
// console.log("hello"+" "+name);
// }
// sayHi("uttam");

// let name=prompt("what is you name?");
// function sayHi(name){
// console.log("hello"+" "+ name);
// }
// sayHi(name);



/*javascript assignment*/



/* length converter*/
/*convert km to meter*/
// alert("convert km to meter");
// let userInput=prompt("enter length in km");
// kmToMeter(userInput);

// function kmToMeter(userInput){
//     meter=userInput*1000;
//     return meter;
// }

// console.log(userInput +" "+ "km" +" "+ "is equal to"+meter+ " "+ "meter");

/*javascript function to calculate age by inserting year*/
// let userDateOfBirth=prompt("enter your date of birth");
// findAge(userDateOfBirth);

// function findAge(userDateOfBirth){
// age=2020-userDateOfBirth;
// return age;
// }
// console.log("your age is"+ " "+age);


/*javascript function to calculate the current date*/
// function findCurrentDate(){
//    var today=new Date();
//    var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
//    console.log(date);
// }
// findCurrentDate();

/*program to allow user to input two numbers and return true if any of the number is 50 or their sum is 50*/
// var firstNumber=prompt("enter the first number");
// var secondNumber=prompt("enter the second number");
// var result=check(firstNumber,secondNumber);

// function check(firstNumber,secondNumber){
//     var sum=firstNumber+secondNumber;
// if(firstNumber==50||secondNumber==50||sum==50){
//     return true;
// }
// else
// {
//     return false;
// }
// }
// console.log(result);


/*find largest of three integers*/

// var firstNumber=prompt("enter first Number");
// var secondNumber=prompt("enter second Number");
// var thirdNumber=prompt("enter third Number");


// function checkLargest(firstNumber,secondNumber,thirdNumber){
//     if(firstNumber>secondNumber && firstNumber>thirdNumber){
//         return firstNumber;
//     }else if(secondNumber>firstNumber && secondNumber>thirdNumber){
//         return secondNumber;
//     }else if(thirdNumber>firstNumber && thirdNumber>secondNumber){
//         return thirdNumber;
//     }else{
//         return 0;
//     }
// }
// var result=checkLargest(firstNumber,secondNumber,thirdNumber);
// console.log(result);




/*javascript function to convert farehheight into celcius */

var celciusInput=prompt("enter temprature in celcius");

function celciusToFahrenheight(celciusInput){
    var farehheight=(celciusInput*(9/5))+32;
    return farehheight;
}
var result=celciusToFahrenheight(celciusInput);
console.log(result);

var farenheightInput=prompt("enter temprature in farenheight");

function farenheightToCelcius(farenheightInput){
    var celcius=(farenheightInput-32)*(5/9);
    return celcius;
}
result=farenheightToCelcius(farenheightInput);
console.log(result);







