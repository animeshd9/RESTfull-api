const crypto = require('crypto')
const key1 = crypto.randomBytes(32).toString('hex')
const key2= crypto.randomBytes(32).toString('hex')

console.table({key1,key2})

const b = require('bcrypt')

salt = async () => {
    res = await b.genSalt(10)
    // console.log(res)
    const hash = await b.hash("1123533",salt)
    // console.log(hash)
    return hash
}
// console.log(salt)
salt()