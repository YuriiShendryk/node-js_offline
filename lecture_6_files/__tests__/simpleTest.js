/* eslint-disable no-undef */
const addTwoNumbers = (a, b) => {
    if (!a || !b) { 
        throw new Error('Invalid params');
    }
  return  a + b;
};

describe('Addition service test', () => { 
    test('Add two valid numbers', () => { 
        const firstNumber = 1;
        const secondNumber = 2;
        const addTwoNumbersResult = addTwoNumbers(firstNumber, secondNumber);
        expect(addTwoNumbersResult).toEqual(firstNumber + secondNumber);
    })


     test('Add two valid numbers', () => { 
        const firstNumber = -10;
        const secondNumber = 2;
        const addTwoNumbersResult = addTwoNumbers(firstNumber, secondNumber);
        expect(addTwoNumbersResult).toEqual(firstNumber + secondNumber);
     })
    
    
     test('Invalid results', () => { 
        const firstNumber = 2;
        const secondNumber = 2;
        const addTwoNumbersResult = addTwoNumbers(firstNumber, secondNumber);
        expect(addTwoNumbersResult).not.toEqual(5);
     })
    
    
    test('Return error', () => { 
        const secondNumber = 2;
        const addTwoNumbersResult = () => addTwoNumbers(secondNumber);
        expect(addTwoNumbersResult).toThrow('Invalid params');
    })
});