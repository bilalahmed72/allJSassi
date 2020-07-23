// JAVASCRIPT DOCUMENT


// CHAPTER #21-25 TASK #1
// var firstName = prompt("Enter first name: ");
// var lastName = prompt("Enter last name: ");
// var merged = firstName + " " + lastName;
// alert("Welcome to our website " + merged);



// CHAPTER #21-25 TASK #2
// var mobile = prompt("Enter your mobile model: ");
// // alert(mobile.length);
// mobLength = mobile.length;
// document.write("Your favourite mobile is: " + mobile);
// document.write("<br>Length: " + mobLength);


				// PRACTICE
// var favFood = ["burger", "pizza", "tikka", "karhai", "broast"];
// var inputFood = prompt("Enter your favourite food: ");
// inputFood = inputFood.toLowerCase();
// for (var i = 0; i > favFood.length; i++) {
// 	if (inputFood === favFood) {
// 		alert("This item is on the menu. ;)")
// 	}
// }



// var month = prompt("Enter a month");
// var charsInMonth = month.length;
// if (charsInMonth > 3) {
//  monthAbbrev = month.slice(0, 3);
//  monthAbbrev2 = month.slice(3);
//  monthAbbrev1 = monthAbbrev.toUpperCase();
//  monthAbbrev3 = monthAbbrev2.toLowerCase();
//  }
//  alert(monthAbbrev1 + monthAbbrev3);


// practice
// var city = prompt("Enter a city name: ");
// for(var i = 0 ; i < city.length ; i++){
// 	if (city[i] === "h") {
// 		alert("H alphabet is present");
// 		break;
// 	}
// 	else {
// 		alert("H alphabet is not present")
// 	}
// }


// var anyText = prompt("Enter any text: ")
// for ( var i = 0 ; i < anyText.length ; i++) {
// 	if (anyText.slice(i, i+2) === "") {
// 		alert("No double spaces");
// 		break;
// 	}
// 	else {
// 		alert("thanks");
// 		break;
// 	}
// }


// var str = prompt("Enter some text");
// var numChars = str.length;
// for (var i = 0; i < numChars; i++) {
// 	if (str.slice(i, i + 2) === "  ") {
// 		alert("No double spaces!");
// 		break;
//  	}
// }


// var text = "hello my name is bilal ahmed. i study in university of karachi i am a student of BSCS i know about World War and its history"
// var indexNum = text.indexOf("World War");
// text = text.slice(0,99) + "Global War " + text.slice(109);
// console.log(text);

// for(var i = 0 ; i < text.length ; i++) {
// 	if (text.slice(i, i+9) === "World War") {
// 		var text = text.slice(0, i) + "Global War " + text.slice(i+10);
// 	}
// }
// console.log(text);



// CHAPTER #21-25 TASK #3
// var str = "Pakistani";
// for (i = 0 ; i < str.length ; i++) {
// 	if (str[i] === "n") {
// 		document.write("Index of n: " + i)
// 	}
// }



// TASK #4
// var str = "Hello World";
// var hii = str.lastIndexOf("l");
// document.write("The least index of 'l' is: " + hii)
// for (var i = 0 ; i < str.length ; --i) {
// 	if (str[i] === "l") {
// 		document.write("Index of last l is: " + i)
// 	}
// }



// TASK #5
// var str = "Pakistani";
// var chr = str.charAt(3);
// document.write("The third character is: " + chr);
// alert(chr)



// TASK #6
// var fName = prompt("Enter first Name: ");
// var lName = prompt("Enter last Name: ")
// var arr1 = [fName];
// var arr2 = [lName];
// var name = arr1.concat(arr2);
// alert(name);



// TASK #7
// var city = "Hyderabad";
// var repWord = "Islam";
// repWord = repWord.slice(0);
// // city = city.slice(0,1);
// document.write("Word: " + city);
// var newWord = repWord + city.slice(5);
// document.write("<br>After replacement: " + newWord);



// TASK #8











