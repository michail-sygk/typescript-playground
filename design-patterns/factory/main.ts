import { ConcreteCreator } from "./concrete-creator";
import { Creator } from "./creator";

function clientCode(creator: Creator) {
  console.log(
    "Client: I'm not aware of the creator's class, but it still works."
  );
  console.log(creator.someOperation());
}

console.log("App: Launched with the ConcreteCreator1.");
clientCode(new ConcreteCreator());
console.log("");
