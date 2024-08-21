import { clusterExample } from './clusterExample.mjs'
import http from 'http'
import { disconnectAllWorkers } from './disconnectAllWorkers.mjs'
import { wasExitedAfterDisconnect } from './wasExitedAfterDisconnect.mjs'
import { forkWorker } from './fork.mjs'
import { getWorkerId } from './id.mjs'
import { isWorkerConnected } from './isConnected.mjs'
import { isWorkerDead } from './isDead.mjs'
import { killWorker } from './kill.mjs'
import { isMasterProcess } from './isMaster.mjs'
import { getWorkerProcess } from './process.mjs'
import { getSchedulingPolicy } from './schedulingPolicy.mjs'
import { setSchedulingPolicy } from './setSchedulingPolicy.mjs'
import { sendMessageToMaster } from './send.mjs'
import { getClusterSettings } from './settings.mjs'
import { configureMaster } from './setupMaster..mjs'
import { getCurrentWorker } from './worker.mjs'
import { getAllWorkers } from './workers.mjs'

//Create a server
const srever = http.createServer((req, res) => {

    const check = clusterExample()
    const disconnectAllWorkersOutput = disconnectAllWorkers()
    const wasExitedAfterDisconnectOutput = wasExitedAfterDisconnect()
    const forkWorkerOutput = forkWorker()
    const getWorkerIdOutput = getWorkerId()
    const isWorkerConnectedOutput = isWorkerConnected()
    const isWorkerDeadOutput = isWorkerDead()
    const isMasterProcessOutput = isMasterProcess()
    const killWorkerOutput = killWorker()
    const getWorkerProcessOutput = getWorkerProcess()
    const getSchedulingPolicyOutput = getSchedulingPolicy()
    const setSchedulingPolicyOutput = setSchedulingPolicy()
    const sendMessageToMasterOutput = sendMessageToMaster()
    const getClusterSettingsOutput = getClusterSettings()
    const configureMasterOutput = configureMaster()
    const getCurrentWorkerOutput = getCurrentWorker()
    const getAllWorkersOutput = getAllWorkers()


    res.writeHead(200, {'Content-Type': 'text/plain'})
    res.end(`The Result Demo: ${check}
        The Result of disconnectAllWorkersOutput: ${disconnectAllWorkersOutput}
        The Result of wasExitedAfterDisconnectOutput: ${wasExitedAfterDisconnectOutput}
        The Result of forkWorkerOutput: ${forkWorkerOutput}
        The Result of getWorkerIdOutput: ${getWorkerIdOutput}
        The Result of isWorkerConnectedOutput: ${isWorkerConnectedOutput}
        The Result of isWorkerDeadOutput: ${isWorkerDeadOutput}
        The Result of isMasterProcessOutput: ${isMasterProcessOutput}
        The Result of killWorkerOutput: ${killWorkerOutput}
        The Result of getWorkerProcessOutput: ${getWorkerProcessOutput}
        The Result of getSchedulingPolicyOutput: ${getSchedulingPolicyOutput}
        The Result of setSchedulingPolicyOutput: ${setSchedulingPolicyOutput}
        The Result of sendMessageToMasterOutput: ${sendMessageToMasterOutput}
        The Result of getClusterSettingsOutput: ${getClusterSettingsOutput}
        The Result of configureMasterOutput: ${configureMasterOutput}
        The Result of getCurrentWorkerOutput: ${getCurrentWorkerOutput}
        The Result of getAllWorkersOutput: ${getAllWorkersOutput}





        `)

    disconnectAllWorkers().then((message) => {
        console.log(`The Result of disconnectAllWorkersOutput: ${message}`);
    });
        

})

//port 3000
srever.listen(3000, () => {
    console.log('Server is running at http://localhost:3000');
})