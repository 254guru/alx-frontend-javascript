#!/usr/bin/node
export default function taskBlock(trueOrFalse) {
  let task = false;
  let task2 = true;

  if (trueOrFalse) {
    let task = true; // Using let for block-scoping
    let task2 = false; // Using let for block-scoping
  }

  return [task, task2];
}
