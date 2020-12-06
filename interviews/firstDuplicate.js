/*
TASK
Given an array a that contains only numbers in the range from 1 to a.length, find the first duplicate number for which the second occurrence has the minimal index. 

In other words, if there are more than 1 duplicated numbers, return the number for which the second occurrence has a smaller index than the second occurrence of the other number does. If there are no such elements, return -1.

Examples:
// For a = [2, 1, 3, 5, 3, 2], 
the output should be firstDuplicate(a) = 3.

There are 2 duplicates: numbers 2 and 3. The second occurrence of 3 has a smaller index than the second occurrence of 2 does, so the answer is 3.

// For a = [2, 2], 
the output should be firstDuplicate(a) = 2;

// For a = [2, 4, 3, 5, 1], 
the output should be firstDuplicate(a) = -1.
*/


// // v1: MY ATTEMPT
// // passed all initial tests
// // but failed Big O tests... exceed timelimit
// function firstDuplicate(a) {
    
//     let findDuplicates = a => a.filter((item, index) => a.indexOf(item) != index);

//     if (findDuplicates(a).length !== 0) {
//         return findDuplicates(a)[0];
//     } else {
//         return -1;
//     }
// }


// OTHER SOLUTIONS ///////////////////////////////////

// Notable for it's use of the built-in `Set` object

// v2.1
const firstDuplicate = arr => {
    console.log(arr);
    let store = new Set();
    for (let element of arr) {
        console.log(store);
        if (store.has(element))
            return element;
        else
            store.add(element);
    }
    return -1;
};

// // v2.2
// const firstDuplicate = arr => {
//     console.log(arr);
//     let store = new Set();
//     for (let i = 0; i < arr.length; i++) {
//         console.log(store);
//         if (store.has(arr[i])) {
//             return arr[i];
//         }
//         else {
//             store.add(arr[i]);
//         }
//     }
//     return -1;
// };

// // v2.3
// const firstDuplicate = arr => {
//     console.log(arr);
//     let store = {};
//     for (let i = 0; i < arr.length; i++) {
//         console.log(store);
//         if (store[arr[i]] !== undefined) {
//             return arr[i];
//         }
//         else {
//             store[arr[i]] = i;
//         }
//     }
//     return -1;
// };

// // v2.4
// const firstDuplicate = arr => {
//     console.log(arr);
//     let store = {};
//     for (let element of arr) {
//         console.log(store);
//         if (!store[element]) {
//             store[element] = element;
//         }
//         else {
//             return store[element];
//         }
//     }
//     return -1;
// };



// TEST
console.log(firstDuplicate([2, 1, 3, 5, 3, 2])); // expect 3
console.log(firstDuplicate([2, 2])); // expect 2
console.log(firstDuplicate([2, 4, 3, 5, 1])); // expect -1