
// 27. Write a program to extract the file extension from a given filename.Example: 
// Input: "document.pdf", Output: "pdf".

function extension(input) {
    let str = "";
    let i = input.indexOf('.') + 1;

    while (i < input.length) {
        str += input[i];
        i++;
    }

    console.log(str);
}

extension("27.js");
