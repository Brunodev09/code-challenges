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

// Yes, this one is ugly. But boy was I proud when I finnally made it.
function reverseInParentheses(inputString) {
    let char = inputString;
    let firstBracket;
    let mapOfIndexesToAvoid = {};
    for (let i = 0; i < inputString.length; i++) {
        if (char[i] === ")" && !mapOfIndexesToAvoid[i]) {
            firstBracket = inputString.toString().slice(0, i);
            let j;
            for (j = firstBracket.length; j > 0; j--) {
                if (firstBracket[j] === "(") break;
            }
            mapOfIndexesToAvoid[i] = [];
            mapOfIndexesToAvoid[i].push(i, j);
            inputString = inputString.split('');
            inputString.splice(j, 1, "#");
            inputString.splice(i, 1, "#");
            inputString = inputString.join('');
            let str = inputString.slice(j+1, i).split('').reverse();
            for (let z = 0; z < str.length; z++) {
                let cp = inputString.split('');
                cp.splice(j+1+z, 1, str[z]);
                inputString = cp.join('');
            }
        }
    }
    return inputString.split('').filter(k => k !== "#").join('');
}

function alternatingSums(a) {
    let bool = true;
    let sum = 0, sum2 = 0;
    let arr = [], arr2 = [];
    for (let item of a) {
        if (bool) arr.push(item);
        else arr2.push(item);
        bool = !bool;
    }
    arr.map(k => sum+=k);
    arr2.map(k => sum2+=k);
    return [sum, sum2];

}

function addBorder(picture) {
    picture = picture.map(k => `*${k}*`);
    const n = picture[0].length;
    let str = "";
    while (str.length !== n) str += "*";
    picture.splice(0, 0, str);
    picture.splice(picture.length, 0, str);
    picture = picture.map(k => {
        if (k.length !== n) {
            while (k.length !== n) k+="*";
            return k;
            
        }
        else return k;
    })
    return picture;
}

function areSimilar(a, b) {
    let failA = {};
    let failB = {};
    if (a.length !== b.length) return false;
    for (let i = 0; i < a.length; i++) {
        if (a[i] !== b[i]) {
            if (!failA[a[i]]) failA[a[i]] = 1;
            if (!failB[b[i]]) failB[b[i]] = 1;
            failA[a[i]]++;
            failB[b[i]]++;
        }
    }
    for (let key in failA) {
        if (!failB[key] || failA[key] !== failB[key]) return false;
    }
    for (let key in failB) {
        if (!failA[key] || failA[key] !== failB[key]) return false;
    }
    return Object.keys(failA).length <= 2;
}

function arrayChange(inputArray) {
    let moves = 0;
    for (let i = 0; i < inputArray.length; i++) {
        const delta = inputArray[i + 1] - inputArray[i];
        if (delta < 1) {
            inputArray[i+1]++;
            i--;
            moves++;
        }
    }
    return moves;
}

function palindromeRearranging(inputString) {
	inputString = inputString.toLowerCase();
	let charMap = {};
	let odds = 0;

	for (let char of inputString) {
		if (!charMap[char]) charMap[char] = 1;
		else charMap[char]++;
	}
	console.log(charMap);
	if (inputString.length === 1) return true;
	for (let key in charMap) {
		if (charMap[key] % 2 !== 0 && charMap[key] !== 1) return false;
		if (charMap[key] === 1) odds++;
	}
	if (odds > 1) return false;
	return true;
}
// console.log(palindromeRearranging('racecar'));

function factorial(n) {
	let sum = n;
	for (let i = n - 1; i > 0; i--) {
		sum *= i;
	}
	return sum;
}





