import HashMap from "./HashMap";
import { HashMapClass } from "./HashMap";

const HashMapObj = HashMap(); 
test('HashMap obj should return 1 from the returnTest property', () => {
    expect(HashMapObj.testReturn).toBe(1); 
});

const HashMapClassObj = new HashMapClass(10);

test('HashMap Class Obj should return 10 from the value property', () => {
    expect(HashMapClassObj.ShowValue()).toBe(10);
});