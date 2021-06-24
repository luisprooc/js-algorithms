function confirmEnding(str, target) {
    const len = target.length * -1;
    return str.substr(len) === target;
}

console.log(confirmEnding("Bastian", "n"));