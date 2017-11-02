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


task1(input)

function task1(input) {

    var table = []
    
    input.forEach(s => {
        for(var i = 0; i < s.length; i++) {
            var char = s.charAt(i)
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
        }
    })
    var result = table.reduce((r, ti) => {
        var mostOccuring = ti.reduce((c, o) => {
            if (o.nbr > c.nbr) {
                return o
            } else {
                return c
            }
        });
        return r + mostOccuring.char
    }, '')
    console.log(result)
}