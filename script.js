// Write a JavaScript program that performs the following tasks:

// Take a sentence or group of words as input from the user.

// Count the total number of words present in the sentence.

// Count the total number of vowels in the sentence.

// Also count how many times each vowel (a, e, i, o, u) appears.

// The program should be case-insensitive (i.e., A and a should be treated the same).

// Do not use objects to store vowel counts.

let sentence = prompt("Enter a Sentence or Word").toLowerCase();
let result = "";

for(let char of sentence){
    if ( char !== " "){
        result += char;
    }
}

let totalvowel = 0;

let a = 0;
let e = 0;
let i = 0;
let o = 0;
let u = 0;

for (let vowel of sentence){
    if ( vowel == 'a'){
        a++
        totalvowel++
    }
    else if (vowel == 'e'){
        e++
        totalvowel++
    }
    else if (vowel == 'i'){
        i++
        totalvowel++
    }
    else if (vowel == 'o'){
        o++
        totalvowel++
    }
    else if (vowel == 'u'){
        totalvowel++
    }
}

console.log(result)
console.log(result.length)
console.log("count of a : ", a)
console.log("count of e : ", e)
console.log("count of i : ", i)
console.log("count of o : ", o)
console.log("count of u : ", u)

