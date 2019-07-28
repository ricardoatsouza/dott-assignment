import { Pixel } from "../models/pixel";
import { Bitmap } from "../models/bitmap";

/*******************************************************************************
 * This object contains utilities functions related to bitmaps
 *******************************************************************************/
export class BitmapHelpers {

    /**
     * Find the distance from a given pixel 'p', in the bitmap 'b', to the nearest white pixel.
     * @param b The bitmap to which p belongs
     * @param p The pixel
     * @returns A number of the distance in between 'p' and the nearest white pixel
     */
    static findDistanceToNearestWhitePixel(b: Bitmap, p: Pixel): number {
        // If p is white (p.value == 1), then its nearest white pixel is itself (distance 0)
        if (p.value == 1) {
            return 0
        }

        let min: number = Number.MAX_SAFE_INTEGER
        for (const wp of b.getWhitePixelList()) {
            min = Math.min(min, BitmapHelpers.calculateDistance(p, wp))
        }

        return min
    }

    /**
     * Calculates the distance in between two pixels.
     * @param p1 Pixel 1
     * @param p2 Pixel 2
     * @returns Returns the distance in between p1 and p2 according to the formula d = |p1.x - p2.x| + |p1.y - p2.y|
     */
    static calculateDistance(p1: Pixel, p2: Pixel): number {
        return Math.abs(p1.x - p2.x) + Math.abs(p1.y - p2.y)
    }

}