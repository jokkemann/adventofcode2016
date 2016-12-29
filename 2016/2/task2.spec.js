var parsePinCode = require('./task2').parsePinCode;
describe('Code finder', () => {
    it('should return 5 when given no steps', () => {
        expect(parsePinCode('')).toBe('5');
    });

    it('should return 5 if input is "U"', () => {
        expect(parsePinCode('U')).toBe('5');
    })

    it('should return 5 when given "UU"', () => {
        expect(parsePinCode('UU')).toBe('5');        
    })

    it('should return 7 when given "RR"', () => {
        expect(parsePinCode('RR')).toBe('7');        
    })

    it('should return 6 when given "DR"', () => {
        expect(parsePinCode('DR')).toBe('6');        
    })

    it('should return 56 when given "UL\nR"', () => {
        expect(parsePinCode(`UL
        R`)).toBe('56');
    });

    it('should return C when given "RRRD"', () => {
        expect(parsePinCode(`RRRD`)).toBe('C');
    });
});