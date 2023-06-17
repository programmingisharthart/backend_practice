const { log } = require('console');
const os = require('os');
const path = require('path')

// log(os)
log(path.sep)
log(path.join())
const filePath = path.join('./content', 'subfolder', 'test.txt');
//join path
const base = path.basename(filePath)
//get the base file of the path


const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt');
log(absolute)