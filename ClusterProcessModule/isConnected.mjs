import cluster from 'cluster';


export function isWorkerConnected() {
    return cluster.isWorker ? cluster.worker.isConnected() : 'Not a worker process.';
}