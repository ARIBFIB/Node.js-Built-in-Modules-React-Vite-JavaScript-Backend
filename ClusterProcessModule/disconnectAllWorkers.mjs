import cluster from 'cluster';

export function disconnectAllWorkers() {
    if (cluster.isMaster) {
        console.log('Disconnecting all workers...');
        return 
        cluster.disconnect(() => {
            console.log('All workers have been disconnected.');
            return 'All workers have been disconnected.';
        });
    } else {
        console.log('This function can only be called from the master process.');
        return 'This function can only be called from the master process.'
    }
}
