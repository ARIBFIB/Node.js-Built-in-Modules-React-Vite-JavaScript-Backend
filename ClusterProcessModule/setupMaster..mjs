
import cluster from 'cluster'


export function configureMaster(settings) {
    cluster.setupMaster(settings);
    return 'Master settings updated.';
}