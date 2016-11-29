const path = require('path')
const glob = require('glob')
const Config = require('vpm-config')

class Getapp {
    constructor(options) {
        this.options = options || {}
        this.config = new Config
        this.config.init(this.options)
    }

    get(name) {
        try{
            return require(path.join(this.options.cwd, name))
        }
        catch(e){
            throw e
        }
    }

    getAll() {
        let apps = []
        let opt = { cwd: this.options.cwd }
        return new Promise((res, rej) =>
            glob('*/', opt, (err, arr) =>
                err ?
                    rej(err):
                    res(arr.map(name => this.get(name)))
            )
        )
    }
}

let getapp = new Getapp;
getapp.Getapp = Getapp;
module.exports = getapp;
