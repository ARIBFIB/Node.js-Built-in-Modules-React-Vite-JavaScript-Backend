import cluster from 'cluster'




export function sendMessageToMaster(message) {
    if (cluster.isWorker) {
        cluster.worker.send(message);
        return `Message sent to master: ${message}`;
    }
    return 'Not a worker process.';
}