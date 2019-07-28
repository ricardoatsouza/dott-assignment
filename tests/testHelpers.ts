import { expect } from 'chai';
import { Pixel } from '../src/models/pixel'
import { BitmapHelpers } from '../src/helpers/bitmapHelper'
import { TestUtils } from './testUtils';

describe("Bitmap helpers", () => {
    it("should properly calculate distance in between two pixels", () => {
        const p1 = new Pixel(10, 10, 0)
        const p2 = new Pixel(10, 1, 0)

        const e = Math.abs(p1.x - p2.x) + Math.abs(p1.y - p2.y)

        expect(e).to.be.equal(BitmapHelpers.calculateDistance(p1, p2))
    })

    it("should properly find the closest white pixel from a single bitmap", () => {
        // Create dummy bitmap
        const b = TestUtils.createDummyBitmap(3, (i, j) => {return i == 2 && j == 2})

        // Run tests from different positions in the dummy bitmap
        expect(BitmapHelpers.findDistanceToNearestWhitePixel(b, new Pixel(0, 0, 0))).to.be.equal(4)
        expect(BitmapHelpers.findDistanceToNearestWhitePixel(b, new Pixel(1, 0, 0))).to.be.equal(3)
        expect(BitmapHelpers.findDistanceToNearestWhitePixel(b, new Pixel(2, 0, 0))).to.be.equal(2)
        expect(BitmapHelpers.findDistanceToNearestWhitePixel(b, new Pixel(0, 1, 0))).to.be.equal(3)
        expect(BitmapHelpers.findDistanceToNearestWhitePixel(b, new Pixel(0, 2, 0))).to.be.equal(2)
        expect(BitmapHelpers.findDistanceToNearestWhitePixel(b, new Pixel(1, 1, 0))).to.be.equal(2)
        expect(BitmapHelpers.findDistanceToNearestWhitePixel(b, new Pixel(1, 2, 0))).to.be.equal(1)
        expect(BitmapHelpers.findDistanceToNearestWhitePixel(b, new Pixel(2, 2, 0))).to.be.equal(0)
    })
})