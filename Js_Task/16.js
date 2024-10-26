
// 16. Check if all the elements in arr = [3, 5, 9, 1, 7] are 
// positive numbers, and print true or false.

function check_positive(arr) {
    let i = 0;
    count = 0
    while (arr[i] != undefined) {
        if (arr[i] < 0) {
            count++

        }
        i++
    }

    if (count >= 1) {
        console.log('False')
    }
    else {
        console.log('True')
    }

}