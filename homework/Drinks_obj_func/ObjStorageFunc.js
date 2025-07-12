function ObjStorageFunc(){

    let _storage = {}

    this.addValue = function(key, value){
        _storage[key] = value
    }
    this.getValue = function(key){
        return _storage[key]
    }
    this.deleteValue = function(key){
        return _storage[key] ? delete _storage[key] : false
    }
    this.getKeys = function(){
        return Object.keys(_storage)
    }
    
}
