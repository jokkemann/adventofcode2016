describe('Blockfinder', () => {
    var calcDistanceToFirstDuplicate = require('./task2').calcDistanceToFirstDuplicate;

    it('should return 4 when input is "R8, R4, R4, R8', () => {
        expect(calcDistanceToFirstDuplicate('R8, R4, R4, R4')).toBe(4);
    });

    it('should return 0 when input is "R4, R4, R4, R8', () => {
        expect(calcDistanceToFirstDuplicate("R4, R4, R4, R8")).toBe(0);
    });

    it('should return 3 when input is "R4, L3, L6, R2, R2, R8', () => {
        expect(calcDistanceToFirstDuplicate('R4, L3, L6, R2, R2, R8')).toBe(3);
    });

});