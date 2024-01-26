/** |Project: HashMap|
 * => Assignment:
 * 1. Start by creating a HashMap class or factory function. It's up to you which you want to use.
 * Then proceed to create the following methods: 
 */
// HashMap Factory Function Test:
const HashMap = () => {
    const testReturn = 1;

    return {testReturn};
}

// HashMap Class Test: 
export class HashMapClass{
    constructor(value)
    {
        this.value = value;
    }

    ShowValue(){
        return this.value; 
    }
}

export default HashMap;