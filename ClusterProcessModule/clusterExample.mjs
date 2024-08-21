import cluster from 'cluster';

export function clusterExample() {

    if (cluster.isWorker) {
      console.log('I am a worker');
      return 'Worker Process';
    } else {
      console.log('I am a master');
      cluster.fork();
      cluster.fork();
      return 'Master Process';
    }
}
