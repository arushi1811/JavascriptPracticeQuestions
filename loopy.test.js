const { expect } = require('@jest/globals')
const {multiplesOfThree} = require('./loopy')

test('Empty array is empty', () => {
    expect(multiplesOfThree([])).toEqual([])
})

test('Only odd number array', () => {
    const arrayToTest = [1,3,5]
    expect(multiplesOfThree(arrayToTest)).toEqual(["foo", "foo", "foo" ])
})

test('Mixed array', () => {
    const arrayToTest = [1,2,3,4,5,6,7]
    expect(multiplesOfThree(arrayToTest)).toEqual(["foo",2,"foo",4,"foo",6,"foo"])
})

test('Unordered mixed array', () => {
    const arrayToTest = [4,3,6,1,7,8,2]
    expect(multiplesOfThree(arrayToTest)).toEqual([4,"foo",6,"foo","foo",8,2])
})
