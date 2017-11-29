const bitcoin = require('bitcoinjs-lib')

const fromBase58 = ( list ) => {
    return list.map(xpub => bitcoin.HDNode.fromBase58(xpub))
}

const derive = (memorize, maxlevel, pathlist, nodes) => {
    const key = pathlist.join('/')
    const cache = memorize.get(key)
    if(cache){
        return cache
    }
    const n = pathlist[ pathlist.length - 1 ]
    const derive_nodes = nodes.map( node => node.derive(n) )
    if(pathlist.length <= maxlevel){
        memorize.set(key, derive_nodes)
    }
    return derive_nodes
}

class Memorize{
    constructor(){
        this.memo = {}
    }
    set(key, val){
        this.memo[key] = val
    }
    get(key){
        return this.memo[key] 
    }
}

class DeriveMemorizer{
    constructor(xpubs, maxlevel){
        this.maxlevel = maxlevel
        this.nodes = fromBase58(xpubs)
        this.memorize = new Memorize()
    }
    derive_(path){
        let cache = this.memorize.get(path)
        if(cache){
            return cache
        }
        const pathlist = path.split('/')
        let m = this.nodes
        const p = [] 
        pathlist.forEach( n => {
            p.push(parseInt(n))
            m = derive(this.memorize, this.maxlevel, p, m)
        })
        return m
    }
    derive(path){
        const nodes = this.derive_(path)
        return nodes
                .map(node => node.getPublicKeyBuffer() )
                .sort((a, b) => a.compare(b))
    }
}

module.exports = DeriveMemorizer
