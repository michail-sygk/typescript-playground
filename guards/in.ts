type Animal = {
  name: string;
};

const animal: Animal = {
  name: "Dog",
};

if ("name" in animal) {
  console.log("There is name in the animal");
}
