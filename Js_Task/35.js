
//35. Print an inverted right-angled triangle pattern with n rows.

let n = 5; 

for (let i = n; i >= 1; i--) {
    let str = ''; 
    for (let j = 1; j <= i; j++) {
        str += '*'; 
    }
    console.log(str); 
}
