import { Animal } from "../animal";
import { getAnimal } from "../zoo";

const alex: Animal = getAnimal("Alex");
const marty: Animal = getAnimal("Marty");
const melman: Animal = getAnimal("Melman");
const gloria: Animal = getAnimal("Gloria");
const lionFood = ["meat"];
const zebraFood = ["grass", "leaves", "shrubs", "bark"];
const giraffeFood = ["leaves", "hay", "carrots"];
const hippoFood = ["grass", "reeds", "shoots"];
const badFood = ["shrimp", "potatoes", "pizza", "icecream"];

describe("feeding animals", () => {
  
  test("Alex likes the food we expect", () => {
for(let i=0; i<lionFood.length[i]; i++) 
{
expect(alex.feed(lionFood[i])).toBe( `Alex the lion likes ${lionFood[i]}!`);
}
badFood.forEach((food)=>
{
  expect(alex.feed(badFood[food])).toBe(`Alex the lion does not like ${badFood[food]}!`);
})
  });
  
  test("Marty likes the food we expect", () => {
 for(let i=0; i<zebraFood.length[i]; i++)
 {
 expect(marty.feed(zebraFood[i])).toBe( `MArty the zebra likes ${zebraFood[i]}!`);
 }
 badFood.forEach((food)=>
 {
 expect(marty.feed(badFood[food])).toBe(`marty the lion does not like ${badFood[food]}!`);
 })
  });
 
  test("Melman likes the food we expect", () => {
  for(let i=0; i<giraffeFood.length[i]; i++)
  {
  expect(melman.feed(giraffeFood[i])).toBe( `Melman the giraffe likes ${giraffeFood[i]}!`);
  }
  badFood.forEach((food)=>
  {
    expect(melman.feed(badFood[food])).toBe(`melmon the lion does not like ${badFood[food]}!`);
  })

  });
 
 
 
  test("Gloria likes the food we expect", () => {
  for(let i=0; i<hippoFood.length[i]; i++)
  {
  expect(gloria.feed(hippoFood[i])).toBe(`Gloria the hippo likes ${hippoFood[i]}!`);
  }
 

  badFood.forEach((food)=>
  {
    expect(gloria.feed(badFood[food])).toBe(`Gloria the lion does not like ${badFood[food]}!`);
  })


});

});