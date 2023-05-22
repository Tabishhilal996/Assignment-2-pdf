// Chapter 21 (Changing Case)
// *****Question#1*****

// var allLower = userInput.toLowerCase();

// ******Question#2******

// x = x.toLowerCase();

// ******Question#3******

// var y = "example string";
// y = y.toUpperCase();

// ******Question#4******

// let str = "Hello World";
// let lowercaseStr = str.toLowerCase();

// *******Question#5*******

// var myString = myArray[index].toLowerCase();

// *******Question#6********

// var string = "Hello, World!";
// alert(str.toUpperCase());

// ******Question#7******

// var cityName = "kaRacHi";
// var capitalizedCityName = cityName.charAt(0).toUpperCase() + cityName.slice(1).toLowerCase();
// console.log(capitalizedCityName);

// Chapter 22 - 25 (Strings)
// ******Question#1******

// let sameWords = "captain";
// let sliced = sameWords.slice(1, 3);
// console.log(sliced);

// ******Question#2******

// var string = "Hello, world!";
// var charCount = string.length;
// console.log(charCount);

// ******Question#3******

// const animal = "elephant";
// const middleIndex = Math.floor(animal.length / 2);
// const seg = animal.slice(middleIndex - 2, middleIndex + 2);
// console.log(seg);

// ******Question#4******

// var string = "Hello, world!";
// var numberOfCharacters = string.length;

// console.log(numberOfCharacters);

// ******Question#5******

// var string = "your string goes here";

// var length = string.length;

// var newString = string.slice(1, -3);
// console.log(string.length);
// console.log(newString);

// ******Question#6******

// The value of the variable 'index' would be 3.

// ******Question#7******

// The value of 'index' in JavaScript would be '16'.

// ******Question#8******

// let text = "Sample string containing 'go' multiple times. The last instance is what we want to find.";
// let index = text.lastIndexOf("go");

// if (index !== -1) {
//   index++;
//   console.log("Index of the first character of the last instance of 'go': " + index);
// } else {
//   console.log("'go' not found in the string.");
// }

// ******Question#9******

// if (str.indexOf(indexNum) !== -1) {
    
//   }
  
// ******Question#10******

// const Strings = "abcde";
// const character = Strings.charAt(2);
// console.log(character);

// ******Question#11******

// var text = "Hello, World!";
// var cha = text.charAt(9);
// console.log(cha)

// ******Question#12******

// var str = "Hello, World!";
// var x = str.charAt(str.length - 1);
// console.log(x)

// ******Question#13******

// var input = "Hello, World!";
// var cha = input.charAt(4);
// console.log(cha)

// ******Question#14******

// if (str.charAt(2) === 'a') {
    
//   }
  
// ******Question#15******

// var str = "Hello, World!";
// var charArray = [];

// for (var i = 0; i < str.length; i++) {
//   charArray[i] = str.charAt(i);
// }
// console.log(charArray)

// ******Question#16******

// var str = "I have 1 apple and 1 orange.";
// var newStr = str.replace("1", "one");
// console.log(newStr)

// ******Question#17******

// var x = "I want to eat an apple.";
// var y = x.replace(/eat/g, "devour");
// console.log(y)

// Chapter 26 (Rounding Numbers)

// ******Question#1******

// Math.round()

// ******Question#2******

// let roundNum = Math.ceil(origNum);

// ******Question#3******

// let roundNum = Math.floor(origNum);

// ******Question#4******

// let origNum = 2.7;
// let roundNum = Math.round(origNum);
// console.log(roundNum)

// ******Question#5*****

// let origNum = 0.5;
// let roundNum = Math.floor(origNum);
// console.log(roundNum)

// Chapter 27 (Random Numbers)

// *******Question#1*******

// var randomNumber = Math.floor(Math.random() * 50) + 1;
// console.log(randomNumber)

// *******Question#2*******

// var randomNumber = Math.random();

// *******Question#3*******

// var diceFaces = [1, 2, 3, 4, 5, 6];

// function rollDice() {

//   var randomIndex = Math.floor(Math.random() * diceFaces.length);

//   var randomFace = diceFaces[randomIndex];

//   return randomFace;
// }

// var result = rollDice();

// console.log("The dice rolled: " + result);

// *******Question#4*******

// function tossCoin() {
  
//     var randomNumber = Math.random();
  
//     var tossResult = (randomNumber < 0.5) ? "Heads" : "Tails";
  
//     return tossResult;
//   }
  
//   var result = tossCoin();
  
//     console.log("The coin toss result: " + result);

// Chapter 28, 29 (Converting Strings)

// *****Question#1*****

// var str = "42";
// var num = +str;
// console.log(num);

// *****Question#2*****

// var str = "123";
// var num = ConvertStringToInteger(str);
// console.log(num);

// *****Question#3*****

// var str = "3.14";
// var num = convertStringToFloat(str);
// console.log(num);

// *****Question#4*****

// var str = "123";
// console.log(canConvertToNumber(str));

// var str2 = "3.14";
// console.log(canConvertToNumber(str2)); //

