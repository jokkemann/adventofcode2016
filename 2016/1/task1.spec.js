describe('BlockFinder', () => {
    var calcBlockDistance = require('./task1').calcBlockDistance;
    it('should handle empty input', () => {
        expect(calcBlockDistance('')).toBe(0);
    });

    it('should throw on unknown format', () => {
        expect(() => {
            calcBlockDistance('test')
        }).toThrowError(Error);
    });

    it('should handle single movement', () => {
        expect(calcBlockDistance('R1')).toBe(1);

        expect(calcBlockDistance('R5')).toBe(5);

        expect(calcBlockDistance('L1')).toBe(1);

        expect(calcBlockDistance('L5')).toBe(5);
    });
    
    it('should handle multiple movements', () => {
        expect(calcBlockDistance('R2, R3')).toBe(5);

        expect(calcBlockDistance('R2, R2, R2')).toBe(2);

        expect(calcBlockDistance('R5, L5, R5, R3')).toBe(12);
    });

    fit('should know when visiting same spot twice', () => {
        expect(calcBlockDistance('R8, R4, R4, R4')).toBe(4);
    })
});