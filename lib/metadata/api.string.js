let CHARACHTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"

const genApiKey = (length) => {
    let result = ''
    for (let i = 0; i < length; i++) {
        result += CHARACHTERS.charAt(Math.floor(Math.random() * CHARACHTERS.length));
    }
    return result

}

export { genApiKey }