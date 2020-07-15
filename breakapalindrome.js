//Objective is to replace exactly one character in a string to make it not
//a palindrome, such that the string is as lexicographically low as possible.

let palindrome = "abccba"


//O(n) solution that replaces the first non 'a' in the string.

if (palindrome.length <= 1) {
    return ''
}

for (let i = 0; i < palindrome.length; i++) {
    //Skip all 'a' since it's the first character in the alphabet
    if (palindrome[i] == 'a') {
        continue
    }
    
    //When the length is odd, the middle character will not change the palindrome
    if ((palindrome.length % 2 !== 0) && (i == Math.floor(palindrome.length / 2))) {
        continue
    }
    
    //Replace the first non 'a' in the string with an 'a'
    return palindrome.substring(0, i) + 'a' + palindrome.substring(i + 1)
}

//If it's not possible, just replace the last letter with a 'b'
return palindrome.substring(0, palindrome.length - 1) + 'b'
