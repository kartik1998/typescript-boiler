import * as utils from '../utils';
/**
 * dispatch is a bridge between user input string and the functions in the app, this function parses the input to get command and args.
 * It then invokes the function mapped to the command by passing the args
 * @param {*} app - Instance of the Application
 * @param {string} input - User input
 * @returns {{string, string}} - { success, error } Returns response or error from function invocation
 */
function dispatch(input: string, app: any) {
  // separate command and arguments
  const [command, ...args] = input.split(' ');
  const processedArgs: Array<string | number | boolean> = [];
  for (const arg of args) {
    const trimmedArg = arg.trim();
    if (utils.isNumber(trimmedArg)) {
      processedArgs.push(parseInt(trimmedArg));
    } else if (utils.isBoolean(trimmedArg)) {
      processedArgs.push(trimmedArg.toLowerCase() === 'true');
    } else {
      processedArgs.push(trimmedArg);
    }
  }
  Actions.push(command, processedArgs);
  try {
    const registery = app.registry();
    if (!Object.keys(registery).includes(command)) {
      throw new Error(`command: ${command} is not implemented in the app`);
    }
    const result = app[registery[command]](...processedArgs);
    return { success: result };
  } catch (err: any) {
    return { error: err };
  }
}

/**
 * Useful in recording all the dispatch actions, run Actions.print() to view all the actions that have been run yet
 */
class Actions {
  private static actions: any = [];
  static push(command: string, args: any) {
    this.actions.push({ command, args });
  }

  static print() {
    console.dir({ actions: Actions.actions }, { depth: null });
  }
}

export { dispatch, Actions };
