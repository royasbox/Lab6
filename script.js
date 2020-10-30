// Exercise 1
let jobtitle= 'designer';
let geographiclocation= 'Montreal';
let annualsalary= 50000;
let companyname= 'Adobe';
let result1= `you will be a ${jobtitle} in ${geographiclocation} making $${annualsalary} for ${companyname}.`;

// Exercise 2
let birthyear= 1995;
let thisyear= 2020;
let age= thisyear-birthyear;
let result2= `They are ${age} years old`;

// Exercise 3
let myage= 25;
let maxage= 90;
let perday= 2;
let total= (maxage-myage)*365*2;
let result3= `You will need ${total} to last you until the ripe old age of ${maxage}`;

//Exercise 4
let radius= 5;
let circumference= radius* Math.PI*2;
let area= radius*radius*Math.PI;
let result4= `The circumference is ${circumference} and the area is ${area}`;

//Exercise 5

let celsius= 30;
let celsiustofarenheit= celsius*9/5+32;
let farenheit= 100;
let farenheittocelsius= (farenheit-32)*5/9;
let result5= `${celsius}C is ${celsiustofarenheit}F and ${farenheit}F is ${farenheittocelsius}C`;



//Exercise 6

const squareNumber= (number) => {
    let square= number*number;
    let result=`The result of squaring the number ${number} is ${square}`;
    return [square,result];
};

let result6= squareNumber(8)[1];

//Exercise 7

const halfNumber= (number) => {
    let divide= number/2;
    let result=`Half of ${number} is ${divide}`;
    return [divide,result];

};

let result7= halfNumber(65)[1];

//Exercise 8

const percentOf= (number1,number2) => {
    let percent= (number1/number2)*100;
    let result=`${number1} is ${percent}% of ${number2}`;
    return [percent,result];
};

let result8= percentOf(90,900)[1];


//Exercise 9

const areaOfCircle= (number) => {
    let area= number*Math.PI*number;
    let result= `The area for a circle with radius ${number} is ${area}`;
    return [area,result];
};


let result9= areaOfCircle(15)[1];


//Exercise 10

const runAll= (number) => {
    let half= halfNumber (number)[0];
    let square= squareNumber (half)[0];
    let area= areaOfCircle (square)[0];
    let percent= percentOf (area,square)[0];
    let result= `The final result is ${percent}%`;
    return result;
};

let result10= runAll(18);












const examples=[result1,result2,result3,result4,result5,result6,result7,result8,result9,result10];

let ol= document.querySelector(".mylist");
let items= ol.getElementsByTagName("li");
examples.forEach((value, index) => items[index].innerHTML = value);

