// 3. Check if string is a palidrome (reversed)

function checkPalindrome(str) {
    str = str.toLowerCase();
    return str === str.split('').reverse().join('');
}

console.log(checkPalindrome('Kayak')); // true
console.log(checkPalindrome('Kacka')); // false