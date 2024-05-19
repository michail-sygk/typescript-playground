//The function takes an object as an argument and returns an object with the key and value 
//of the highest value in the object.
const getKeywithHighestValue  = <TObj extends Record<string , number> >(obj: TObj)=> { 
    const keys = Object.keys(obj) as Array<keyof TObj>;

    let highestKey : keyof TObj  = keys[0]; 
    let highestValue = obj[highestKey]; 

    for (const key of keys) {
        if (obj[key] > highestValue) {
            highestKey = key; 
            highestValue = obj[key]; 
        }
    }
    return { key : highestKey , value : highestValue};
}

const key = getKeywithHighestValue({a : 1, b : 2, c : 3});
//      ^?