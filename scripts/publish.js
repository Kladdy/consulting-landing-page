'use strict';
const fs = require('fs');
const upath = require('upath');
const sh = require('shelljs');

const destPathToRemove = upath.resolve(upath.dirname(__filename), '../docs');

sh.rm('-rf', `${destPathToRemove}`)

const sourcePath = upath.resolve(upath.dirname(__filename), '../dist/.');
const destPath = upath.resolve(upath.dirname(__filename), '../docs');
    
sh.cp('-R', sourcePath, destPath)

// Copy over CNAME file aswell
const sourcePathCNAME = upath.resolve(upath.dirname(__filename), '../src/CNAME');
const destPathCNAME = upath.resolve(upath.dirname(__filename), '../docs');
    
sh.cp('-R', sourcePathCNAME, destPathCNAME)