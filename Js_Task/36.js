
// 36. Print a pyramid pattern with n rows.


let n = 5; 

for (let i = 1; i <= n; i++) {
    let str = '';

    for (let j = 1; j <= n - i; j++) {
        str += ' ';
    }

    for (let j = 1; j <= (2 * i - 1); j++) {
        str += '*'; 
    }

    console.log(str); 
}

