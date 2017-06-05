import isPossibleTriangle from './task1'

test('Triangle tester', () => {
    it('should handle negatives', () => {
        expect(isPossibleTriangle("5 10 25")).toBe(false)
    })
    it('should handle positives', () => {
        expect(isPossibleTriangle("3 4 5")).toBe(true)
    })
})
