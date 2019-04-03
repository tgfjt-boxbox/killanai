#!/usr/bin/env node

const readline = require("readline");

const hello = require("./hello");

let answerline = "";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.emitKeypressEvents(process.stdin);

process.stdin.on("keypress", (s, key) => {
  answerline += key.name;
});

rl.on("SIGINT", () => {
  hello();
});

rl.on("line", line => {
  if (answerline === "upupdowndownleftrightleftrightba") {
    console.log("hvae a nice day!");
    rl.close();
    process.exit(0);
  }

  answerline = "";
});
