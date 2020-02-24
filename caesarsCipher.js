/*
JavaScript Algorithms and Data Structures Projects: Caesars CipherPassed
One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.

A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus 'A' ↔ 'N', 'B' ↔ 'O' and so on.

Write a function which takes a ROT13 encoded string as input and returns a decoded string.

All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.
*/

function rot13(str) { // LBH QVQ VG!
    str=str.toUpperCase().split("")
    let asciiValue=str.map(x=>x.charCodeAt())
    //asci table A=65 Z=90
    let newStr=[];
    
    for(let i=0;i<asciiValue.length;i++){
      if(asciiValue[i]<65){
        newStr.push(asciiValue[i])
      }
      else if(asciiValue[i]+13>90){
        let calculation=asciiValue[i]+13
        let calcRest=calculation-91;
        let finalAscii=65+calcRest
        newStr.push(finalAscii)
      }
      else{
        newStr.push(asciiValue[i]+13)
      }
    }
      return newStr.map(x=>String.fromCharCode(x)).join("").replace(/[-]/g," ")
    }