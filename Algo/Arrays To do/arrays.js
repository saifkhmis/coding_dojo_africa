function pushFront(arr, val) {
    arr.unshift(val);
    return arr;
}

function popFront(arr) {
    if (arr.length === 0) return undefined;
    const removedValue = arr.shift();
    console.log("Array after removal:", arr);
    return removedValue;
}

function insertAt(arr, index, val) {
    arr.splice(index, 0, val);
    return arr;
}

function removeAt(arr, index) {
    if (index < 0 || index >= arr.length) return undefined;
    const removedValue = arr.splice(index, 1)[0];
    console.log("Array after removal:", arr);
    return removedValue;
}

function swapPairs(arr) {
    for (let i = 0; i < arr.length - 1; i += 2) {
        const temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
    }
    return arr;
}

function removeDupes(arr) {
    if (arr.length <= 1) return arr;
    let writeIndex = 1;
    for (let readIndex = 1; readIndex < arr.length; readIndex++) {
        if (arr[readIndex] !== arr[readIndex - 1]) {
            arr[writeIndex] = arr[readIndex];
            writeIndex++;
        }
    }
    arr.length = writeIndex;
    return arr;
}

console.log("=== PUSH FRONT TESTS ===");
console.log("pushFront([5,7,2,3], 8):", pushFront([5,7,2,3], 8));
console.log("pushFront([99], 7):", pushFront([99], 7));

console.log("\n=== POP FRONT TESTS ===");
console.log("popFront([0,5,10,15]) returned:", popFront([0,5,10,15]));
console.log("popFront([4,5,7,9]) returned:", popFront([4,5,7,9]));

console.log("\n=== INSERT AT TESTS ===");
console.log("insertAt([100,200,5], 2, 311):", insertAt([100,200,5], 2, 311));
console.log("insertAt([9,33,7], 1, 42):", insertAt([9,33,7], 1, 42));

console.log("\n=== REMOVE AT TESTS ===");
console.log("removeAt([1000,3,204,77], 1) returned:", removeAt([1000,3,204,77], 1));
console.log("removeAt([8,20,55,44,98], 3) returned:", removeAt([8,20,55,44,98], 3));

console.log("\n=== SWAP PAIRS TESTS ===");
console.log("swapPairs([1,2,3,4]):", swapPairs([1,2,3,4]));
console.log("swapPairs(['Brendan',true,42]):", swapPairs(["Brendan",true,42]));

console.log("\n=== REMOVE DUPLICATES TESTS ===");
console.log("removeDupes([-2,-2,3.14,5,5,10]):", removeDupes([-2,-2,3.14,5,5,10]));
console.log("removeDupes([9,19,19,19,19,19,29]):", removeDupes([9,19,19,19,19,19,29]));
