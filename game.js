// Given a year, return the century it is in. The first century spans from the year 1 up to and including the year 100, the second - from the year 101 up to and including the year 200, etc.

// Example

// For year = 1905, the output should be centuryFromYear(year) = 20; For year = 1700, the output should be centuryFromYear(year) = 17.

// Given the string, check if it is a palindrome.

// Example

function centuryFromYear(year) {
    return year % 100 === 0 ? year / 100 : Math.floor((year / 100) + 1)
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
    return recursiveFib(n - 2) + recursiveFib(n - 1);
}

// Given the string, check if it is a palindrome.

// Example

// For inputString = "aabaa", the output should be checkPalindrome(inputString) = true; For inputString = "abac", the output should be checkPalindrome(inputString) = false; For inputString = "a", the output should be checkPalindrome(inputString) = true.

function checkPalindrome(inputString) {
    return inputString.split('').reverse().join('') === inputString;
}

// Given a sequence of integers as an array, determine whether it is possible to obtain a strictly increasing sequence by removing no more than one element from the array.

// Note: sequence a0, a1, ..., an is considered to be a strictly increasing if a0 < a1 < ... < an. Sequence containing only one element is also considered to be strictly increasing.

// Example

// For sequence = [1, 3, 2, 1], the output should be almostIncreasingSequence(sequence) = false.

// There is no one element in this array that can be removed in order to get a strictly increasing sequence.

// For sequence = [1, 3, 2], the output should be almostIncreasingSequence(sequence) = true.

// You can remove 3 from the array to get the strictly increasing sequence [1, 2]. Alternately, you can remove 2 to get the strictly increasing sequence [1, 3].

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


// Ratiorg got statues of different sizes as a present from CodeMaster for his birthday, each statue having an non-negative integer size. Since he likes to make things perfect, he wants to arrange them from smallest to largest so that each statue will be bigger than the previous one exactly by 1. He may need some additional statues to be able to accomplish that. Help him figure out the minimum number of additional statues needed.

// Example

// For statues = [6, 2, 3, 8], the output should be makeArrayConsecutive2(statues) = 3.

// Ratiorg needs statues of sizes 4, 5 and 7.
function maxStatues(arr) {
    arr.sort((a, b) => a - b);
    let c = 0;
    console.log(arr);
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i + 1] - arr[i] > 1) c += arr[i + 1] - arr[i] - 1;
    }
    return c;
}

// Below we will define an n-interesting polygon. Your task is to find the area of a polygon for a given n.

// A 1-interesting polygon is just a square with a side of length 1. An n-interesting polygon is obtained by taking the n - 1-interesting polygon and appending 1-interesting polygons to its rim, side by side. You can see the 1-, 2-, 3- and 4-interesting polygons in the picture below.

// Example

// For n = 2, the output should be shapeArea(n) = 5; For n = 3, the output should be shapeArea(n) = 13.
function square(n) {
    if (n === 1) return n;
    let acc = 1;
    for (let i = 1; i <= n; i++) {
        acc += 4 * i;
        console.log(acc);
    }
    return acc;
}

// After becoming famous, the CodeBots decided to move into a new building together. Each of the rooms has a different cost, and some of them are free, but there's a rumour that all the free rooms are haunted! Since the CodeBots are quite superstitious, they refuse to stay in any of the free rooms, or any of the rooms below any of the free rooms.

// Given matrix, a rectangular matrix of integers, where each value represents the cost of the room, your task is to return the total sum of all rooms that are suitable for the CodeBots (ie: add up all the values that don't appear below a 0).

// Example

// For

// matrix = [[0, 1, 1, 2], [0, 5, 0, 0], [2, 0, 3, 3]] the output should be matrixElementsSum(matrix) = 9.

// example 1

// There are several haunted rooms, so we'll disregard them as well as any rooms beneath them. Thus, the answer is 1 + 5 + 1 + 2 = 9.

// For

// matrix = [[1, 1, 1, 0], [0, 5, 0, 1], [2, 1, 3, 10]] the output should be matrixElementsSum(matrix) = 9.

// example 2

// Note that the free room in the final column makes the full column unsuitable for bots (not just the room directly beneath it). Thus, the answer is 1 + 1 + 1 + 5 + 1 = 9.

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

// Given an array of strings, return another array containing all of its longest strings.
//
//     Example
//
// For inputArray = ["aba", "aa", "ad", "vcd", "aba"], the output should be
// allLongestStrings(inputArray) = ["aba", "vcd", "aba"].
//
//     Input/Output
//
//     [execution time limit] 4 seconds (js)
//
//     [input] array.string inputArray
//
// A non-empty array.
//
//     Guaranteed constraints:
//     1 ≤ inputArray.length ≤ 10,
//     1 ≤ inputArray[i].length ≤ 10.

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


