// CHAPTER 25-38
//  practice

// var rightNow = new Date();
// var theDay = rightnow.getDAy();
// alert(theDay);


// TASK #2

// // var fname = prompt("Enter your first name: ");
// // var lname = prompt("Enter your last name : ");

// function names () {
//     var fname = prompt("Enter your first name: ");
//     var lname = prompt("Enter your last name : ");
//     combined = fname + " " + lname;
//     text = "Hello! "
//     alert(text + combined);
// }

// names(fname, lname);


// TASK #3

// function add () {
//     var num1 = +prompt("Enter a number: ");
//     var num2 = +prompt("Enter a number: ");
//     add = num1 + num2;
//     alert(add);
// }

// add();


// TASK #4

// function calculator(num1, num2, operator) {
//     var num_1 = num1;
//     var num_2 = num2;
//     var _operator = operator;
//     var result;
//     if (_operator == "+") {
//         result = num_1 + num_2
//     }
//     else if (_operator == "-") {
//         result = num_1 - num_2
//     }
//     else if (_operator == "*" || _operator == "x") {
//         result = num_1 * num_2
//     }
//     else if (_operator == "/") {
//         result = num_1 / num_2
//     }
//     document.write("<h2>" + num_1 + _operator + num_2 + " = " + result + "<h2>")
// }
// calculator(Number(prompt("Enter First Number")), Number(prompt("Enter Second Number")), prompt("Enter Operator"));

// function calc(num1, num2, op) {
// 	// num1 = +prompt("Enter 1st num: ");
// 	// num2 = +prompt("Enter 2nd num: ");
// 	// op = prompt("Enter operation: ");
//     var performed = eval(num1, op, num2);
//     return(performed);
//     alert(performed);
// }
// num1 = +prompt("Enter 1st num: ");
// 	num2 = +prompt("Enter 2nd num: ");
// 	op = prompt("Enter operation: ");

// calc(num1, num2, op);


// TASK #5

// function square(num1){
// 	num_1 = num1;
// 	var sq = num_1 **2;
// 	document.write("<h2>" + sq);
// }

// square(Number(prompt("Enter a number: ")));



// TASK #6





// CHAPTER 38-42 

// TASK #1

// function poweR (a,b) {
//     c = a**b;
//     alert(c)
// }


// var a = +prompt("Enter first digit: ");
// var b = +prompt("Enter second digit: ");
// poweR(a,b)

// c = a**b;
// alert(c);



// TASK#2

// function leapYear (x) {
//     if (x%4==0) {
//         alert("This is leap Year.")
//     }
//     else {
//         alert("This is not a leap year")
//     }
// }

// x = +prompt("Enter an year: ");
// // c = "Leap Year He Bhai";
// leapYear(x);

// TASK #3
// function ValueOfS(a,b,c)
// {
// 	S = (a + b + c) / 2;
//     return S;
// }

// function AreaOfTriangle(S,a,b,c)
// {
// 	area = S * (S - a) * ( S - b ) * (S - c)
//     return area;
// }
// a = 10, b = 15, c = 20;
// document.write(AreaOfTriangle(ValueOfS(a,b,c),a,b,c).toFixed(3))


// function side(){
// 	var a = +prompt("Enter first side (in cm): ")
// 	var b = +prompt("Enter second side (in cm): ")
// 	var c = +prompt("Enter third side (in cm): ")

//     var S = (a + b + c)/2;
//     alert(S);
// }

// // var a = +prompt("Enter first side (in cm): ")
// // var b = +prompt("Enter second side (in cm): ")
// // var c = +prompt("Enter third side (in cm): ")
// side(a, b, c);

// function measured (d, e, f) {
//     var sMinusA = S-a;
//     var sMinusB = S-b;
//     var sMinusC = S-c;
//     alert(sMinusA);
// }
// measured(a, b, c);
// alert(formula);

// TASK #4
// function mainFunc(){
//     var s1 = prompt("Enter number of 1st subject: ")
//     var s2 = prompt("Enter number of 2nd subject: ")
//     var s3 = prompt("Enter number of 3rd subject: ")

