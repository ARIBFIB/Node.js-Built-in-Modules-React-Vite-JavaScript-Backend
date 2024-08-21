import cluster from 'cluster';
import os from 'os';
import http from 'http';
import { clusterHandler } from './clusterHandler.mjs';

if (cluster.isMaster) {
    const numCPUs = os.cpus().length;
    console.log(`Master ${process.pid} is running`);

    for (let i = 0; i < numCPUs; i++) {
        cluster.fork();
    }

    cluster.on('exit', (worker, code, signal) => {
        console.log(`Worker ${worker.process.pid} died`);
    });
} else {
    const server = http.createServer((req, res) => {
        const result = clusterHandler();
        res.writeHead(200, {
            'Content-Type': 'text/plain',
            'Access-Control-Allow-Origin': '*',
        });
        
        res.end(`Worker ${process.pid}: ${result}`);
    });

    server.listen(3000, () => {
        console.log(`Worker ${process.pid} started`);
    });
}
