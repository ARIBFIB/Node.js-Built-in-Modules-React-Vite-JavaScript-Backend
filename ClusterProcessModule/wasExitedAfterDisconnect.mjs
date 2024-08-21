import cluster from 'cluster';

export function wasExitedAfterDisconnect(worker) {
    if (cluster.isMaster) {
        if (worker) {
            return worker.exitedAfterDisconnect;
        } else {
            console.log('Worker is undefined.');
            return false;
        }
    } else {
        console.log('This function can only be called from the master process.');
        return false;
    }
}
