import { Pixel } from "../models/pixel";
import { Bitmap } from "../models/bitmap";

export class BitmapHelpers {

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

    static calculateDistance(p1: Pixel, p2: Pixel): number {
        return Math.abs(p1.x - p2.x) + Math.abs(p1.y - p2.y)
    }

}