// Given two strings, find the number of common characters between them.
//
//     Example
//
// For s1 = "aabcc" and s2 = "adcaa", the output should be
// commonCharacterCount(s1, s2) = 3.
//
// Strings have 3 common characters - 2 "a"s and 1 "c".

function commonCharacterCount(s1, s2) {
    let count = {}, count2 = {}, map = {}, arr = [], sum = 0;
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

// Ticket numbers usually consist of an even number of digits. A ticket number is considered lucky if the sum of the first half of the digits is equal to the sum of the second half.
//
//     Given a ticket number n, determine if it's lucky or not.
//
// Example
//
// For n = 1230, the output should be
// isLucky(n) = true;
// For n = 239017, the output should be
// isLucky(n) = false.

function isLucky(n) {
    let arr = n.toString().split('');
    const half = arr.length / 2;
    let arr2 = arr.slice(0, half);
    arr.splice(0, half);
    let sum = 0, sum2 = 0;
    arr.map(k => sum += Number(k));
    arr2.map(k => sum2 += Number(k));
    return sum === sum2;
}

// Some people are standing in a row in a park. There are trees between them which cannot be moved. Your task is to rearrange the people by their heights in a non-descending order without moving the trees. People can be very tall!
//
//     Example
//
// For a = [-1, 150, 190, 170, -1, -1, 160, 180], the output should be
// sortByHeight(a) = [-1, 150, 160, 170, -1, -1, 180, 190].

function sortByHeight(a) {
    let arr = [];
    for (let i in a) {
        if (a[i] === -1) arr.push(i);
    }
    a = a.filter(k => k !== -1)
    a.sort((a, b) => a - b);
    for (let i of arr) {
        a.splice(i, 0, -1);
    }
    console.log(a)
    return a;
}

// Write a function that reverses characters in (possibly nested) parentheses in the input string.
//
//     Input strings will always be well-formed with matching ()s.
//
//     Example
//
// For inputString = "(bar)", the output should be
// reverseInParentheses(inputString) = "rab";
// For inputString = "foo(bar)baz", the output should be
// reverseInParentheses(inputString) = "foorabbaz";
// For inputString = "foo(bar)baz(blim)", the output should be
// reverseInParentheses(inputString) = "foorabbazmilb";
// For inputString = "foo(bar(baz))blim", the output should be
// reverseInParentheses(inputString) = "foobazrabblim".
//     Because "foo(bar(baz))blim" becomes "foo(barzab)blim" and then "foobazrabblim".

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
            let str = inputString.slice(j + 1, i).split('').reverse();
            for (let z = 0; z < str.length; z++) {
                let cp = inputString.split('');
                cp.splice(j + 1 + z, 1, str[z]);
                inputString = cp.join('');
            }
        }
    }
    return inputString.split('').filter(k => k !== "#").join('');
}

// Several people are standing in a row and need to be divided into two teams. The first person goes into team 1, the second goes into team 2, the third goes into team 1 again, the fourth into team 2, and so on.
//
//     You are given an array of positive integers - the weights of the people. Return an array of two integers, where the first element is the total weight of team 1, and the second element is the total weight of team 2 after the division is complete.
//
//     Example
//
// For a = [50, 60, 60, 45, 70], the output should be
// alternatingSums(a) = [180, 105].

function alternatingSums(a) {
    let bool = true;
    let sum = 0, sum2 = 0;
    let arr = [], arr2 = [];
    for (let item of a) {
        if (bool) arr.push(item);
        else arr2.push(item);
        bool = !bool;
    }
    arr.map(k => sum += k);
    arr2.map(k => sum2 += k);
    return [sum, sum2];

}

// Given a rectangular matrix of characters, add a border of asterisks(*) to it.
//
//     Example
//
// For
//
// picture = ["abc",
//     "ded"]
// the output should be
//
// addBorder(picture) =
//     ["*****",
//     "*abc*",
//     "*ded*",
//     "*****"]


    function addBorder(picture) {
    picture = picture.map(k => `*${k}*`);
    const n = picture[0].length;
    let str = "";
    while (str.length !== n) str += "*";
    picture.splice(0, 0, str);
    picture.splice(picture.length, 0, str);
    picture = picture.map(k => {
        if (k.length !== n) {
            while (k.length !== n) k += "*";
            return k;

        }
        else return k;
    });
    return picture;
}

