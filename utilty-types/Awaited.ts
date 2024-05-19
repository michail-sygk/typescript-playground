/*
Using Awaited<Type> can be helpful when you need to infer the return type of an asynchronous 
function and use it in other parts of your code. However, it's important to note that the use 
of Awaited<Type> assumes that the promise always resolves successfully, so you may need to handle 
errors separately if the promise can reject.
*/
type A = Awaited<Promise<string>>;

async function fetchData(): Promise<string> {
  const response = await fetch('https://example.com/data');
  const data = await response.text();
  return data;
}

type Data = Awaited<ReturnType<typeof fetchData>>;

const data: Data = 'example data';
