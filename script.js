//your JS code here. If required.
function mapLetters(l) {
    let string = l.toLowerCase(); // Correct method name: toLowerCase()
    let obj = {};
    for (let i = 0; i < string.length; i++) {
        let index = string[i];
        obj[index] = i;
    }
    return obj;
}

let l = prompt("Enter the string:");
alert(JSON.stringify(mapLetters(l))); // Use JSON.stringify() to display the object properly
