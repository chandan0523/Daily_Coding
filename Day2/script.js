// let sentence = "The quick brown fox jumps over the lazy dog";
// let words = sentence.split(" ");
// let result = "";

// for ( let word of words){
//     let reverseWord = "";

//     for ( let char of word ) {
//         reverseWord = char + reverseWord;
//     }
//     result += reverseWord + " ";
// }

// console.log(result)


let sentence = prompt("Enter a sentence:");
let words = sentence.split(" ");
let result = "";

console.log(sentence.length);

for ( let word of words){
    let reverseWord = "";

    for (let char of word) {
        reverseWord = char + reverseWord;

    }
    result += reverseWord + " ";
}
 
final = result.trim();
console.log(final);
console.log(final.length);