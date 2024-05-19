//  Default value of Red will be 0 , Green 1 and Blue 2
enum Color {
  Red,
  Green,
  Blue,
}

let backGround = Color.Red;
console.log(backGround);

console.log(Color[1]); // This will print Green

enum Theme {
  Light = 'light',
  Dark = 'dark',
}

enum HttpStatusCode {
  OK = 200,
  BadRequest = 400,
  Unauthorized = 401,
  NotFound = 404,
  InternalServerError = 500,
}

function handleResponse(status: HttpStatusCode) {
  switch (status) {
    case HttpStatusCode.OK:
      console.log('Successful request.');
      break;
    case HttpStatusCode.BadRequest:
      console.log('Bad request.');
      break;
    // ...and so on
  }
}

enum UserRole {
  Admin = 'admin',
  User = 'user',
  Guest = 'guest',
}

let currentUserRole = UserRole.Admin;

if (currentUserRole === UserRole.Admin) {
  //show admin features
}
