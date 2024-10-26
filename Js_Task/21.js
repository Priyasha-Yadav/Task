
// 21. Write a program to convert a given string to uppercase.
// Example: Input: "hello", Output: "HELLO".

function capital(str) {
    console.log(str.toUpperCase());
}

capital('hello')


function capitalize(str) {
    let string = '';
    for (let i = 0; i < str.length; i++) {
        let charCode = str.charCodeAt(i);
        if (charCode >= 97 && charCode <= 122) {
            string += String.fromCharCode(charCode - 32);
        } else {
            string += str[i];
        }
    }
    console.log(string);
}

capitalize('hello');
