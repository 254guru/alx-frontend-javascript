#!/usr/bin/node
// Original function using var
function taskFirst() {
    var x = 10;
    var y = 20;
    console.log(x, y);
}

// Modified function using const
function taskFirst() {
    const x = 10;
    const y = 20;
    console.log(x, y);
}

// Original function using var
function taskNext() {
    var a = 100;
    var b = 200;
    console.log(a, b);
}

// Modified function using let
function taskNext() {
    let a = 100;
    let b = 200;
    console.log(a, b);
}
