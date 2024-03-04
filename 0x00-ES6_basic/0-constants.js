#!/usr/bin/node
export function taskFirst() {
  const task = 'I prefer const when I can.'; // Instantiate variables using const
  return task;
}

export function getLast() {
  return ' is okay';
}

export function taskNext() {
  let combination = 'But sometimes let'; // Instantiate variables using let
  combination += getLast();

  return combination;
}
