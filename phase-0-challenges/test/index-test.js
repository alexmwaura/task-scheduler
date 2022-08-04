const { reverseArray } = require("../index");

describe('Reverse Array', () => {
  describe('Array',  () => {
    it('returns [9,8,6,5]',async () => {
    await  expect(reverseArray([5,9,8,6])).toEqual([9,8,6,5])
    })
  })
})
