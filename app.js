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
            let App = require(path.join(this.options.cwd, name))
            return new App(this.config.get('system'))
        }
        catch(e){
            throw e
        }
    }

    getAll() {
        return glob.sync('*/', {cwd: this.options.cwd}).map(name => this.get(name))
    }
}

let getapp = new Getapp;
getapp.Getapp = Getapp;
module.exports = getapp;
