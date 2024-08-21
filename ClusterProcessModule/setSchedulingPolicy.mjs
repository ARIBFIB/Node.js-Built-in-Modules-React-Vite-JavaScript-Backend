import cluster from 'cluster'


export function setSchedulingPolicy(policy) {
    cluster.schedulingPolicy = policy;
    return `Scheduling policy set to ${policy}.`;
}