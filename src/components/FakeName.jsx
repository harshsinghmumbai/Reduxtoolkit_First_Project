"use client";
import Chance from "chance";

const chance = Chance();

const FakeName = () => {
  console.log(chance.name({ middle: true }));
  return chance.name({ middle: true });
};

export default FakeName;
