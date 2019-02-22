'use strict';

const {head, pipe} = require('ramda');

const log = console.log.bind(console);
const logError = console.error.bind(console);
const stringify = v => JSON.stringify(v, null, 2);
const logStringify = pipe( stringify, log ); //v => log(stringify(v));
const logStringifyHead = pipe( head, logStringify); // logStringify(head(v))


module.exports.log = log;
module.exports.logError = logError;

module.exports.stringify = stringify;
module.exports.logStringify = logStringify;
module.exports.logStringifyHead = logStringifyHead;

