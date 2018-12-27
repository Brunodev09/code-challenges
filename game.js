function checkPalindrome(inputString) {
    let word = inputString.split('');
    let rev = inputString.split('').reverse();
    for (var i = 0; i < word.length; i++) {
        if (word[i] != rev[i]) {
            return false;
        }
    }
    return true;
}

function adjacentElementsProduct(inputArray) {
    let aux;
    let lg = -Infinity;
    for (var i = 0; i < inputArray.length; i++) {
        aux = inputArray[i] * inputArray[i + 1];
        if (lg < aux) lg = aux;
    }
    return lg;
}


function shapeArea(n) {
    if (n == 1) return n;
    else return n * (n + 4);
}

// function reverseParentheses(s) {
//     let aux = s.split('');
//     let c = s;
//     let clean = c.replace(/[^a-zA-Z ]/g, "");
//     let timesToRun = (aux.length - (aux.toString().replace(/[^a-zA-Z ]/g, "").length)) / 2;
//     let start = s.indexOf('(');
//     let end = s.lastIndexOf(')');
//     let edited = aux.slice(start+1,end);
//     timesToRun--;
//     while(timesToRun > 0) {
//         start = edited.indexOf('(');
//         end = edited.lastIndexOf(')');
//         test = edited.slice(start+1,end);
//         timesToRun--;
//     }
// }
console.log(reverseParentheses('a(bcdefghijkl(mno)p)q'));

function reverseParentheses(s) {
    let start, end;
    let aux = s.split('');
    let indexes = [];
    let timesToRun = (aux.length - (aux.toString().replace(/[^a-zA-Z ]/g, "").length)) / 2;
    aux.filter((element, index) => {
        if(element === '(' || element === ')') {
            indexes.push(index);
        }
    });
    while (timesToRun > 0) {
        start = aux.lastIndexOf('(');
        end = aux.indexOf(')')
        timesToRun--;
    }
}

//.replace(/[^a-zA-Z ]/g, "")




