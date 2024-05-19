/* Options do not need to be only object but they can any type like boolean , number , string*/
function Component(options: any) {
  console.log(options);

  return (target: any) => {
    console.log('@:', target); // target actually it is the class it self
    // we can set a new property for this class over here
    target.id = 10;
  };
}
