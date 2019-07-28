import { Bitmap } from "../src/models/bitmap";
import { Pixel } from "../src/models/pixel";

export class TestUtils {
    /**
     * Creates a dummy bitmap for testing purposes
     * @param size The size of the bitmap (it will have width = height)
     * @param whiteCondition A callback frunction that, when gives positions i and j, returns true if value is supposed to be one; otherwise zero
     */
    static createDummyBitmap(size: number, whiteCondition: (i: number, j: number) => boolean): Bitmap {
        const b = new Bitmap(size, size)

        for (let i = 0; i < b.getWidth(); i++) {
            for (let j = 0; j < b.getHeight(); j++) {
                b.addPixel(new Pixel(j, i, whiteCondition(j, i) ? 1 : 0))
            }
        }

        return b
    }

    static compareBitmaps(b1: Bitmap, b2: Bitmap): boolean {
        if (b1.getWidth() != b2.getWidth()) {
            return false
        }

        if (b1.getHeight() != b2.getHeight()) {
            return false
        }

        for (let i = 0; i < b1.getWidth(); i++) {
            for (let j = 0; j < b1.getHeight(); j++) {
                const p1 = b1.getPixel(i, j)
                const p2 = b2.getPixel(i, j)

                if (p1.value != p2.value) {
                    return false
                }
            }
        }
        
        return true
    }
}