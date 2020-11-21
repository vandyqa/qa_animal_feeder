import { Animal } from "../animal";
import { getAnimal } from "../zoo";

// now we have an array of even more detailed objects, the liked foods are even
// directly associated with the animal that should eat them
let data = [
  { animal: getAnimal("Alex"), foods: ["meat"] },
  { animal: getAnimal("Marty"), foods: ["grass", "leaves", "shrubs", "bark"] },
  { animal: getAnimal("Melman"), foods: ["leaves", "hay", "carrots"] },
  { animal: getAnimal("Gloria"), foods: ["grass", "reeds", "shoots"] },
];

// we left this out, because no animal likes them, we don't need to copy it to
// each animal
const badFoods = ["shrimp", "potatoes", "pizza", "icecream"];

describe("feeding animals", () => {
  // first, we iterate across each animal
  data.forEach((record) => {
    // additional describe blocks just break down your testing more - giving
    // more context to your test output.
    describe(`Feeding ${record.animal.name} the ${record.animal.type}`, () => {
      // now we'll iterate through the liked foods, creating a new test for each
      record.foods.forEach((food) => {
        test(`They should like ${food}`, () => {
          expect(record.animal.feed(food)).toContain(`likes ${food}!`);
          expect(record.animal.feed(food)).not.toContain(
            `does not like ${food}!`
          );
        });
      });
      // and do the same for the unliked foods
      badFoods.forEach((food) => {
        test(`They should not like ${food}`, () => {
          expect(record.animal.feed(food)).not.toContain(`likes ${food}!`);
          expect(record.animal.feed(food)).toContain(`does not like ${food}!`);
        });
      });
    });
  });
});
// that is it - way cleaner, and easier to maintain, if you know how to do it.
