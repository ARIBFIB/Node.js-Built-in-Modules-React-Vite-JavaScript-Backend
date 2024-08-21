export function SlicingBuffer() {
    const buffer = Buffer.alloc(256);
    buffer.write('Hello World');
    const slice = buffer.slice(0, 5);
    return `Sliced Buffer: ${slice.toString()} Thank you for Watching the video`;
}