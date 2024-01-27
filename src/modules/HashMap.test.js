import HashMap from "./HashMap";

const hashMapObj = new HashMap(43);

test ('The hash method should return a number value', () => {
    expect(hashMapObj.hash('Isom')).not.toBeNull(); 
});
