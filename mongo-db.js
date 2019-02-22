
const {log} = require('./index');

const logDbDeleteMany = result => log( 'deleteMany()', 'result:', result.result.ok, 'count:', result.result.n );
const logDbInsertMany = result => log( 'insertMandy()', 'result:', result.result.ok, 'count:', result.insertedCount );

module.exports.logDbDeleteMany = logDbDeleteMany;
module.exports.logDbInsertMany = logDbInsertMany;