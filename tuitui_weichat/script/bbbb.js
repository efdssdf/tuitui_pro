var mem = require('../util/mem.js');

function b() {
    let code = process.argv.slice(2)[0]
    let b = mem.get('access_token' + code)
    console.log(b,'------------test')
}
b()