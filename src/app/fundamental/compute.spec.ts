import { compute } from "./compute";

describe('compute', () => { // suite definition
    // spec
    it('return 0 if input is negative', () => {
        // given
        const expected = 0;
        const input = -1

        //when
        const actual = compute(input);

        //then
        expect(actual).toBe(expected);
    })

    it('return the number plus 1 if input is greater than or equal to 0', () => {
        // given
        const expected1 = 1;
        const expected2 = 2;
        const input1 = 0;
        const input2 = 1;
        
        // given 
        const actual1 = compute(input1);
        const actual2 = compute(input2);

        //then
        expect(expected1).toBe(actual1);
        expect(expected2).toBe(actual2);
    })

})  