//     total = (+s1)+(+s2)+(+s3);

//     var avg = Avg(total)
//     percent = Percentage(total);
    
//     alert("Average: " + avg + '\n' + "Percentage: " + percent)
// }
// function Avg(total){
//     ans = +total/3;
//     return +ans.toFixed(2);
// }
// function Percentage(total){
//     var percen = (+total/300)*100;
//     return percen.toFixed(2)+"%";
// }
// mainFunc()

// TASK #5
// function findIndex(string,target){
//     for (let i = 0; i<= string.length; i++){
//        if (string[i] == target){
//         index = i;
//         }
//     }
//     return "Index of "+ target +" is : " + index; 
// }
// document.write(findIndex("Hello Dear", "e"));

// TASK #6
// function DeleteVowels(string){
//     var string = prompt("Enter String to delete Vowels: ");
//     string2 = string;
//     for (let i = 0; i<=string.length-1; i++ ){
//            if (string[i].toLowerCase() == 'a' ){ 
//                 var index = string.indexOf(string[i]);
//                 h1 = string.slice(0,index);
//                 h2 = string.slice(index+1,string.length);
//                 string = h1+h2;
//             }
//             if (string[i].toLowerCase() == 'e' ){ 
//                 var index = string.indexOf(string[i]);
//                 h1 = string.slice(0,index);
//                 h2 = string.slice(index+1,string.length);
//                 string = h1+h2;
//             }
//             if (string[i].toLowerCase() == 'i' ){ 
//                 var index = string.indexOf(string[i]);
//                 h1 = string.slice(0,index);
//                 h2 = string.slice(index+1,string.length);
//                 string = h1+h2;
//             }
//             if (string[i].toLowerCase() == 'o' ){ 
//                 var index = string.indexOf(string[i]);
//                 h1 = string.slice(0,index);
//                 h2 = string.slice(index+1,string.length);
//                 string = h1+h2;
//             }
//             if (string[i].toLowerCase() == 'u' ){ 
//                 var index = string.indexOf(string[i]);
//                 h1 = string.slice(0,index);
//                 h2 = string.slice(index+1,string.length);
//                 string = h1+h2;
//             }

//     }
    
//     alert("String: "+ string2+ "\n" + "Vowels removed: "+ string)
// }
// DeleteVowels()


// TASK #7
// var string = prompt("Enter string: ");

// var li = [];

// for ( let i = 0; i<=string.length-2; i++){
//     var target = string[i].toLowerCase()+string[i+1].toLowerCase();
//     switch(target){
//         case "aa" :
//             li.push("aa");
//             break;
//         case "ae" :
//             li.push("ae");
//             break;
//         case "ai" :
//             li.push("ai");
//             break;
//         case "ao" :
//             li.push("ao");
//             break;
//         case "au" :
//             li.push("au");
//             break;

//         case "ea" :
//             li.push("ea");
//             break;
//         case "ee" :
//             li.push("ee");
//             break;
//         case "ei" :
//             li.push("ei");
//             break;
//         case "eo" :
//             li.push("eo");
//             break;
//         case "eu" :
//             li.push("eu");
//             break;

//         case "ia" :
//             li.push("ia");
//             break;
//         case "ie" :
//             li.push("ie");
//             break;
//         case "ii" :
//             li.push("ii");
//             break;
//         case "io" :
//             li.push("io");
//             break;
//         case "iu" :
//             li.push("iu");
//             break;

//         case "oa" :
//             li.push("oa");
//             break;
//         case "oe" :
//             li.push("oe");
//             break;
//         case "oi" :
//             li.push("oi");
//             break;
//         case "oo" :
//             li.push("oo");
//             break;
//         case "ou" :
//             li.push("ou");
//             break;

