var md5 = require('md5')
var input = 'abc'
input = 'wtnhxymk'
// real input 'wtnhxymk'

// pw length = 8
// 6th character of the hash 


// task1(input)
task2(input)

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

function task2(input) {
    var password = '--------'
    var i = 0;
    while (password.includes('-')) {
        if (i % 10000 === 0) {
            // printCurrentPassword(password)
        }
        var hash = md5(input + i++)
        if (hash.startsWith('00000')) {
            var pos = parseInt(hash[5], 16)
            if (pos > 7 || password.charAt(pos) !== '-') {
                continue
            }
            var char = hash[6]
            var chars = password.split('')
            chars[pos] = char
            password = chars.join('')
            // console.log(password)
        }
    }
    console.log('Password found', password)
}

function printCurrentPassword(input) {
    var alphabet = [...Array(26).keys()].map(k => String.fromCharCode(k + 97))
    var characters = [...Array(10).keys()].concat(alphabet)
    var output = input.split('').map(c => {
        if (c === '-') {
            var rand = Math.round(Math.random() * characters.length)
            return characters[rand]
        }
        else {
            return c
        }
    }).join('')
    console.log(output)
}