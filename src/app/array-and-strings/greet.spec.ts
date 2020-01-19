import { greet } from "./greet";

function testGreetContain(input){
    const actual = greet(input)    
    expect(actual).toContain(input);
}

function testGreetDetail(expected ,input){
    const actual = greet(input);
    expect(actual).toBe(expected);
}

describe('greet', () => {
    it('should add "Welcome" before the input', ()=>{
        testGreetDetail("Welcome abc","abc");
    });

    it('should contain the input', ()=>{
        testGreetContain("abcdefg")
    });
})