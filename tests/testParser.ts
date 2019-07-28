import { expect } from 'chai';
import { TestUtils } from './testUtils';
import { ParserHelper } from '../src/helpers/parser'
import { Bitmap } from '../src/models/bitmap';

describe("The parser", () => {
    it("should properly parse the input of a bitmap", () => {
        const expectedBitmap = TestUtils.createDummyBitmap(3, (i, j) => {return i == j})

        const bitmapInput: string[] = [
            "3 3",
            "100",
            "010",
            "001"
        ]

        const bitmap = ParserHelper.ParseBitmap(bitmapInput)
        expect(TestUtils.compareBitmaps(bitmap, expectedBitmap)).to.be.equal(true)
    })

    it("should properly parse a input", () => {
        const expectedBitmapList: Bitmap[] = [
            TestUtils.createDummyBitmap(3, (i, j) => {return i == j}),
            TestUtils.createDummyBitmap(5, (i, _) => {return i == 4})
        ]

        const input: string = `2
3 3
100
010
001

5 5
00001
00001
00001
00001
00001
`

        const bitmapList: Bitmap[] = ParserHelper.ParseInput(input)
        for (let i = 0; i < bitmapList.length; i++) {
            expect(TestUtils.compareBitmaps(bitmapList[i], expectedBitmapList[i])).to.be.equal(true)
        }
    })
})