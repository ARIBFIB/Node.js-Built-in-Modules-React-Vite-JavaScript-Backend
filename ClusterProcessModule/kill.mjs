import cluster from 'cluster';



export function killWorker() {
    if (cluster.isWorker) {
        cluster.worker.kill();
        return 'Worker killed.';
    }
    return 'Not a worker process.';
}