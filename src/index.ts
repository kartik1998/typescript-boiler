import fs from 'fs';
import path from 'path';
import readline from 'readline';
import { dispatch, Actions } from './app/dispatcher';
import Application from './app/application';

/**
 * Runs the script in file mode when a filepath is passed as an arguement
 * Runs the scriot in interactive mode when no arguments are passed
 * @param {string[]} args - list of command line arguments passed to this script
 */

function run(args: Array<string>) {
  if (args.length == 0) {
    // execute in interactive shell mode
    // ... instantiate the Application that will execute the commands from shell
    const app = new Application();
    // ... read lines from shell and dispatch them for execution to the app
    const reader = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
      terminal: false,
    });
    process.stdout.write('\n$ ');
    reader.on('line', (line) => {
      if (line && line === 'exit') {
        // Actions.print(); // comment out if you want to see all the dispatch actions
        process.exit();
      }
      const { success, error } = dispatch(line, app);
      console.log(success || error || '');
      process.stdout.write('\n$ ');
    });
  } else {
    // resolve to an absolute path
    const filepath = path.resolve(args[0]);
    // check if the filepath is not a null value
    if (!filepath) {
      console.log('File path must be a path to a valid commands file.');
      return;
    }
    // ... check if the file is readable by this process
    try {
      fs.accessSync(filepath, fs.constants.R_OK);
    } catch (accesErr) {
      console.log(
        `File path: ${filepath} must be readable by the current user & process`,
      );
      return;
    }
    // ... instantiate the Application that will execute the commands from the file
    const app = new Application();
    // ... read lines from the line and execute them via the App
    const reader = readline.createInterface({
      input: fs.createReadStream(filepath),
    });
    reader.on('line', (line) => {
      const { success, error } = dispatch(line, app);
      console.log(`$ ${success || error || ''}`);
    });
  }
}

const [, , ...args] = process.argv; // npm start ...args
run(args); // start the script
