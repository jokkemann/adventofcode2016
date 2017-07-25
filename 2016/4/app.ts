// const input = `aaaaa-bbb-z-y-x-123[abxyz]`
// const input2 = `totally-real-room-200[decoy]`
// let inputs = [
//     input,
//     input2,
//     'a-b-c-d-e-f-g-h-987[abcde]',
//     'not-a-real-room-404[oarel]'
// ];
let fs = require('fs')
let inputs = fs.readFileSync('4/input.txt').toString().split('\n')



var sum = inputs.reduce((a, i) => {
    return a + getSectionIdIfRealRoom(i);
}, 0)
console.log('result:', sum);


function getSectionIdIfRealRoom(input) : number {
    // console.log(input);
    if (!input) {
        return 0;
    }
    let strings = input.split('-');
    let lastPart = strings.pop();

    let matches = lastPart.match(/(\d+)\[(\w+)\]/);

    let sectionId = parseInt(matches[1]);
    let checksum = matches[2];

    // console.log(sectionId, verifyChecksum(strings, checksum));

    return verifyChecksum(strings, checksum) ? sectionId : 0;
}

function verifyChecksum(input, checksum) {
    // console.log(input);
    let chars = input.join('');
    let o = {};
    for (var i = 0; i < chars.length; i++) {
        let e = chars[i];
        o[e] = (o[e] || 0)+1;
    }

    let uniqueCharsArr = Object.keys(o);
    uniqueCharsArr.sort(function (a, b) {
        if (o[b] === o[a])
            return a.charCodeAt(0) - b.charCodeAt(0);
        return o[b] - o[a];
    });

    let uniqueChars = uniqueCharsArr.join('').substr(0, 5);
    // console.log('result', uniqueChars)

    return uniqueChars === checksum;
}