/*
// 4. Given an array of integers, find the pair of adjacent elements that has the largest product and return that product.

// For inputArray = [3, 6, -2, -5, 7, 3], 
// the output should be adjacentElementsProduct(inputArray) = 21.
// 7 and 3 produce the largest product.

// Dunno why we're multiplying rather than adding products together, but I don't question the logic...

*/

// v1: my solution
function adjacentElementsProduct1(inputArray) {

    let maxPairSum = 0;
    let maxPair = [];
    let pairs = [];

    for (let i = 0; i < inputArray.length; i++) {
        if (inputArray[i+1]) {
            pairs.push([inputArray[i], inputArray[i+1]]);
        }
    }

    for (let i = 0; i < pairs.length; i++) {
        let pairSum = pairs[i].reduce((a, b) => a * b);
        if (pairSum > maxPairSum) {
            maxPairSum = pairSum;
            maxPair[0] = pairs[i];
        }
        else if (maxPairSum === 0) { // to deal with negative numbers
            maxPairSum = pairSum;
        }
    }

    console.log('maxPair: ', maxPair[0]);
    console.log('maxPairSum: ', maxPairSum);
    return maxPairSum;
}



// SOLUTIONS ELSEWHERE ///////////////////////////

// v2 Holy Shit!!!
function adjacentElementsProduct2(inputArray) { 
    return Math.max(...inputArray.slice(1).map((x,i)=>[x*inputArray[i]]));
}

// v2 DECONSTRUCTED
// with .splice(n) of a .map(currentValue, index)
// it shifts the starting index of the .map currentValue to `n` elements in the array
// while maintainng the start of the original array index at 0.
// Which allows the same array to be parsed at two different starting points!!!
// Math.max is pretty cool, too.
//
// function adjacentElementsProduct(inputArray) { 
//     // console.log(...inputArray.slice(1).map((x,i)=>[x*inputArray[i]]));
//     console.log(inputArray);
//     console.log(
//         inputArray.slice(1).map((x,i) => {
//             console.log('x value: ', x, 'index: ', i+1);
//             console.log('i value: ', inputArray[i], 'index: ', i);
//             console.log('inputArray[i]: ', );
//             return x*inputArray[i];
//         })
//     );
// }

// v3
// without the .slice(1) of v2, this makes more sense to me in how one would shift the index to get a different value in the array compared with the value of the head
function adjacentElementsProduct3(inputArray) { 
    // init
    let largestPairSoFar = inputArray[0] * inputArray[1];
    // transverse through array comparing
    inputArray.map((value, index) => {
        if (inputArray[index+1]) {
            if (value * inputArray[index+1] > largestPairSoFar) {
                largestPairSoFar = value * inputArray[index+1];
            }
        }
    });
    return largestPairSoFar;
}


// template
// function adjacentElementsProductX(inputArray) { }


// TEST DATA
// console.log(adjacentElementsProduct([1, 2, 3, 4, 5])); // expected: 20
// console.log(adjacentElementsProduct([3, 6, -2, -5, 7, 3])); // expected: 21
// console.log(adjacentElementsProduct([-23, 4, -3, 8, -12])); // expected: -12

// Setting up a Handler system, 
// so can semi-dynamically invoke multiple functions to console log
// by just adding a function name as a Handler method
const Handler = {
    adjacentElementsProduct1,
    adjacentElementsProduct2,
    adjacentElementsProduct3,
};
function testSeveralVersions(num) {
    for (let i = 1; i <= num; i++) {
        console.log(`\n/////////////// adjacentElementsProduct-v${i}`);
        console.log(Handler[`adjacentElementsProduct${i}`]([1, 2, 3, 4, 5]));   // expected: 20
        console.log(Handler[`adjacentElementsProduct${i}`]([3, 6, -2, -5, 7, 3]));  // expected: 21
        console.log(Handler[`adjacentElementsProduct${i}`]([-23, 4, -3, 8, -12])); // expected: -12
    }
}
testSeveralVersions(Object.keys(Handler).length);


