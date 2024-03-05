#!/usr/bin/node
export default function taskBlock(trueOrFalse) {
  let task = false;
  let task2 = true;

  if (trueOrFalse) {
    // No need to declare new variables here, just reassign the existing ones
    // Removing the declaration and using assignment directly
    task = true;
    task2 = false;
  }

  return [task, task2];
}
