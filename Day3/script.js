let words = "madam";
let reverseword = "";

for (let char of words){
    reverseword = char + reverseword;
}

if (words === reverseword){
    console.log(`${words} is a palindrome`);
}