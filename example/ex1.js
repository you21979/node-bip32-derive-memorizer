const DeriveMemorizer = require('..')
const bitcoin = require('bitcoinjs-lib')
const fs = require('fs')
const list = JSON.parse(fs.readFileSync('../fixture/testxpub.json', 'utf8'))

const x = new DeriveMemorizer(list, 0)
console.time("a")
x.derive("0/0/0/0")
x.derive("0/0/1/0")
x.derive("0/0/2/0")
x.derive("0/0/3/0")
x.derive("0/0/4/0")
x.derive("0/0/5/0")
x.derive("0/0/6/0")
console.timeEnd("a")

const x1 = new DeriveMemorizer(list, 5)
console.time("aa")
x1.derive("0/0/0/0")
x1.derive("0/0/1/0")
x1.derive("0/0/2/0")
x1.derive("0/0/3/0")
x1.derive("0/0/4/0")
x1.derive("0/0/5/0")
x1.derive("0/0/6/0")
console.timeEnd("aa")


console.time("aaa")
x1.derive("0/0/0/0")
x1.derive("0/0/1/0")
x1.derive("0/0/2/0")
x1.derive("0/0/3/0")
x1.derive("0/0/4/0")
x1.derive("0/0/5/0")
x1.derive("0/0/6/0")
console.timeEnd("aaa")
