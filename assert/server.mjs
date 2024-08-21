import {check} from './assert.mjs'
import { sum } from './sum.mjs'
import http from 'http'

//Create a server
const srever = http.createServer((req, res) => {

    const checkResult = check()
    const checksum = sum()

    res.writeHead(200, {'Content-Type': 'text/plain'})
    res.end(`The sum of 1 and 2 is : ${checkResult}`)
    res.end(`${checksum}`)

})

//port 3000
srever.listen(3000, () => {
    console.log('Server is running at http://localhost:3000');
})