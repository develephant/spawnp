
const spawn = require('child_process').spawn

function runCmd(cmd, args=[], wrk_dir) {
  return new Promise(function(resolve, reject) {
    let cmdp = spawn(cmd, args, {cwd:wrk_dir,encoding:'utf8',stdio:'inherit'})
    cmdp.on('error', (err => reject(err)))
    cmdp.on('close', (res => resolve(res)))
  })
}

module.exports = runCmd
