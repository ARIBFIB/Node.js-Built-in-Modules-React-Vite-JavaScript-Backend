import cluster from 'cluster'


export function isMasterProcess() {
    return cluster.isMaster;
}