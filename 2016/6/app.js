var input = [
    'eedadn',
    'drvtee',
    'eandsr',
    'raavrd',
    'atevrs',
    'tsrnev',
    'sdttsa',
    'rasrtv',
    'nssdts',
    'ntnada',
    'svetve',
    'tesnvt',
    'vntsnd',
    'vrdear',
    'dvrsen',
    'enarar',
]

var fs = require('fs')
input = fs.readFileSync('./input.txt').toString().split('\n')

function getTable(input) {
    var table = []
    
    input.forEach(s => {
        s.split('').forEach((char, i) => {
            if (!table[i]) {
                table[i] = [];
            }
            var occurence = table[i].find(o => o.char === char);
            if (!occurence) {
                table[i].push({
                    char: char,
                    nbr: 1
                })
            } else {
                occurence.nbr++
            }
        })
    })

    return table
}
var task1 = runReducer(input, getTable(input), (c, o) => {
    if (o.nbr > c.nbr) {
        return o
    } else {
        return c
    }
})

console.log('task 1', task1)
var task2 = runReducer(input, getTable(input), (c, o) => {
    if (o.nbr < c.nbr) {
        return o
    }
    else {
        return c
    }
})

console.log('task 2', task2)

function runReducer(input, table, reducer) {
    var result = table.reduce((r, ti) => {
        var getCharToAdd = ti.reduce(reducer);
        return r + getCharToAdd.char
    }, '')
    return result;
}