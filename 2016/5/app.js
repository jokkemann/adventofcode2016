var md5 = require('md5')
var input = 'abc'
// input = 'wtnhxymk'
// real input 'wtnhxymk'

// pw length = 8
// 6th character of the hash 


task1(input)

function task1(input) {
    var password = ''

    var i = 0;
    while (password.length < 8) {
        var hash = md5(input + i++);
        if (hash.startsWith("00000")) {
            password += hash[5]
            console.log(password.length, hash)
        }
    }

    console.log('password', password)
}

function startsWithFiveZeros(input) {
    return input.substr(0, 5) === '00000'
}