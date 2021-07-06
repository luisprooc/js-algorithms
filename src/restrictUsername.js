const restrictUsername = (username) => {
    const userCheck = /^[a-z]*[a-z].[0-9]?$/gi;
    return userCheck.test(username);
}

console.log(restrictUsername("JACK"));