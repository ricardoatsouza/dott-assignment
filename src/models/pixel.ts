/*******************************************************************************
 * This class represents a pixel object
 *******************************************************************************/
export class Pixel {
    x: number
    y: number
    value: number

    constructor(x: number, y: number, value: number) {
        this.x = x
        this.y = y
        this.value = value
    }
}