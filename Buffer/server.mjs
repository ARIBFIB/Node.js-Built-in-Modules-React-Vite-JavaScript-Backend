import http from 'http'
import {WritingButter} from './WritingButter.mjs'
import {ReadingFromBuffer} from './ReadingFromBuffer.mjs'
import {SlicingBuffer} from './SlicingBuffer.mjs'
import {ConcatinatingBuffer} from './ConcatinatingBuffer.mjs'

//Create a server
const srever = http.createServer((req, res) => {

    
    const bufferWritingOutput = WritingButter()
    const bufferReadingOutput = ReadingFromBuffer()
    const bufferSlicingOutput = SlicingBuffer()
    const bufferConcatinatingOutput = ConcatinatingBuffer()

    //send the complete output in the client backend
    res.writeHead(200, {'Content-Type': 'text/plain'})
    res.end(
        `Buffer Outputs:\n${bufferWritingOutput}
        \n Buffer ConcatinateBuffer Output: ${bufferConcatinatingOutput}
        \n Buffer BufferSlicing Output: ${bufferSlicingOutput}
        \n Buffer bufferReadingOutput Output: ${bufferReadingOutput}
        
        `
    )
})

//port 3000
srever.listen(3000, () => {
    console.log('Server is running at http://localhost:3000');
})