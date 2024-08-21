export function WritingButter() {
    const buffer = Buffer.alloc(256)
    const length = buffer.write('Hello World')

    return `Written ${length} bytes: ${buffer.toString('utf-8', 0, length)}`
}