// Two arrays are called similar if one can be obtained from another by swapping at most one pair of elements in one of the arrays.
//
//     Given two arrays a and b, check whether they are similar.
//
//     Example
//
// For a = [1, 2, 3] and b = [1, 2, 3], the output should be
// areSimilar(a, b) = true.
//
//     The arrays are equal, no need to swap any elements.
//
//     For a = [1, 2, 3] and b = [2, 1, 3], the output should be
// areSimilar(a, b) = true.
//
//     We can obtain b from a by swapping 2 and 1 in b.
//
//     For a = [1, 2, 2] and b = [2, 1, 1], the output should be
// areSimilar(a, b) = false.
//
//     Any swap of any two elements either in a or in b won't make a and b equal.

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
// You are given an array of integers. On each move you are allowed to increase exactly one of its element by one. Find the minimal number of moves required to obtain a strictly increasing sequence from the input.
//
//     Example
//
// For inputArray = [1, 1, 1], the output should be
// arrayChange(inputArray) = 3.
function arrayChange(inputArray) {
    let moves = 0;
    for (let i = 0; i < inputArray.length; i++) {
        const delta = inputArray[i + 1] - inputArray[i];
        if (delta < 1) {
            inputArray[i + 1]++;
            i--;
            moves++;
        }
    }
    return moves;
}

function factorial(n) {
    let sum = n;
    for (let i = n - 1; i > 0; i--) {
        sum *= i;
    }
    return sum;
}

// Given a string, find out if its characters can be rearranged to form a palindrome.
//
//     Example
//
// For inputString = "aabb", the output should be
// palindromeRearranging(inputString) = true.
//
//     We can rearrange "aabb" to make "abba", which is a palindrome.

function palindromeRearranging(inputString) {
    if (inputString.split('').reverse().join('') === inputString) return true;
    if (inputString.length === 1) return true;
    let charMap = {};
    let odds = 0;

    for (let char of inputString) {
        if (!charMap[char]) charMap[char] = 1;
        else charMap[char]++;
    }
    console.log(charMap);
    for (let key in charMap) {
        if (charMap[key] % 2 !== 0) odds++;
    }
    return odds <= 1;
}

// console.log(palindromeRearranging('degffgeddee'));

// Call two arms equally strong if the heaviest weights they each are able to lift are equal.
//
//     Call two people equally strong if their strongest arms are equally strong (the strongest arm can be both the right and the left), and so are their weakest arms.
//
//     Given your and your friend's arms' lifting capabilities find out if you two are equally strong.
//
//     Example
//
// For yourLeft = 10, yourRight = 15, friendsLeft = 15, and friendsRight = 10, the output should be
// areEquallyStrong(yourLeft, yourRight, friendsLeft, friendsRight) = true;
// For yourLeft = 15, yourRight = 10, friendsLeft = 15, and friendsRight = 10, the output should be
// areEquallyStrong(yourLeft, yourRight, friendsLeft, friendsRight) = true;
// For yourLeft = 15, yourRight = 10, friendsLeft = 15, and friendsRight = 9, the output should be
// areEquallyStrong(yourLeft, yourRight, friendsLeft, friendsRight) = false.
//     Input/Output
//
//     [execution time limit] 4 seconds (js)
//
//     [input] integer yourLeft
//
// A non-negative integer representing the heaviest weight you can lift with your left arm.
//
//     Guaranteed constraints:
//     0 ≤ yourLeft ≤ 20.
//
//     [input] integer yourRight
//
// A non-negative integer representing the heaviest weight you can lift with your right arm.
//
// true if you and your friend are equally strong, false otherwise.

function areEquallyStrong(yourLeft, yourRight, friendsLeft, friendsRight) {
    let strongest = {}, weakest = {};
    yourLeft >= yourRight ? strongest["me"] = yourLeft : strongest["me"] = yourRight;
    friendsLeft >= friendsRight ? strongest["friend"] = friendsLeft : strongest["friend"] = friendsRight;
    yourLeft < yourRight ? weakest["me"] = yourLeft : weakest["me"] = yourRight;
    friendsLeft < friendsRight ? weakest["friend"] = friendsLeft : weakest["friend"] = friendsRight;
    return strongest["me"] === strongest["friend"] && weakest["me"] === weakest["friend"];
}

// console.log(areEquallyStrong(15, 10, 15, 9));

// Given an array of integers, find the maximal absolute difference between any two of its adjacent elements.
//
//     Example
//
// For inputArray = [2, 4, 1, 0], the output should be
// arrayMaximalAdjacentDifference(inputArray) = 3.
// The maximal absolute difference

function arrayMaximalAdjacentDifference(inputArray) {
    let max = 0;
    for (let i = 1; i < inputArray.length - 1; i++) {
        if (!max) max = Math.abs(inputArray[i] - inputArray[i + 1]);
        if (Math.abs(inputArray[i] - inputArray[i + 1]) > max) max = Math.abs(inputArray[i] - inputArray[i + 1]);
        if (Math.abs(inputArray[i] - inputArray[i - 1]) > max) max = Math.abs(inputArray[i] - inputArray[i - 1]);
    }
    return max;
}

