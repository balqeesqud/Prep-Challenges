'use strict';

// Important Note:
// Kindly use reduce instead of for in all of your solutions

// Resource:
// Reduce: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce

// -------------------------------------------------------------------------------------------------------
// Challenge 01:
// Required:
//
// Given an array of objects, count the objects by using reduce method.

// Input:
// var voters = [
//     {
//         voter_Name: "Adam Scott",
//         votes_To: "James",
//     },
//     {
//         voter_Name: "Abril Blake",
//         votes_To: "Jade",
//     },
//     {
//         voter_Name: "Ruby Andrews",
//         votes_To: "Jade",
//     },
//     {
//         voter_Name: "Junior Maxwell",
//         votes_To: "Bailey",
//     },
//     {
//         voter_Name: "Junior Maxwell",
//         votes_To: "Bailey",
//     }
// ]
//
// Output: 5

const objectCounter = (obj) => {
  // write your code here
  const countObj = obj.reduce((accumulator) => {
    // reduce has 2 parameters(call back function, initial value)
    return accumulator + 1;
  }, 0); // accumulator initial value =0

  return countObj;
};

// -------------------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------------------------
// Challenge 02:
// Required:
//
// Given a string input as an argument reverse it using reduce method.
//
// Input: 'you shall not pass'
// Output: 'pass not shall you'
//
// Hint:
// since you need to reverse words, you may get some use of the methods
// you learnt before to split the string to words
//
// ------------------------

const stringReverse = (str) => {
  // write your code here
  const words = str.split(' '); // to split array into words

  const reversed = words.reduce((accumulator, currentValue) => {
    // call back function with 2 parameters(accumulator & its initial value=0 , current value which is the the element in the next index)
    return currentValue + ' ' + accumulator;
  }, '');

  return reversed.trim(); // to remove white spaces
};

// -------------------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------------------------
// Challenge 03:
// Optional:
//
// Using the same array of objects from the first question, create new object that contains the candidates names as keys (voting for),
// and how many times they got voted to as values using the reduce method.
//
// Input:
// let voters = [
//     {
//         voter_Name: "Adam Scott",
//         votes_To: "James",
//     },
//     {
//         voter_Name: "Abril Blake",
//         votes_To: "Jade",
//     },
//     {
//         voter_Name: "Ruby Andrews",
//         votes_To: "Jade",
//     },
//     {
//         voter_Name: "Junior Maxwell",
//         votes_To: "Bailey",
//     },
//     {
//         voter_Name: "Junior Maxwell",
//         votes_To: "Bailey",
//     }
// ];
//
// Output:
// let res = {
//     James: 1,
//     Jade: 2,
//     Bailey: 2
// };
//

const statistics = (obj) => {
  // write your code here
};
// -------------------------------------------------------------------------------------------------------

module.exports = { objectCounter, stringReverse, statistics };
