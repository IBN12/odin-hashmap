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
        return this.stringToNumber(key);
    }


}

export default HashMap;