// console.log(arrayMaximalAdjacentDifference([2, 4, 1, 0]));


// An IP address is a numerical label assigned to each device (e.g., computer, printer) participating in a computer network that uses the Internet Protocol for communication. There are two versions of the Internet protocol, and thus two versions of addresses. One of them is the IPv4 address.
//
//     Given a string, find out if it satisfies the IPv4 address naming rules.
//
//     Example
//
// For inputString = "172.16.254.1", the output should be
// isIPv4Address(inputString) = true;
//
// For inputString = "172316254.1", the output should be
// isIPv4Address(inputString) = false.
//
// 316 is not in range [0, 255].
//
//     For inputString = ".254.255.0", the output should be
// isIPv4Address(inputString) = false.
//
//     There is no first number.
// true if inputString satisfies the IPv4 address naming rules, false otherwise.

function isIPv4Address(inputString) {
    const range = [0, 255];
    const sections = 4;

    let arr = inputString.split('.');
    for (let key in arr) {
        if (!arr[key]) {
            if (arr.length > sections) return false;
            arr.splice(key, 1);
        }
    }
    if (arr.length !== sections) return false;
    for (let key in arr) {
        arr[key] = arr[key].replace(".", "");
        if (!isNaN(arr[key])) arr[key] = Number(arr[key]);
    }
    for (let ip of arr) {
        if (ip === null || ip === undefined || typeof ip === "string") return false;
        if (ip < range[0] || ip > range[1]) return false;
    }
    return true;
}

// console.log(isIPv4Address("0..1.0.0"));

// You are given an array of integers representing coordinates of obstacles situated on a straight line.
//
//     Assume that you are jumping from the point with coordinate 0 to the right. You are allowed only to make jumps of the same length represented by some integer.
//
//     Find the minimal length of the jump enough to avoid all the obstacles.
//
//     Example
//
// For inputArray = [5, 3, 6, 7, 9], the output should be
// avoidObstacles(inputArray) = 4.
// [3, 5, 6, 7, 9]


function avoidObstacles(inputArray) {
    let counter = 2;
    let jump;
    for (let i = 0; i < inputArray.length; i++) {
        while (inputArray[i] % counter === 0) {
            counter++;
            i = 0;
        }
        jump = counter;
    }
    return jump;

}

// console.log(avoidObstacles([5, 3, 6, 7, 9]));

// Last night you partied a little too hard. Now there's a black and white photo of you that's about to go viral!
//
// You can't let this ruin your reputation, so you want to apply the box blur algorithm to the photo to hide its content.
//
// The pixels in the input image are represented as integers. The algorithm distorts the input image in the following way:
// Every pixel x in the output image has a value equal to the average value of the pixel values from the 3 × 3 square that has its center at x,
// including x itself. All the pixels on the border of x are then removed.
// Return the blurred image as an integer, with the fractions rounded down.

// image = [[1, 1, 1],
//         [1, 7, 1],
//         [1, 1, 1]]

// the output should be boxBlur(image) = [[1]].
//
//     To get the value of the middle pixel in the input 3 × 3 square:
//     (1 + 1 + 1 + 1 + 7 + 1 + 1 + 1 + 1) = 15 / 9 = 1.66666 = 1. The border pixels are cropped from the final result.

// image = [[7, 4, 0, 1],
//         [5, 6, 2, 2],
//         [6, 10, 7, 8],
//         [1, 4, 2, 0]]
// There are four 3 × 3 squares in the input image, so there should be four integers in the blurred output.
// To get the first value: (7 + 4 + 0 + 5 + 6 + 2 + 6 + 10 + 7) = 47 / 9 = 5.2222 = 5.
// The other three integers are obtained the same way, then the surrounding integers are cropped from the final result.




function eachSum(num1, num2) {
    let { greater, smaller } = decideGreater(num1, num2);
    let hash = "";
    let aux = 0;
    if (greater.length !== smaller.length) {
        while (smaller.length !== greater.length) {
            smaller = "0" + smaller;
        }
    }
    for (let i = greater.length - 1; i >= 0; i--) {
        let sum = Number(smaller[i]) + Number(greater[i]) + Number(aux);
        if (sum > 9 && i !== 0) {
            aux = (sum + "")[0];
            sum = (sum + "")[1];
        }
        else aux = 0;
        hash = (sum + "").concat(hash);
    }
    return hash;
}

function decideGreater(str, str2) {
    if (str.length >= str2.length) return {greater: str, smaller: str2};
    return {greater: str2, smaller: str};
}





