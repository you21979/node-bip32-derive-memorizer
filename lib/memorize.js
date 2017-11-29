'use strict'

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

module.exports = Memorize
