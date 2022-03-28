// ASSESSMENT 1: Coding Practical Questions

// To run file: navigate to the correct directory in terminal, $ node code-challenges.js

// Pseudo coding is required.

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in any two strings and returns the string with more characters. Use the two sets of test variables provided.


// Set one:
// const fruit1 = "apple"
// const fruit2 = "banana"

// Set two:
// const fruit3 = "cherry"
// const fruit4 = "kiwi"

const moreChar = (strOne, strTwo) => {
    if(strOne > strTwo){
        return ` ${strOne} has more characters than ${strTwo} ` 
    }else if(strTwo > strOne){
        return ` ${strTwo} has more characters than ${strOne} ` 
    }else{
        return `please try again`
    }
}
console.log(moreChar(fruit1,"banana"))
console.log(moreChar(fruit1,fruit4))

/*
1. create a function that takes in any two strings. > const (strOne,strTwo) => (){       }
2. Function will return the larger string > ex- apple , pear | expected output = apple
3. The strings will need to be compared > use conditional if statement, if string1 is greater than string2 return string1 or vice versa. 
4. Use a return statement to log output. 
5. Test > output cherry has more charachters than apple
6. OUTPUT: banana has more characters than apple 
           kiwi has more characters than apple
___________________________________________________________________________________________________________________________________________________________________
*/

// --------------------1) Create a function that takes in any given number and determines if the number is below boiling point, at boiling point, or above boiling point. Boiling point is 212 degrees Fahrenheit. Use the test variables provided below. Expected output: "42 is below boiling point", "350 is above boiling point", "212 is at boiling point"

// const temp1 = 42
// const temp2 = 350
// const temp3 = 212

// const boilPoint = (userTemp) => {
//     if(userTemp === 212 ){
//         return `${userTemp} is at boiling point`
//     }else if(userTemp < 212){
//         return `${userTemp} is below boiling point`
//     }else if(userTemp > 212){
//         return `${userTemp} is above boiling point`
//     }
// }
// console.log(boilPoint(temp1))
// console.log(boilPoint(temp2))
// console.log(boilPoint(450))

/*

1. create a function that takes in any given number and returns if number is at boiling temprature/below temp/above temp.
2. const boilPoint = (userTemp) => {  } 
3. Use if statment to compare user input to either 212 or "at boiling point" || or below or above. 
4. If (userInput === 212) return "is at boiling point " else if (userInput < 212 ) return "below temp"  if else(userInput > 212) return "above "
5. Actual Output: 42 is below boiling point
                  350 is above boiling point  
           
___________________________________________________________________________________________________________________________________________________________________
*/


// --------------------2) Create the code that will combine the two arrays and return the length using the variables provided below. Expected output: 10

// const myNumbers1 = [3, 7, 0, 36, -9]
// const myNumbers2 = [8, -7, 42, 9, 13]

// const combinedArray = (arr1,arr2) => {
//     return arr1.length + arr2.length
// }
// console.log(combinedArray(myNumbers1,myNumbers2))
// console.log(combinedArray(myNumbers2,myNumbers1))

 /*

First Attempt this does work but does not have a return statement  === > console.log(myNumbers1.concat(myNumbers2).length)

1. create a function that takes in any two arrays and combines them returns the length 
2. const combinedArray = (arr1,arr2) => {
    return arr1.length + arr2.length /  5 + 5 = 10
3. Using variables provided output is expected to 10
4. Actual Output: 10

___________________________________________________________________________________________________________________________________________________________________
*/

// --------------------3) Create the code that will reverse the letters of a string using the test variable provided below. Expected output: "1202 ovarB"


const currentCohort = "Bravo 2022"

// Attempt #1 lines 102-103
// const revString = currentCohort.split("").reverse().join("");
// console.log(revString)

// Attempt #2
// const reverseInput = (strInput) => {
//     return `${strInput.split("").reverse().join("")}`
// }
// console.log(reverseInput("Charlie 2022"))
// console.log(reverseInput(currentCohort))

/*
1. Create function that takes a string and returns the input reversed 
2. const reverseInput = (strInput) => {
    return `${strInput.split("").reverse().join("")}`
3.  If input is "Pear" function will return "reaP"
4.  Acutal Output: 2202 eilrahC
                   2202 ovarB
__________________________________________________________________________________________________________________________________________________________________*/


// --------------------4) Create a statement that will evaluate whether each number in an array is even or odd. Use the test variable provided below. Expected output: "odd" "even" "odd" "even" "odd" "even"

const myArray = [13, 34, 5, 10, 27, 42]

//Attempt#1
//   for(let i =0; i< myArray.length; i++){
//        if(myArray[i] % 2 === 0){
//           console.log("even")
//       }else if(myArray[i] % 2 !==0 ){
//             console.log("odd")
//       }
//   }

// Attempt #2: Function return the expected result but one undefined as well. *** I will ask about this later ***
// const arrInput = (inputArray) => {
// for(let i =0; i < inputArray.length; i++){
//     if(inputArray[i] % 2 === 0){
//        console.log("even")
//    }else if(inputArray[i] % 2 !==0 ){
//          console.log("odd")
//    }
// }
// }
// console.log(arrInput(myArray))
// console.log(arrInput([2,31,33,45,66,80]))

/*
1. Create a statement that will evaluate whether each number in an array is even or odd 
2. Utilizing a for loop to iterate through and using a conditional to compare the current index % (mod) 2 if it strictly equals 0 log "even" if !== (not equal) log "odd"
3. Actual Output:   odd
                    even
                    odd
                    even
                    odd
                    even
__________________________________________________________________________________________________________________________________________________________________*/


// --------------------5) Create a function that takes in a set of any two numbers and subtracts the smaller number from the larger number using the sets of test variables provided below. Expected output: 42, 3

//Set one:
const number1 = 58
const number2 = 100

//Set two:
const number3 = 27
const number4 = 24

    // const takeDifference = (num1,num2) => {
    //     if(num1 > num2){
    //         return `${num1 - num2}`
    //     }else if(num2 > num1){
    //         return `${num2 - num1}`
    //     }else{
    //         return `invalid entry please try again`
    //     }
    // }
    // console.log(takeDifference(number2,number1))
    // console.log(takeDifference(number4,number2))
    // console.log(takeDifference(number3,number4))

/*

1. Create function that takes two numbers and returns the difference of the smaller number from the larger number. 
2. const takeDifference = (num1,num2) => {
         if(num1 > num2){} 
3.  Using if statment will compare if num1 is greater than num2 and return the result of num1 - num2 || vice versa num2 - num1 and return result
4.  Include a catch-all to return error code. 
5.  Actual Output: 42
                   76
                    3


    
__________________________________________________________________________________________________________________________________________________________________*/