var mem = require('../util/mem.js');

async function b() {
    let code = process.argv.slice(2)[0]
    let b = await mem.get('access_token' + code)
    console.log(b,'------------test')
}
b()