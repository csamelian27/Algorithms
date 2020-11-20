class Hashtable {
    // size is prime
    constructor(size = 53) {
        this.keyMap = new Array(size);
    }

    _hash(key) {
        let total = 0;
        let WEIRD_PRIME = 31;

        for (let i = 0; i < Math.min(str.length, 100); i++) {
            let char = key[i];
            let value = char.charCodeAt(0) - 96;
            total = (total * WEIRD_PRIME + value) % this.keyMap.length;
        }
        return total;
    }

    set(key, value) {
        const index = this._hash(key);
        if (this.keyMap[index]) {
            this.keyMap[index].push(value);
        } else {
            this.keyMap[index] = [value];
        }
    }

    get(key) {
        const index = this._hash(key);
        if (this.keyMap[index].length = 1) {
            return this.keyMap[index];
        };
        return this.keyMap[index] || undefined;
    }
}

// Set / Get
// - Set:
//    1. Acceps a key and a value
//    2. Hashes the key
//    3. Stores the key/value pair in the hash table array via separate chaining
//      - Nested linked list data
// - Get:
//    1. Accepts a key
//    2. Hashes the key
//    3. Retrieves the key-value pair in the hash table
//    4. If the key isn't found, returns undefined
