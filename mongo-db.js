
const {log} = require('./index');

const logDbDeleteMany = (result, name='') => log( `deleteMany(${name})`, 'result:', result.result.ok, 'count:', result.result.n );
const logDbInsertMany = (result, name='') => log( `insertMandy(${name})`, 'result:', result.result.ok, 'count:', result.insertedCount );

module.exports.logDbDeleteMany = logDbDeleteMany;
module.exports.logDbInsertMany = logDbInsertMany;