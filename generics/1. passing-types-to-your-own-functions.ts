const makeFetch  = <TData>(url: string) : Promise<TData>=> {
    return fetch(url).then(res => res.json());
}

makeFetch<{firstName : string}>('https://jsonplaceholder.typicode.com/todos/1').then(res => {
    console.log(res);
}
) 