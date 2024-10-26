
// 26. Write a program to check if a string ends with a specific character.Example: 
// Input: ("codinggita", "a"), Output: true.

function check_str(str, character){
    if(str[str.length - 1]==character){
        console.log("True")
    }
    else{
        console.log("False")
    }
}

check_str('codinggita','a')