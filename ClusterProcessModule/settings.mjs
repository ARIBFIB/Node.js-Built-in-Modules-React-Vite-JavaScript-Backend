
import cluster from 'cluster'


export function getClusterSettings() {
    return cluster.settings;
}