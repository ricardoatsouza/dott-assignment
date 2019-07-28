import { Pixel } from "./pixel";

interface PixelMap {
    [key: string]: Pixel
}

/*******************************************************************************
 * This class represents a bitmap object
 *******************************************************************************/
export class Bitmap {
    private width: number
    private height: number
    private bitmap: PixelMap
    private whitePixelList: Pixel[] = []

    constructor(width: number, height: number) {
        this.width = width
        this.height = height
        this.bitmap = {}
    }

    private pixelKeyFromPixel(p: Pixel): string {
        return this.pixelKey(p.x, p.y)
    }
    
    private pixelKey(x: number, y: number): string {
        return `${x}-${y}`
    }

    public addPixel(p: Pixel) {
        this.bitmap[this.pixelKeyFromPixel(p)] = p
        if (p.value == 1) {
            this.whitePixelList.push(p)
        }
    }

    public getWhitePixelList(): Pixel[] {
        return this.whitePixelList
    }
    
    public getPixel(x: number, y: number): Pixel {
        return this.bitmap[this.pixelKey(x, y)]
    }

    public getWidth(): number {
        return this.width
    }

    public getHeight(): number {
        return this.height
    }
}