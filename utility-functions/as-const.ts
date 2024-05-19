
// typescript here does not understand the types of the routes. In opposed everything here for typescript is a string
// Objects here because they are mutable and can be changed so it regards them as strings.
const routes = { 
    home: '/',
    login: '/login',
    register: '/register',
} 


const routes_2 = { 
    home: '/',
    login: '/login',
  register: '/register',
} as const; // as const makes the object immutable and therefore typescript can understand the types of the routes and they are read only

type Keys = keyof typeof routes; // this is the same as the one below

type TypeOfRoutes = (typeof routes_2)[Keys];




