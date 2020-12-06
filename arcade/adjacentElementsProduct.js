/*
// 4. Given an array of integers, find the pair of adjacent elements that has the largest product and return that product.

// For inputArray = [3, 6, -2, -5, 7, 3], 
// the output should be adjacentElementsProduct(inputArray) = 21.
// 7 and 3 produce the largest product.

// Dunno why we're multiplying rather than adding products together, but I don't question the logic...

*/

function adjacentElementsProduct(inputArray) {

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


// TEST DATA
console.log(adjacentElementsProduct([3, 6, -2, -5, 7, 3])); // expected: 21
console.log(adjacentElementsProduct([-23, 4, -3, 8, -12])); // expected: -12