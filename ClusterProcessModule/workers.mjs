import cluster from 'cluster'



export function getAllWorkers() {
    return cluster.workers;
}