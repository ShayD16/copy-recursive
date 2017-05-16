/**
 * copy.js
 * Script to recursively copy all files into one folder
 * Author: Shayne Weerakoon
 */
/*jshint esversion: 6 */
const fs = require('fs');
var SETTINGS = {
    src: "Music1",
    dest: "copied",
    deleteFolders: true,
};
var copyFolderRecursive = (path) => {
    if (fs.existsSync(path)) {
        fs.readdirSync(path).forEach((file) => {
            var curPath = path + "/" + file;
            if (fs.statSync(curPath).isDirectory()) {
                S// recurse
                copyFolderRecursive(curPath);
            } else {
                // copy file
                fs.renameSync(curPath, SETTINGS.dest + "/" + file);
            }
        });
        if (SETTINGS.deleteFolders && SETTINGS.deleteFolders === true) {
            fs.rmdirSync(path);
        }
    }
};
copyFolderRecursive(SETTINGS.src);