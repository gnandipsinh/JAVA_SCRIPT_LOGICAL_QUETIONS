let word = "sms";

const CheckPalindrome = (word) => {
    const cleanWord = word.toLowerCase();
    const reverseWord = cleanWord.split("").reverse().join("");

    if (cleanWord === reverseWord) {
        console.log("given string is palindrome", word);
    } else {
        console.log("given string is not palindrome");
    }
};

CheckPalindrome(word);

const CheckPalindromeString = (str) => {
    let cleanWord = str.toLowerCase();
    let reversed = "";

    for (let i = cleanWord.length - 1; i >= 0; i--) {
        reversed += cleanWord[i];
    }

    cleanWord === reversed
        ? console.log("given string is palindrome string", str)
        : console.log("given string is not palindrome string");
};

CheckPalindromeString(word);