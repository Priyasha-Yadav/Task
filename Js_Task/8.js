
// 8. Find the Average of an Array.

function average(arr) {
    let i = 0, sum = 0;
    while (arr[i] != undefined) {
        sum += arr[i]
        i++
    }
    console.log('Average:', sum / arr.length)
}