var mem = require('../util/mem.js');

async function a() {
    let a = await mem.get('aa')
    console.log(a)
}
a()
