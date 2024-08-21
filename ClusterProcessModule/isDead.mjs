import cluster from 'cluster';



export function isWorkerDead() {
    return cluster.isWorker ? cluster.worker.isDead() : 'Not a worker process.';
}