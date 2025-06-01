function removeBlanks(str) {
    let result = "";
    for (let i = 0; i < str.length; i++) {
        if (str[i] !== " ") {
            result += str[i];
        }
    }
    return result;
}

function getDigits(str) {
    let digitString = "";
    for (let i = 0; i < str.length; i++) {
        if (!isNaN(str[i]) && str[i] !== " ") {
            digitString += str[i];
        }
    }
    return digitString === "" ? 0 : Number(digitString);
}

function acronym(str) {
    const words = str.split(" ");
    let result = "";
    for (let i = 0; i < words.length; i++) {
        const word = words[i];
        for (let j = 0; j < word.length; j++) {
            const char = word[j];
            if ((char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z')) {
                result += char.toUpperCase();
                break;
            }
        }
    }
    return result;
}

function countNonSpaces(str) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] !== " ") {
            count++;
        }
    }
    return count;
}

function removeShorterStrings(arr, minLength) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length >= minLength) {
            result[result.length] = arr[i];
        }
    }
    return result;
}

console.log("=== REMOVE BLANKS TESTS ===");
console.log('removeBlanks(" Pl ayTha tF u nkyM usi c "):', removeBlanks(" Pl ayTha tF u nkyM usi c "));
console.log('removeBlanks("I can not BELIEVE it\'s not BUTTER"):', removeBlanks("I can not BELIEVE it's not BUTTER"));

console.log("\n=== GET DIGITS TESTS ===");
console.log('getDigits("abc8c0d1ngd0j0!8"):', getDigits("abc8c0d1ngd0j0!8"));
console.log('getDigits("0s1a3y5w7h9a2t4?6!8?0"):', getDigits("0s1a3y5w7h9a2t4?6!8?0"));

console.log("\n=== ACRONYMS TESTS ===");
console.log('acronym(" there\'s no free lunch - gotta pay yer way. "):', acronym(" there's no free lunch - gotta pay yer way. "));
console.log('acronym("Live from New York, it\'s Saturday Night!"):', acronym("Live from New York, it's Saturday Night!"));

console.log("\n=== COUNT NON-SPACES TESTS ===");
console.log('countNonSpaces("Honey pie, you are driving me crazy"):', countNonSpaces("Honey pie, you are driving me crazy"));
console.log('countNonSpaces("Hello world !"):', countNonSpaces("Hello world !"));

console.log("\n=== REMOVE SHORTER STRINGS TESTS ===");
console.log("removeShorterStrings(['Good morning', 'sunshine', 'the', 'Earth', 'says', 'hello'], 4):");
console.log(removeShorterStrings(['Good morning', 'sunshine', 'the', 'Earth', 'says', 'hello'], 4));
console.log("removeShorterStrings(['There', 'is', 'a', 'bug', 'in', 'the', 'system'], 3):");
console.log(removeShorterStrings(['There', 'is', 'a', 'bug', 'in', 'the', 'system'], 3));
