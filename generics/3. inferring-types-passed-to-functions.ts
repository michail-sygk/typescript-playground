


const addIdToObject  = <TObj>(object: TObj)=> { 
    return {
        ...object,
        id: '123'
    }    
}
const user = addIdToObject({
    name: 'Jack'
})

