import cluster from 'cluster'


export function getWorkerProcess() {
    return cluster.isWorker ? cluster.worker.process : 'Not a worker process.';
}