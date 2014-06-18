import {Provide} from 'di';
import {ConsoleReporter} from 'log/reporters/console';

@Provide(ConsoleReporter)
export class Logger {

  constructor(options = {}) {
    this.console = options.console || console ||window.console;
  }

  receive(log) {
    var {level, group, message} = log;
    var processed = `[${level}|${group}] ${message}`;

    if (level === 'fatal') {
      this.error(processed);
    } else {
      this[level](processed);
    }
  }

  info(message) {
    this.console.log('yes')
    this.console.info(message);
  }

  warn(message) {
    this.console.warn(message);
  }

  error(message) {
    this.console.error(message);
  }
}
