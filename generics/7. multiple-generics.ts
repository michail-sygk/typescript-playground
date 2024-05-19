const getValue =<TObj, TKey extends keyof TObj> (obj : TObj,  key : TKey) =>{  
    return obj[key]; 
}

const result =  getValue({a : "2312", b : 2, c : 3} , 'a'); 
//      ^?


