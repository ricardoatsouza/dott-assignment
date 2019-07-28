import { Pixel } from "../models/pixel";
import { Bitmap } from "../models/bitmap";

/*******************************************************************************
 * This object contains utilities functions related to parsing the stdin
 *******************************************************************************/
export class ParserHelper {
    static ParseInput(strBuffer: string): Bitmap[] {
        const bitmapList: Bitmap[] = [];
        const splitStrBuffer = strBuffer.split("\n")

        if (strBuffer.length == 0 || splitStrBuffer.length == 0) {
            return bitmapList
        }

        const numberOfTests = parseInt(splitStrBuffer[0].trim())
        if (!ParserHelper.isValidNumber(numberOfTests)) {
            throw new Error(`Number of tests is not valid: ${numberOfTests}`)
        }

        let strTestInput: string[] = []
        let t = 0
        const startLine = 1
        for (let i = startLine; i < splitStrBuffer.length && t < numberOfTests; i++) {
            if (splitStrBuffer[i].trim() == "") {
                bitmapList.push( ParserHelper.ParseBitmap(strTestInput) )
                t++
                strTestInput = []
            } else {
                strTestInput.push(splitStrBuffer[i])
            }
        }
        
        return bitmapList
    }

    /**
     * Parses a portion from the input that is enough to create and return a bitmap object
     * @param strInput The input on the following format:
     * <height> <width>
     * <0|1><0|1><0|1><0|1><0|1><0|1> ... width times
     * <0|1><0|1><0|1><0|1><0|1><0|1> ... width times
     * ...
     * height times
     * 
     * Each number is 0 or 1
     */
    static ParseBitmap(strInput: string[]): Bitmap {
        // Obtain width and height of the bitmap
        const firstLine = strInput[0].split(" ")
        const height = parseInt(firstLine[0].trim())
        const width = parseInt(firstLine[1].trim())
        if (!ParserHelper.isValidNumber(height) || height > 182) { // Number has to be small than 182, as defined in the assignment
            throw new Error(`Height number '${height}' is invalid. Has to be a number 1 <= n <= 182.`)
        }
        if (!ParserHelper.isValidNumber(width) || width > 182) { // Number has to be small than 182, as defined in the assignment
            throw new Error(`Height number '${width}' is invalid. Has to be a number 1 <= n <= 182.`)
        }

        // Obtain bitmap information
        const startLine = 1 // Start line from the strInput
        const b = new Bitmap(width, height)
        for (let i = 0; i < height; i++) {
            for (let j = 0; j < width; j++) {
                const v = parseInt(strInput[startLine + i][j])
                if (!ParserHelper.isValidNumber || v > 1) { // value has to be number, and be either 0 or 1
                    throw new Error(`Value number '${v}' (line ${i}, col ${j}) is invalid. Has to be a number of value 0 or 1`)
                }

                const p = new Pixel(j, i, v)
                b.addPixel(p)
            }
        }

        return b
    }

    /**
     * Validates if the number is a valid number. A valid number is:
     *  - Different from undefined
     *  - Different from NaN
     *  - Bigger than 0 (the input doesn't has negative numbers)
     * @param n The number
     * @returns true in case the number is valid; false otherwise
     */
    private static isValidNumber(n: number): boolean {
        return !(n == undefined || isNaN(n) || n < 0)
    }
}