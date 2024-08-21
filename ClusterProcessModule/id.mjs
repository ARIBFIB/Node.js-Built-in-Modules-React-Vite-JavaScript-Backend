import cluster from 'cluster';

export function getWorkerId() {
    if (cluster.isWorker) {
        return `Worker ID: ${cluster.worker.id}`;
    } else {
        return 'This process is the master and does not have a worker ID.';
    }
}
