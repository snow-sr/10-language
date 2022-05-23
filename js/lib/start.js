import fs from "fs";
import chalk from "chalk";
import readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

export function coldStart() {
  return new Promise((resolve, reject) => {
    rl.question(chalk.blue("What is the name of your list?"), (name) => {
      if (name == "") {
        reject("You must enter a name for your list");
      }

      fs.writeFileSync(
        "./todo.json",
        JSON.stringify({
          title: name,
          tasks: [],
        })
      );

      resolve(true);
    });
  });
}

export function warmStart() {
  return new Promise((resolve, reject) => {
    fs.readFileSync("./todo.json", (err, data) => {
      if (err) {
        reject(err);
      }

      const list = JSON.parse(data);

      console.log(chalk.blue("Welcome back to your list!"));
      console.log(chalk.blue(`${list.title}`));
      console.log(chalk.blue("---------------------------------"));

      resolve(list);
    });
  });
}
