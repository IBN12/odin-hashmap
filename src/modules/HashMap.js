import { buckets } from "../utils/Buckets";
import { CreateBuckets } from "./DomContent";
import { PlaceInBucket } from "./DomContent";
/** |Project: HashMap|
 * => Assignment:
 * 1. Start by creating a HashMap class or factory function. It's up to you which you want to use.
 * Then proceed to create the following methods: 
 * 
 * 2. hash takes a value and produces a hash code with it. We did implement a fairly good hash
 * function in the previous lesson. You are free to use that, or if you wish, you can conduct your own
 * research. Beware, this is a deep deep rabbit hole.
 * 
 * Note: Hash maps could accommodate various data types for keys like 
 * numbers, strings, objects. But for this project, only handle keys 
 * of type strings. 
 * 
 * 3. set(key, value) takes two arguments, the first is a key and the second is a value that is assigned
 * to this key. If a key already exists, then the old value is overwritten.
 * 
 * Remember to grow your buckets size when it needs to, by calculating if 
 * your bucket has reached the 'load factor'. 
 * 
 * 4. get(key) takes one argument as a key and returns the value that is assigned to this
 * key. If a key is not found, return null. 
 * 
 * 5. remove(key) takes a key argument. If the given key is in the hash map, it should 
 * remove the entry with that key and return true. If the key isn't in the hash map, it
 * should return false. 
 * 
 * 6. length() returns the number of stored keys in the hash map. 
 * 
 * 7. clear() removes all entries in the hash map. 
 * 
 * 8. keys() returns an array containing all the keys inside the hash map.
 * 
 * 9. values() returns an array containing all the values.
 * 
 * 10. entries() returns an array that contains each 'key', 'value' pair. Example:
 * [[firstKey, firstValue]], [secondKey, secondValue].
 * 
 * Remember that a hash map does not preserve insertion order when you are retrieving your hash map's data.
 * It is normal and expected for keys and values to appear out of the order you inserted them in. 
 */

// HashMap Factory Function Test:
// const HashMap = () => {
//     const testReturn = 1;

//     return {testReturn};
// }

// HashMap Class Test: 
export class HashMap{
    constructor(table_size){
        this.table_size = table_size;
        this.hashCode = null; 
        this.loadFactor = 0.75;
        this.loadIncrease = 10;
    }

    stringToNumber(string){
        let hashCode = 0;
        let number = 0;
        
        for (let i = 0; i < string.length; i++)
        {
            number += string.charCodeAt(i);
        }

        // The Mod Method (Hashing by division)
        hashCode = number % this.table_size;  

        return hashCode;
    }

    hash(key){
        this.hashCode = this.stringToNumber(key);
    }

    set(key, value){
        console.log('HashMap Class key: ', key); // Testing
        console.log('HashMap Class value: ', value); // Testing 
        let valuesInBuckets = 0;
        let increaseBuckets = 0;
        let placedInsideBucket = false;
        let itemFound = false;
        
        buckets.forEach((item, index) => {
            // Test if the hash code value is already in the buckets field.
            if (item !== null && item[0] === value)
            {
                itemFound = true;
            }

            // Test if the buckets field index has increased due to the load factor. 
            if (index === key)
            {
                // buckets[index] = [value, key];
                for (let i = 0; i < buckets.length; i++)
                {
                    const bucketItem = buckets[i];
                    if (bucketItem !== null && bucketItem[0] === value)
                    {
                        buckets[i] = null;
                    }
                }
                buckets[index] = [value, key]; 

                const bucketField = document.querySelector('.bucket-field'); 
                bucketField.replaceChildren();
                CreateBuckets(); 
                PlaceInBucket();
            }
        }); 

        if ((key < 0 || key >= buckets.length) && !(itemFound))
        {
            console.log('Trying to access index out of bounds.'); // Testing
            console.log('Assigning the value to the most current empty index.'); // Testing 
            for (let i = 0; i < buckets.length; i++)
            {
                if (buckets[i] === null && !placedInsideBucket)
                {
                    buckets[i] = [value, key];
                    placedInsideBucket = true;
                }
                else if (buckets[i] !== null && !placedInsideBucket)
                {
                    const itemPair = buckets[i];
                    if (itemPair[1] === key)
                    {
                        buckets[i] = [value, key]; 
                        placedInsideBucket = true; 
                    }   
                }
            }
        }

        console.log(buckets) // Testing
        console.log('\n'); // Testing 

        // Test if the bucket has reached the default load factor. 
        // Note: This test could be in its own function.
        buckets.forEach((item) => {
            if(item !== null)
            {
                valuesInBuckets++;
            }
                
            if ((Math.floor(buckets.length * this.loadFactor)) === valuesInBuckets)
            {
                // Grow the 'Buckets Array' by a certain size. 
                console.log('Buckets Array Will Grow'); // Testing 
                while(increaseBuckets < this.loadIncrease)
                {
                    increaseBuckets++;
                    buckets.length += 1
                    buckets[buckets.length - 1] = null;
                }

                console.log('Buckets: ', buckets); // Testing 
                const bucketField = document.querySelector('.bucket-field');
                bucketField.replaceChildren();
                CreateBuckets();
                PlaceInBucket();
            }
        });
        console.log(valuesInBuckets); // Testing 
    }
    
    get(key){
        let itemFound = false; 
        let value = null;
        buckets.forEach((item) => {
            if (item !== null && item[1] === key)
            {
                itemFound = true;
                value = item[0];
            }
        });

        if (itemFound)
        {
            return value; 
        }
        else
        {
            return value; 
        }
    }
    
    has(key){
        let itemFound = false; 

        buckets.forEach((item) => {
            if (item !== null && item[1] === key)
            {
                itemFound = true;
            }
        });

        if (itemFound)
        {
            return true;
        }
        else 
        {
            return false;
        }
    }

    remove(key){
        let itemFound = false;

        buckets.forEach((item, index) => {
            if (item !== null && item[1] === key)
            {
                itemFound = true;
                buckets[index] = null;
            }
        });

        if (itemFound)
        {
            return true;
        }
        else 
        {
            return false; 
        }
    }

    length(){
        let keysOnHashTable = 0;

        buckets.forEach((item) => {
            if (item !== null)
            {
                keysOnHashTable++;
            }
        });

        return keysOnHashTable;
    }

    clear(){
        let bucketIndexReached = 0;

        while (bucketIndexReached < (buckets.length)){
            buckets.shift(); 
            buckets.push(null); 
            bucketIndexReached++;
        }

        console.log('Buckets after clearing entries: ', buckets); // Testing   
        console.log('\n'); // Testing 
    }

    keys(){
        let keysOnHashTable = [];
        buckets.forEach((item) => {
            if (item !== null)
            {
                keysOnHashTable.push(item[1]);
            }
        });

        console.log('The keys inside the hash map: ', keysOnHashTable); // Testing
        console.log('\n'); // Testing 
        return keysOnHashTable;
    }

    values(){
        let valuesOnHashTable = [];
        buckets.forEach((item) => {
            if (item !== null)
            {
                valuesOnHashTable.push(item[0]); 
            }
        });

        console.log('The values inside the hash map: ', valuesOnHashTable); // Testing 
        console.log('\n'); // Testing 
        return valuesOnHashTable; 
    }

    entries(){
        let entriesOnHashTable = [];
        buckets.forEach((item) => {
            if (item !== null)
            {
                entriesOnHashTable.push([item[0], item[1]]);
            }
        });

        console.log('The entries inside the hash map: ', entriesOnHashTable); // Testing
        console.log('\n'); // Testing
        return entriesOnHashTable; 
    }
}

export default HashMap;