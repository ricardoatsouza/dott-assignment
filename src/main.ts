import { ParserHelper } from "./helpers/parser";
import { BitmapHelpers } from "./helpers/bitmapHelper";

/**
 * Parsers the input according to the given specification.
 * It generates a set of bitmaps from the input, and creates an matrix of distances in the output
 */
process.stdin.on("readable", () => {
    let chunk: string | Buffer

    // Use a loop to make sure we read all available data.
    let strBuffer: string = ""
    while ((chunk = process.stdin.read()) !== null) {
        strBuffer = strBuffer.concat(chunk.toString())
    }

    const bitmaps = ParserHelper.ParseInput(strBuffer)
    bitmaps.forEach((b) => {
        
        for (let i = 0; i < b.getHeight(); i++) {
            for (let j = 0; j < b.getWidth(); j++) {
                const p = b.getPixel(j, i)
                const dn = BitmapHelpers.findDistanceToNearestWhitePixel(b, p)
                process.stdout.write(`${dn} `)
            }
            process.stdout.write(`\n`) 
        }
        process.stdout.write(`\n`)
    })
})