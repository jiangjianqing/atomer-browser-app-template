/**
 * Created by jjq on 6/2/17.
 */

let debug = require('debug');
debug.enable("*");

module.exports = {
    'generatePackage' : require('./generate-package'),
    'generateTravis' : require('./generate-travis'),
    'copyFiles' : require('./copy-files')
};