//         case "ua" :
//             li.push("ua");
//             break;
//         case "ue" :
//             li.push("ue");
//             break;
//         case "ui" :
//             li.push("ui");
//             break;
//         case "uo" :
//             li.push("uo");
//             break;
//         case "uu" :
//             li.push("uu");
//             break;
//     }
// }
// document.write("There are "+ li.length+" Vowel Succession in '"+ string+ "'" + "<br> <br>");
// for (let i = 0; i <= li.length-1; i++ ){
//     document.write("Vowels in succession: "+ li[i] +"<br>");
// }



// TASK #8
// var distance_In_Km = Number(prompt("Enter distance between two cities in kilometers."));
// document.write("The distance between two cities in Kilometers is " + distance_In_Km + " km<br>")
// function distanceInMeters() {
//     var convertedDistane = distance_In_Km * 1000;
//     document.write("The distance between two cities in Meters is " + convertedDistane + " m<br>")
// }
// function distanceInFeet() {
//     var convertedDistane = distance_In_Km * 3280.84;
//     document.write("The distance between two cities in Feet is " + convertedDistane + " ft<br>")
// }
// function distanceInInches() {
//     var convertedDistane = distance_In_Km * 39370.1;
//     document.write("The distance between two cities in Inches is " + convertedDistane + " inch<br>")
// }
// function distanceInCentimeters() {
//     var convertedDistane = distance_In_Km * 100000;
//     document.write("The distance between two cities in Centimeters is " + convertedDistane + " cm<br>")
// }
// distanceInMeters();
// distanceInFeet();
// distanceInInches();
// distanceInCentimeters();

// TASK #9

// var workers_worked_in_Hours = prompt("Enter No. Of Hours.");
// var overtime_pay_per_Hour = 12;
// var total_Overtime;
// var pay_of_total_Overtime;
// if (workers_worked_in_Hours > 40) {
//     total_Overtime = workers_worked_in_Hours - 40;
//     pay_of_total_Overtime = total_Overtime * overtime_pay_per_Hour;
//     document.write("You work extra " + total_Overtime + " hours of overtime so your total overtime pay is " + pay_of_total_Overtime + " rupees. ")
// }
// else {
//     document.write("You will have not given any overtime charges because Your Work time is less than or equal to 40 Hours.")

// }


// Task #10
// var cashier_Amount = Number(prompt("Enter your Amount."));
// var No_of_100_Notes = 0;
// var No_of_50_Notes = 0;
// var No_of_10_Notes = 0;
// var calculation = cashier_Amount / 100;
// var No_of_100_Notes_in_Int = Math.floor(calculation);
// var subtract_in_Cashier_Amount = No_of_100_Notes_in_Int * 100;
// cashier_Amount -= subtract_in_Cashier_Amount
// No_of_100_Notes = No_of_100_Notes_in_Int;

// calculation = cashier_Amount / 50;
// var No_of_50_Notes_in_Int = Math.floor(calculation);
// var subtract_in_Cashier_Amount = No_of_50_Notes_in_Int * 50;
// cashier_Amount -= subtract_in_Cashier_Amount
// No_of_50_Notes = No_of_50_Notes_in_Int;
// calculation = cashier_Amount / 10;

// var No_of_10_Notes_in_Int = Math.floor(calculation);
// No_of_10_Notes = No_of_10_Notes_in_Int;
// document.write("You will have "+ No_of_100_Notes+ " hundred notes " + No_of_50_Notes + " fifty notes and " + No_of_10_Notes + " ten notes.");



// CHAPTER 42-48

// TASK #1

// function mylink(){
// 	alert("Thanks for clicking on the link");
// }

// TASK #2
// function purchase() {
// 	alert("Thanks for purchasing this phone from us! :)");
// }

// TASK #3
// function del(){
// 	document.getElementById('mytableid0').deleteRow(0);
// 	document.getElementById('mytableid1').deleteRow(1);
// 	document.getElementById('mytableid2').deleteRow(2);
// 	document.getElementById('mytableid3').deleteRow(3);


// }

// TASK #5

function increase(){
	for(i=0; i>=0; i++) {
		// console.log("Hello")
	}
}

function decrease(){
	for(i=0; i != 0; i--){

	}
}