// var str3 = "abc";
// console.log(canConvertToNumber(str3));

// *****Question#5*****

// var num = 123;

// var str1 = num.toString();
// console.log(str1);

// var str2 = num + "";
// console.log(str2);

// *****Question#6*****

// var num = 42;
// var str = convertNumberToString(num);
// console.log(str);

// *****Question#7*****
  
// var decimalStr = "3.14";
// var integerNum = convertDecimalStringToInteger(decimalStr);
// console.log(integerNum); // Output: 3

// Chapter 30 (Controlling the length of decimals)

// ******Question#1******

// const num = 12.3456789;
// const newNum = num.toFixed(4).toString();
// console.log(newNum)

// ******Question#2******
// const num = 12.3456789;
// Number = (num.toFixed(2));
// console.log(Number)

// ******Question#3******

// if (num.toFixed(2).toString().length > 4) {
    
//   }
  
// ******Question#4******

// var number = 3.14159265359;

// var roundedNumber = number.toFixed(2).toString();

// alert(roundedNumber);

// Chapter 31 - 34 (Date & Time)

// *******Question#1********

// let dObj = new Date();

// *******Question#2********

// const currentDate = new Date();
// const dStr = currentDate.toString();
// console.log(dStr)
// *******Question#3********

// const d = new Date();
// const day = d.getDay();
// console.log(day)

// *******Question#4********

// const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
// const currentDay = dayNames[dayNames];
// alert(currentDay);

// *******Question#5********

// const currentDate = new Date();

// const year = currentDate.getFullYear();
// const month = currentDate.getMonth() + 1; // Adding 1 to get month in the range 1-12
// const day = currentDate.getDate();

// const hours = currentDate.getHours();
// const minutes = currentDate.getMinutes();
// const seconds = currentDate.getSeconds();
// const milliseconds = currentDate.getMilliseconds();
// console.log(currentDate)

// *******Question#6********

// const later = new Date(2020, 11, 31);
// console.log(later)

// *******Question#7********

// const dateObject = new Date(1992, 1, 2);
// console.log(dateObject)

// *******Question#8********

// const referenceDate = new Date();
// const millisecondsElapsed = referenceDate.getTime() - new Date(1980, 0, 1).getTime();
// alert(millisecondsElapsed);

// *******Question#9********

// const currentDate = new Date();
// currentDate.setFullYear(2022);
// console.log(currentDate)

// *******Question#10********

// function changeMonthToJanuary(date) {
//     date.setMonth(0);
//     return date;
//   }
  
//   var myDate = new Date('2023-05-15');
//   var newDate = changeMonthToJanuary(myDate);
//   console.log(newDate);
  
// *******Question#11********

// function changeDayOfWeek(date, newDayOfWeek) {
//     var currentDayOfWeek = date.getDay();
//     var diff = newDayOfWeek - currentDayOfWeek;
  
//     date.setDate(date.getDate() + diff);
//     return date;
//   }
  
//   var myDate = new Date('2023-05-15');
//   var newDate = changeDayOfWeek(myDate, 1);
//   console.log(newDate);
  
// *******Question#12********

// function changeMinutesToSpecificValue(time) {
//     var newMinutes = prompt("Enter the new value for minutes:");
//     var newTime = new Date(time);
//     newTime.setMinutes(newMinutes);
//     return newTime;
//   }
  
//   var myTime = "12:30";
//   var newTime = changeMinutesToSpecificValue(myTime);
//   console.log(newTime);
  
// *******Question#13********

// function addHoursToTime(time, hoursToAdd) {
//     var parts = time.split(':');
//     var hours = parseInt(parts[0]);
//     var minutes = parseInt(parts[1]);
  
//     var newTime = new Date();
//     newTime.setHours(hours + hoursToAdd);
//     newTime.setMinutes(minutes);
    
//     var newHours = newTime.getHours();
//     var newMinutes = newTime.getMinutes();
  
//     var formattedTime = padZero(newHours) + ':' + padZero(newMinutes);
//     return formattedTime;
//   }
  
//   function padZero(num) {
//     return (num < 10 ? '0' : '') + num;
//   }
  
//   var myTime = "12:30";
//   var hoursToAdd = 3;
//   var newTime = addHoursToTime(myTime, hoursToAdd);
//   console.log(newTime);
  
// *******Question#14********

// function calculateAge(birthdate) {
//     var currentDate = new Date();
//     var birthdateParts = birthdate.split('-');
//     var birthYear = parseInt(birthdateParts[0]);
//     var birthMonth = parseInt(birthdateParts[1]) - 1;
//     var birthDay = parseInt(birthdateParts[2]);
  
//     var age = currentDate.getFullYear() - birthYear;
  
//     if (currentDate.getMonth() < birthMonth || (currentDate.getMonth() === birthMonth && currentDate.getDate() < birthDay)) {
//       age--;
//     }
  
//     return age;
//   }
  
//   var birthdate = '1996-01-24';
//   var age = calculateAge(birthdate);
//   console.log("Age: " + age);
  