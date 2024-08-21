// ReadingFromBuffer.mjs
export function ReadingFromBuffer() {
    const buffer = Buffer.alloc(256);
    buffer.write('Hello World');
    const data = buffer.toString('utf-8', 0, buffer.length);
    return `Reading Buffer: ${data} Thank you for watching the video`;
}