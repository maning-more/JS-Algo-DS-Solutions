//1.function that takes an array of numbers as an argument and returns the sum of all the numbers in the array
/*function addNumbers(myarray) {
   let count = 0
   for (let i = 0; i < myarray.length; i++) {
     count += (myarray[i]);
    
   }
return count
    
}
console.log(addNumbers([4,5,6,9]))*/

//2.Write a JavaScript program to print all the even numbers between 1 and 50.

/*function name(num) {
    let evenNumbers = []
   for(let i=0;i<=num;i++) {
    if(i%2==0){
        
       evenNumbers.push(i)
    }
   }
   return evenNumbers
}
console.log(name(51)) */


//3.Write a JavaScript program to calculate the sum of all the numbers divisible by 7 between 1 and 100.
/*function sd7(initial,final) {
   let result = []
   for(let i = initial ;i<final;i++ ){
      if (i%7==0) {
         result.push(i)
      }
   }
   return result
}

console.log(sd7(200,300))*/

//4.Write a JavaScript program to find the factorial of a given number using a for loop.

/*function factorial(num){
 let factnum = 1
   for(let i = 1;i<=num;i++)
   {
factnum*=i

   }

return factnum
}

console.log(factorial(10))*/

//5.Write a JavaScript program to check if a given number is prime or not.
// function checkprime(num){
    
// }
// console.log(checkprime())


//Write a function to check if a given number is even or odd.
/*function checknum(num){
if(num%2==0){
   console.log("given num is even")
}
else{
   console.log("given num is odd")
}
}
checknum(3)
*/




   
//6.Write a function that takes a positive integer as input and prints all the numbers from 1 to the given number, except for multiples of 3. For multiples of 3, print "Fizz" instead
/*function name(num1,num2) {
   let result = []
   if (num1>1&&num2>1) {
      for (let i = 0; i < num2; i++) {
         if (i%3==0) {
            result.push(i)
         }
         
      }
   } else {
      console.log("given num is  negative")
   }
   return result
}
console.log(name(-1,100))
*/

//7.Write a function that takes an array of strings as input and returns a new array containing only the strings that have more than 5 characters.
//1
/*function filterStrings(array) {
   return array.filter(str => str.length > 5);
 }
 
 // Example usage:
 const strings = ["apple", "banana", "orange", "kiwi", "strawberry", "grapefruit"];
 const filteredStrings = filterStrings(strings);
 console.log(filteredStrings);
 
//2 another method
function filterStrings(strings){
   let newstr = []
   for(str of strings){
  if (str.length>5){
 newstr.push(str)
  }

   }
   return newstr
}

const strings = ["apple", "banana", "orange", "kiwi", "strawberry", "grapefruit"];
 const filteredStrings = filterStrings(strings);
 console.log(filteredStrings);
 


//8.Write a function that takes a string as input and returns the number of vowels (a, e, i, o, u) in the string.
function countVowel(mystring){
    mystring = mystring.toLowerCase()
   
   let count = 0
   for(let i=0;i<mystring.length;i++){
      if(mystring[i]=='a'||mystring[i]=='e'||mystring[i]=='i'||mystring[i]=='o'||mystring[i]=='u'){
       count++
      }
   }
   return count
}
mystring = "Maning More"
console.log(countVowel(mystring))


//Write a function that prints numbers from 1 to n. But for multiples of three, print "Fizz" instead of the number, and for multiples of five, print "Buzz." For numbers that are multiples of both three and five, print "FizzBuzz."
function printfibi(a,b){
   
   for(i =a;i<b;i++){
      if (i % 3 === 0 && i % 5 === 0){
         console.log("FizzBuzz")
      }else if(i%5==0){
         console.log("Buzz")
      }
      else if(i % 3 === 0){
         console.log("Fizz")
      }else {
         console.log(i);
       }
   }
   

}
printfibi(1,16)


//Write a function that takes a string as input and checks whether it is a palindrome (reads the same forwards and backwards). Return true if it is a palindrome, and false otherwise.
function ispalindrome(str){

   let reversedStr = str.split('');
    reversedStr = reversedStr.reverse();
    reversedStr = reversedStr.join('');
  return str === reversedStr;


}
str = "maninam"
console.log(ispalindrome(str))


//Write a function that takes a string as input and returns the reverse of that string. For example, if the input is "hello," the function should return "olleh."
function reversestring(str){
let reversedStr=str.split('')
    realStr = reversedStr.reverse()
    realStr=realStr.join('')
    return realStr
}
str = "maning"
console.log(reversestring(str))


//Write a function that takes an array of numbers as input and returns a new array containing only the unique elements from the original array. For example, if the input is [1, 2, 2, 3, 4, 4, 5], the function should return [1, 2, 3, 4, 5].
function uniqueElements(str){

      let origional = str.split('')

       
       origional = new Set(origional)
       origional = Array.from(origional)//converts set to array

       origional = origional.join('') 
      
return origional
}
let str = 'maning'
console.log(uniqueElements(str))

Write a function that takes a positive integer as input and returns true if it's a prime number (only divisible by 1 and itself), and false otherwise.
*/
function isPrime(number) {
   // Prime numbers are greater than 1
   if (number <= 1) {
     return false;
   }
 
   // Check for divisibility from 2 to the square root of the number
   for (let i = 2; i <= Math.sqrt(number); i++) {
     if (number % i === 0) {
       // If the number is divisible by any other number, it's not prime
       return false;
     }
   }
 
   // If no other divisors are found, the number is prime
   return true;
 }
 
 // Test cases
 console.log(isPrime(7));  // Output: true (7 is a prime number)
 console.log(isPrime(10)); // Output: false (10 is not a prime number)
 console.log(isPrime(1));  // Output: false (1 is not a prime number)
 console.log(isPrime(13)); // Output: true (13 is a prime number)
 console.log(isPrime(0));  // Output: false (0 is not a prime number)
 