import React from "react";

export function getRandomBetween(min, max) {
  return Math.random() * (max - min) + min;
}
