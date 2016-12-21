import { parseString } from './helpers';

function move(point, direction) {
    switch (direction) {
        case 0:
        point[1]++;
        break;
        case 1:
        point[0]++;
        break;
        case 2:
        point[1]++;
        break;
        case 3:
        point[0]++;
        break;
    }

    console.log('direction', direction);
    console.log('point', point);

    return point;
}

function calcDistanceToFirstDuplicate(inputString : string) {
    var instructions = inputString.split(', ');
    let point = [0, 0];
    let visitedPoints = [];
    let direction = 0;
    for (let c = 0; c < instructions.length; c++) {
        let i = instructions[c];
        let movement = parseString(i);

        // turn
        if (movement.dir === 'R') {
            direction++;
        }
        else {
            direction--;
        }
        if (direction < 0) {
            direction = 3;
        }
        else if (direction === 4) {
            direction = 0;
        }

        // move
        for (let i = 1; i <= movement.length; i++) {
            move(point, direction);
            // check if we already been here
            let found = visitedPoints.filter(p => {
                return p[0] === point[0] && p[1] === point[1];
            });

            console.log('current point', point);

            if (found.length) {
                return Math.abs(point[0]) + Math.abs(point[1]);
            }

            console.log('visited before', visitedPoints);
            visitedPoints.push(point.slice());
            console.log('visited after', visitedPoints);
            console.log()
        }
    }
    return 0;
}

const input = 'R2, L3, R2, R4, L2, L1, R2, R4, R1, L4, L5, R5, R5, R2, R2, R1, L2, L3, L2, L1, R3, L5, R187, R1, R4, L1, R5, L3, L4, R50, L4, R2, R70, L3, L2, R4, R3, R194, L3, L4, L4, L3, L4, R4, R5, L1, L5, L4, R1, L2, R4, L5, L3, R4, L5, L5, R5, R3, R5, L2, L4, R4, L1, R3, R1, L1, L2, R2, R2, L3, R3, R2, R5, R2, R5, L3, R2, L5, R1, R2, R2, L4, L5, L1, L4, R4, R3, R1, R2, L1, L2, R4, R5, L2, R3, L4, L5, L5, L4, R4, L2, R1, R1, L2, L3, L2, R2, L4, R3, R2, L1, L3, L2, L4, L4, R2, L3, L3, R2, L4, L3, R4, R3, L2, L1, L4, R4, R2, L4, L4, L5, L1, R2, L5, L2, L3, R2, L2';

console.log("first hit is located at the distance of", calcDistanceToFirstDuplicate(input));

export { calcDistanceToFirstDuplicate };