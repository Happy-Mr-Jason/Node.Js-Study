/**
 * Cluster
 * A single instance of Node.js runs in a single thread. 
 * To take advantage of multi-core systems, 
 * the user will sometimes want to launch a cluster of Node.js processes to handle the load.
 * 
 * Master and Worker Process
 * 
 * Make a worker using cluster.fork() method
 * 
 * Events : fork / online / listening / disconnect / exit / message / setup
 * 
 * master send a data to worker : worker.send(data)    /  worker.on('message', ()=>{})
 * worker send a data to master : process.send(data)   /  cluster.fork().on('message', () => {})
 * 
 * Seperates External files
 * cluster.setupMaster()
 * 
 * ***pm2 Module for Clustering
 */