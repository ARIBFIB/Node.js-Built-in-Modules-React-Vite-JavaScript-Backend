
export function ConcatinatingBuffer() {
    const buffer1 = Buffer.from('Hello, ')
    const buffer2 = Buffer.from('World!, ')

    const combinedBuffer = Buffer.concat([buffer1, buffer2]);
    const comToStringBuffer = console.log(combinedBuffer.toString())

    return `Concatenated Buffer: ${comToStringBuffer}\n`
    
}
