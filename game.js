function checkPalindrome(inputString) {
    return inputString.split('').reverse().join('') === inputString;
}

function isSequence(arr, index) {
    let aux = [...arr];
    aux.splice(index, 1);
    if (aux.length <= 2) return aux[0] < aux[1];
	console.log(aux);
	for (let j = 1; j < aux.length - 1; j++) {
		if (aux[j] >= aux[j + 1] || aux[j] <= aux[j - 1]) return false;
	}
	return true;
}

function almostIncreasingSequence(sequence) {
	let bool;
	for (let i = 1; i < sequence.length - 1; i++) {
		if (sequence[i] <= sequence[i - 1]) {
            		if (sequence[i] <= sequence[i - 1] && sequence[i] <= sequence[i + 1] && sequence[i - 1] < sequence[i + 1]) {
                		bool = isSequence(sequence, i);
            		}
			else bool = isSequence(sequence, i - 1);
			if (!bool) return false;
		}
	}
	return true;
}

function maxStatues(arr) {
	arr.sort((a, b) => a - b);
	let c = 0;
	console.log(arr);
	for (let i = 0; i < arr.length - 1; i++) {
		if (arr[i + 1] - arr[i] > 1) c += arr[i + 1] - arr[i] - 1;
	}
	return c;
}

function square(n) {
	if (n === 1) return n;
	let acc = 1;
	for (let i = 1; i <= n; i++) {
		acc += 4 * i;
		console.log(acc);
	}
	return acc;
}

function matrixes(arr) {
	let sum = 0;
	for (let i = 1; i < arr.length; i++) {
		for (let j = 0; j < arr[i].length; j++) {
			console.log(arr);
			if (!arr[i - 1][j]) arr[i][j] = 0;
		}
	}
	for (let i = 0; i < arr.length; i++) {
		arr[i] = arr[i].filter(k => k);
	}
	arr.map(k => k.map(w => (sum += w)));
	console.log(arr, sum);
	return sum;
}

console.log(
	matrixes([
		[0, 1, 1, 2],
		[0, 5, 0, 0],
		[2, 0, 3, 3]
	])
);





