
import cluster from 'cluster'


export function getCurrentWorker() {
    return cluster.worker || 'Not a worker process.';
}