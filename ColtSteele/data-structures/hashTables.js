class HashTable {
    // size is prime
    constructor(size = 17) {
        this.keyMap = new Array(size);
    }

    // very simple
    _hash(key) {
        let total = 0;
        let WEIRD_PRIME = 31;

        for (let i = 0; i < Math.min(key.length, 100); i++) {
            let char = key[i];
            let value = char.charCodeAt(0) - 96;
            total = (total * WEIRD_PRIME + value) % this.keyMap.length;
        }
        return total;
    }

    set(key, value) {
        const index = this._hash(key);
        if (!this.keyMap[index]) {
            this.keyMap[index] = [];
        }
        this.keyMap[index].push([key, value]);
    }

    get(key) {
        const index = this._hash(key);
        if (this.keyMap[index]) {
            for (let i = 0; i < this.keyMap[index].length; i++) {
                const element = this.keyMap[index][i];
                if (element[0] === key) {
                    return element[1];
                } 
            }
        };
        return undefined;
    }

    keys() {
        let keysArr = [];

        for (let i = 0; i < this.keyMap.length; i++) {
            const element = this.keyMap[i];
            if (element) {
                for (let j = 0; j < element.length; j++) {
                    const subElement = element[j];
                    if (!keysArr.includes(subElement[0])) {
                        keysArr.push(subElement[0]);
                    }
                }
            }
        }

        return keysArr;
    }

    values() {
        let valuesArr = [];

        for (let i = 0; i < this.keyMap.length; i++) {
            const element = this.keyMap[i];
            if (element) {
                for (let j = 0; j < element.length; j++) {
                    const subElement = element[j];
                    if (!valuesArr.includes(subElement[1])) {
                        valuesArr.push(subElement[1]);
                    }
                }
            }
        }

        return valuesArr;
    }
}

let hashTable = new HashTable();
hashTable.set("hello word", "goodbye!!");
hashTable.set("cass", "joe");
hashTable.set("cash", "hole");
hashTable.set("dup", "plz");
hashTable.set("playa", "playyyy");
hashTable.set("playa", "duppp");
hashTable.set("playaz", "playyyy");
console.log('HASH YO0', hashTable.values());


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

// Keys / Values
// - Keys:
//    1. Loops through the hash table array and returns an array of keys in the table
// - Values:
//    1. Loops through the hash table array and returns an array of values in the table

// Big O (average case) of above:
// Insert/Deletion/Access: O(1)
// Worst Case:
// O(n) with the world's worst hashing function that just exponentially grows at a certain index for the length of n

// Recap:
// Hash tables are collection of key-value pairs
// They can find values quickly given a key
// They can add new key-value pairs quickly
// They store data in a large array, and work by hashing the key 
// A good hash function should be fast, ideally constant time, distribute keys uniformly, and be determinstic - get same output every time with same input
// Separate chaining and linear probing are two strategies used to deal with two keys that hash to the same index
