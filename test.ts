/// <reference path="typings/index.d.ts" />

//import fs = require('fs');
import * as fs from "fs";
import * as cluster from "cluster";
import * as os from "os";
let dirs = fs.readdirSync('/home');
//console.log(dirs);
//console.log(process.argv);

function createWorker(numWorkers?: number){
    if(cluster.isMaster){
        console.log('I am master');
        for (let i=0; i<os.cpus().length; i++){
            cluster.fork();    
        }
        cluster.on('exit', (worker, code, signal) => {
            console.log(worker.process); 
    });
}
    else{
        console.log('I am worker');
    }
}

function hello(age:number)
{
    let ret = () => {
        console.log('hello');    
    }
    ret();
}

let a = (x:number) => {return x + 12;}
console.log(os.networkInterfaces()); 
       
//createWorker()

/*
(main = () => {
  var cluster = require('cluster'),
      fs      = require('fs')
  if (cluster.isMaster) {
    (check = () => {
      var mand = 'Usage: node thisScript inputDir outputDir ',
          opt  = '[optional: numberOfWorkerProcesses; default: 
numberOfCpuCores]'
      if (process.argv.length < 4) {
        console.log(mand + opt)
        process.exit(1)
      }
    })();
    (schedule = () => {
      var ind        = process.argv[2],
          files      = fs.readdirSync(ind),
          forkWorker = () => {
            if (files.length > 0) {
              var params = {
                ind : ind,
                outd: process.argv[3],
                file: files.shift()
              }
              cluster.fork(params)
            }
          },
          os         = require('os'),
          cores      = os.cpus().length,
          workers    = process.argv[4]
      for (var i = 0; i < (workers || cores); i++) forkWorker()
      cluster.on('exit', () => { forkWorker() })
    })()
  } else {
    (work = () => {
      var zlib       = require('zlib'),
          csv        = require('csv'),
          file       = process.env.file,
          ins        = fs.createReadStream(process.env.ind + '/' + file),
          gunzip     = zlib.createGunzip(),
          parse      = csv.parse(),
          transform  = csv.transform((rdata) => { return rdata.map((v) => { 
return v * 10 }) }),
          stringify  = csv.stringify(),
          gzip       = zlib.createGzip(),
          out        = fs.createWriteStream(process.env.outd + '/' + file),
          disconnect = () => { process.disconnect() }
      ins
        .pipe(gunzip)
        .pipe(parse)
        .pipe(transform)
        .pipe(stringify)
        .pipe(gzip)
        .pipe(out)
        .on('finish', disconnect)
    })()
  }
})()
*/