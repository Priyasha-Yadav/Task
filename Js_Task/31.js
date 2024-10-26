

// 31. Write a program to repeat a string a specified number of times.
// Example: Input: ("hello", 3), Output: "hellohellohello".

function repeat_str(str, times) {
    let new_str = ""; 
    for (let i = 0; i < times; i++) { 
        new_str += str; 
    }
    console.log(new_str); 
}

repeat_str("hello", 3);



