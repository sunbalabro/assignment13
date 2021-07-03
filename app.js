
//Chapter 35-38 

// Task 1  

// function displayDate() {
//     var today = new Date();
//     document.write(today);
// }
// displayDate();



//   Task 2   



// function greet() {
//     var fistName = prompt("Enter your First Name");
//     var lastName = prompt("Enter your Last Name");
//     alert("Welcome " + fistName + " "+ lastName);  
// }
// greet();




//   Task 3   




// function sum() {
//     var num1 =  prompt("Enter the first Number");
//     var num2 =  prompt("Enter the second Number");
//     return num1+num2
// }
// sum();


//   Task 4   


// function calculator(num1,num2,operator) {
//  var result = eval(num1+operator+num2);
//  return result   
// }

//     var num1 =  prompt("Enter the first Number");
//     var num2 =  prompt("Enter the second Number");
//     var operator =  prompt("Enter the Operator");

// var show = calculator(num1,num2,operator);
// document.write(show);



//   Task 5  


// function convetSquare(num) {
//     var result = Math.pow(num,2)
//     document.write(result)
// }
// convetSquare(5);


//   Task 6   


// function factorial(num) {
//     if (num === 0 || num === 1)
//       return 1;
//     for (var i = num - 1; i >= 1; i--) {
//       num *= i;
//     }
//     return document.write(num);
//   }
//   factorial(5);

//   Task 7     

// function count(num1,num2) {
//     for (let i = num1; i <= num2; i++) {
//         document.write(i)
//     }
// }
// count(1,10);

//   Task 8  

// function calculateHypotenuse(base,perpendicular) {
//     function calculateSquare(num) {
//         return Math.pow(num,2)
//     }
//     var hypotenuse = calculateSquare(base) + calculateSquare(perpendicular);
//     return document.write(hypotenuse)
// }

// calculateHypotenuse(10,10);


//   Task 9     


// function calculateArea(height,width) {
//     var area = height * width
//     return document.write(area+"<br>");
// }
// var height = 100;
// var width =100;
// calculateArea(10,10);

// calculateArea(height,width);


//   Task 10    


// function checkPalindrome(str){
//        var cstr = str.toLowerCase().replace(/[^a-zA-Z0-9]+/g,'');
//         var ccount = 0;
//         if(cstr==="") {
//             console.log("Nothing found!");
//             return false;
//         }
//         if ((cstr.length) % 2 === 0) {
//             ccount = (cstr.length) / 2;
//         } else {
//             if (cstr.length === 1) {
//                 console.log("Entry is a palindrome.");
//                 return true;
//             } else {
//                 ccount = (cstr.length - 1) / 2;
//             }
//         }
//         for (var x = 0; x < ccount; x++) {
//             if (cstr[x] != cstr.slice(-1-x)[0]) {
//                 console.log("Entry is not a palindrome.");
//                 return false;
//             }
//         }
//         console.log("The entry is a palindrome.");
//         return document.write("this string is palindome");
//     }

//     checkPalindrome("madam");


//   Task 11     

//  var userInput = prompt("Enter Any thing to convert first letter to capital");
// function toTitleCase(str) {
//     return str.replace(/\w\S*/g, function(txt){
//         return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
//     });
// }

// var titleCase = toTitleCase(userInput);
// document.write("Example String "+userInput+" <br> Expected Output :"+titleCase);


//   Task 12   



// function largeWord(string) {
//     var str = string.split(" ");
//     var large = 0;
//     var word = null;
//     for (var i = 0; i < str.length; i++) {
//         if (large < str[i].length) {
//             large = str[i].length;
//             word = str[i];
//         }
//     }
//     return word;
// }
// var large = largeWord("Web Development Tutorial");
// document.write("Example String "+"Web Development Tutorila"+ "<br> Expected Output :"+large);



//  Task 13   



// function checkOccur(string,word) {
//     var regex = new RegExp(word,"g")
//     var count = (string.match(regex) || []).length;
//     return document.write(count);
// }

// checkOccur("Hellow world is world hellow","o");



//   Task 14  



// function calCircumference(radius) {
//     var result = 2 * (3.14) *radius
//     return document.write("The circumference of "+ radius +" is "+result+"<br>")
// }
// function calculateArea(radius) {
//     var result = 3.14 * (Math.pow(radius,2));
//       return document.write("The area of "+ radius +" is "+result)
// }
// calCircumference(35);
// calculateArea(35);
