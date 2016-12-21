var parsePinCode = require('./task1').parsePinCode;
describe('Code finder', () => {
    it('should return 5 when given no steps', () => {
        expect(parsePinCode('')).toBe(5);
    });

    it('should return 2 if input is "U"', () => {
        expect(parsePinCode('U')).toBe(2);
    })

    it('should return 2 when given "UU"', () => {
        expect(parsePinCode('UU')).toBe(2);        
    })

    it('should return 6 when given "RR"', () => {
        expect(parsePinCode('RR')).toBe(6);        
    })

    it('should return 9 when given "DR"', () => {
        expect(parsePinCode('DR')).toBe(9);        
    })

    it('should return 12 when given "UL\nR"', () => {
        expect(parsePinCode(`UL
        R`)).toBe(12);        
    })
});