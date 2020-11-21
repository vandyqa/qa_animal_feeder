import { Animal } from "../animal";
import { getAnimal } from "../zoo";

let data = [
  { animal: getAnimal("Alex"), foods: ["meat"] },
  { animal: getAnimal("Marty"), foods: ["grass", "leaves", "shrubs", "bark"] },
  { animal: getAnimal("Melman"), foods: ["leaves", "hay", "carrots"] },
  { animal: getAnimal("Gloria"), foods: ["grass", "reeds", "shoots"] },
];

const badFoods = ["shrimp", "potatoes", "pizza", "icecream"];

describe("feeding animals", () => {
  data.forEach((record) => {
    describe(`Feeding ${record.animal.name} the ${record.animal.type}`, () => {
      record.foods.forEach((food) => {
        test(`They should like ${food}`, () => {
          expect(record.animal.feed(food)).toContain(`likes ${food}!`);
          expect(record.animal.feed(food)).not.toContain(
            `does not like ${food}!`
          );
        });
      });
      badFoods.forEach((food) => {
        test(`They should not like ${food}`, () => {
          expect(record.animal.feed(food)).not.toContain(`likes ${food}!`);
          expect(record.animal.feed(food)).toContain(`does not like ${food}!`);
        });
      });
    });
  });
});

let list = [
  { name: "one", value: 1 },
  { name: "two", value: 2 },
  { name: "three", value: 3 },
];
list.forEach((item) => {
  test(`We're looking for ${item.name}`, () => {
    expect(item.value).toBeDefined();
  });
});
