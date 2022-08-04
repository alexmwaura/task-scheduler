const { expect } = require("chai");
const { reverseArray } = require("../index");

describe('Reverse Array', () => {
  describe('Array',  () => {
    it('returns reversed sorted array', async () => {
      await expect(reverseArray([5,9,8,6])).toEqual([9,8,6,5])
    })
  })
})
