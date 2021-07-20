const restrictUsername = (username) => {
    const userCheck = /^[a-z][a-z]+\d*$|^[a-z]\d\d+$/i;
    return userCheck.test(username);
}

console.log(restrictUsername("JACK"));