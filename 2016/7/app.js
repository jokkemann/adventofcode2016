var input = [
    'abba[mnop]qrst',
    'abcd[bddb]xyyx',
    'aaaa[qwer]tyui',
    'ioxxoj[asdfgh]zxcvbn',
    'abba[dodd]goog[boosb]',
]
var fs = require('fs');
input = fs.readFileSync('./input.txt').toString().split('\n').filter(s => s !== '')

// console.log('task 1:', input.filter(s => isSupportingTSL(s)).length)

function isSupportingTSL(s) {
    var {hypernets, ipParts} = parseIp(s);
    return hypernets.every(h => !containsAbba(h)) && ipParts.some(i => containsAbba(i))
}

function parseIp(s) {
    var hypernets = [];
    var ipParts = [];

    s.split('[').forEach((sp, i) => {
        if (i === 0) {
            ipParts.push(sp);
        }
        else {
            var newSplit = sp.split(']');
            hypernets.push(newSplit[0])
            ipParts.push(newSplit[1])
        }
    })
    return {
        hypernets,
        ipParts
    }
}

function containsAbba(s) {
    if (s.length < 4) {
        return false
    }
    var i = 0;
    while (i+3 < s.length) {
        if (isAbba(s.substr(i, 4))) {
            return true;
        }
        i++
    }
    return false
}

function isAbba(s) {
    return s.charAt(0) === s.charAt(3) && s.charAt(1) === s.charAt(2) && s.charAt(0) !== s.charAt(1);
}

function isSupportingSSL(ip) {
    var {hypernets, ipParts} = parseIp(ip)
    var allAbas = ipParts.reduce((a, b) => {
        return a.concat(getAllABAs(b))
    }, [])
    return hypernets.some(h => {
        return allAbas.some(aba => containsBAB(h, aba))
    })
}

function getAllABAs(s) {
    if (s.length < 3) {
        return []
    }

    result = []
    var i = 0
    while (i+2 < s.length) {
        var substring = s.substr(i, 3)
        if (isAba(substring)) {
            result.push(substring)
        }
        i++
    }
    return result
}

function isAba(s) {
    return s.charAt(0) === s.charAt(2) && s.charAt(0) !== s.charAt(1)
}

function containsBAB(s, aba) {
    var bab = aba.charAt(1) + aba.charAt(0) + aba.charAt(1)
    return s.includes(bab)
}

var task2Input = [
    'aba[bab]xyz',
    'xyx[xyx]xyx',
    'aaa[kek]eke',
    'zazbz[bzb]cdb',
]
console.log(input.filter(i => isSupportingSSL(i)).length)
