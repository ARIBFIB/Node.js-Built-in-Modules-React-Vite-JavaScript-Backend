import cluster from 'cluster';


export function forkWorker() {

    if (cluster.isMaster){
        const worker = cluster.fork()
        return `Worker ${worker.process.pid} has been forked`
        // return worker
    }
    else{
        return `This process with the worker ${worker.pid}`
        
    }


}
