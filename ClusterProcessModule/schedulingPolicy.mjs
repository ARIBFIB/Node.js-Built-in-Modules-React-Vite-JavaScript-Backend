import cluster from 'cluster'


export function getSchedulingPolicy() {
    return cluster.schedulingPolicy;
}