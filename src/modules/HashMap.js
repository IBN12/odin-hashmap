import { buckets } from "../utils/Buckets";
import { CreateBuckets } from "./DomContent";
import { PlaceInBucket } from "./DomContent";

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

        // Test if the bucket has reached the default load factor. 
        // Note: This test could be in its own function.
        buckets.forEach((item) => {
            if(item !== null)
            {
                valuesInBuckets++;
            }
                
            if ((Math.floor(buckets.length * this.loadFactor)) === valuesInBuckets)
            {
                while(increaseBuckets < this.loadIncrease)
                {
                    increaseBuckets++;
                    buckets.length += 1
                    buckets[buckets.length - 1] = null;
                }

                const bucketField = document.querySelector('.bucket-field');
                bucketField.replaceChildren();
                CreateBuckets();
                PlaceInBucket();
            }
        });
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
    }

    keys(){
        let keysOnHashTable = [];
        buckets.forEach((item) => {
            if (item !== null)
            {
                keysOnHashTable.push(item[1]);
            }
        });

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

        return entriesOnHashTable; 
    }
}

export default HashMap;