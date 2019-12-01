function centuryFromYear(year) {
    return year % 100 === 0 ? year/100 : Math.floor((year/100)+1)
}


function fibonacci(n) {
    let first = 1, second = 1, sum = 0;
    let goldenArray = [];
    if (n <= 0) return undefined;
    if (n === 1 || n === 2) {
        for (let i = 0; i < n; i++) {
            goldenArray.push(1);
        }
        return goldenArray;
    }
    goldenArray.push(1, 1);
    for (let i = 2; i < n; i++) {
        sum = first + second;
        second = first;
        first = sum;
        goldenArray.push(sum);
    }
    return goldenArray;
}

function recursiveFib(n) {
    if (!n) return 0;
    if (n === 1 || n === 2) return 1;
    return recursiveFib(n-2) + recursiveFib(n-1);
}

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

function matrixElementsSum(matrix) {
	let sum = 0;
	for (let i = 1; i < matrix.length; i++) {
		for (let j = 0; j < matrix[i].length; j++) {
			console.log(matrix);
			if (!matrix[i - 1][j]) matrix[i][j] = 0;
		}
	}
	for (let i = 0; i < matrix.length; i++) {
		matrix[i] = matrix[i].filter(k => k);
	}
	matrix.map(k => k.map(w => (sum += w)));
	console.log(matrix, sum);
	return sum;

}


function allLongestStrings(inputArray) {
    let auxArr = [];
    let longest = 0;
    for (let str of inputArray) {
        if (str.length > longest) longest = str.length;
    }
    for (let str of inputArray) {
        if (str.length === longest) auxArr.push(str);
    }
    return auxArr;
}

function commonCharacterCount(s1, s2) {
    let count ={}, count2={}, map = {}, arr = [], sum = 0;
    for (let char1 of s1) {
        for (let char2 of s2) {
            if (char1 === char2) map[char1] = true;
        }
    }
    for (let key in map) {
        for (let char of s1) {
            if (char === key) {
                if (!count[char]) count[char] = 1;
                else count[char]++;   
            }
        }
        for (let char of s2) {
            if (char === key) {
                if (!count2[char]) count2[char] = 1;
                else count2[char]++;
            }
        }
    }
    for (let key in map) {
        arr.push(Math.min(count[key], count2[key]))
    }
    arr.map(k => sum += k)
    return sum;
}


function isLucky(n) {
    let arr = n.toString().split('');
    const half = arr.length / 2;
    let arr2 = arr.slice(0, half);
    arr.splice(0, half);
    let sum = 0, sum2 = 0;
    arr.map(k => sum += Number(k));
    arr2.map(k => sum2+=Number(k));
    return sum === sum2;
}

function sortByHeight(a) {
    let arr = [];
    for (let i in a) {
        if (a[i]===-1) arr.push(i);
    }
    a = a.filter(k => k!==-1)
    a.sort((a,b)=>a-b);
    for (let i of arr) {
        a.splice(i, 0, -1);
    }
    console.log(a)
    return a;
}






