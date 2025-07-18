// function ObjStorageFunc(){

//     let _storage = {}

//     this.addValue = function(key, value){
//         _storage[key] = value
//     }
//     this.getValue = function(key){
//         return _storage[key]
//     }
//     this.deleteValue = function(key){
//         return (key in _storage) ? delete _storage[key] : false
//         // return _storage[key] ? delete _storage[key] : false
//     }
//     this.getKeys = function(){
//         return Object.keys(_storage)
//     }

// }

class ObjStorageClass {
    storage = {}; // Публично доступный объект хранящий значения

    addValue(key, value) {
        this.storage[key] = value;
    }
    getValue(key) {
        return this.storage[key];
    }
    deleteValue(key) {
        if (key in this.storage) {
            // по вашей рекомендации тут я использовал in вместо storage[key]
            return delete this.storage[key];
        } else {
            return false;
        }
    }
    getKeys() {
        return Object.keys(this.storage);
    }
}
