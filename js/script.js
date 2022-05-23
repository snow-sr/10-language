// To-do list on terminal
import chalk from "chalk";
import fs from "fs";
import readline from "readline";
import main from "./lib/main.js";
import { coldStart, warmStart } from "./lib/start.js";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function init() {
  if (!fs.existsSync("./todo.json") || fs.readFileSync("./todo.json") == "") {
    coldStart()
      .then((res) => {
        if (res) {
          console.log(chalk.green("List created!"));
        }
      })
      .catch((err) => {
        console.log(chalk.red(err));
      });
  } else {
    warmStart()
      .then((res) => {
        if (res) {
          console.log(chalk.green("List loaded!"));
        }
      })
      .catch((err) => {
        console.log(chalk.red(err));
      });
  }
}

init();
