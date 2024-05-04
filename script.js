//your JS code here. If required.
function mapLetters(l) {
   let string = l.lowerCase();
	let obj = {};
	let index = l;
	obj[index] = indexOf(l);
	return obj;
}

let l = prompt("Enter the string:");
alert(mapLetters(l));