const {createHmac} = require("node:crypto");

// crypto.pbkdf2Sync

const secret = 'abcdefg';
const hash = createHmac('sha256', secret)
               .update('I love cupcakes')
               .digest('hex');
console.log(hash);
