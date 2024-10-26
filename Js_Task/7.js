
// 7. Write a function that simulates a traffic light system. The function should take the current light color (red, yellow, green) as input and print the corresponding 
// action:
// "red" → "Stop"
// "yellow" → "Slow down"
// "green" → "Go"

function traffic(light) {
    if (light == 'red') {
        console.log('Stop')
    }
    else if (light == 'yellow') {
        console.log('Slow down')
    }
    else if (light == 'green') {
        console.log('Go')
    }
}