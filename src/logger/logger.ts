import { ENV } from "@app/env";
import { LoggerService } from "./logger.service";
import { Injectable } from "@angular/core";

export enum LogLevel {
  Trace = 0,
  Debug,
  Info,
  Warning,
  Error,
}

@Injectable()
export class Logger {
  constructor(private logger: LoggerService) { }

  public trace(message, ...additional: any[]) {
    this.log(console.trace, LogLevel.Trace, message, additional);
  }

  public debug(message, ...additional: any[]) {
    this.log(console.debug, LogLevel.Debug, message, additional);
  }

  public info(message, ...additional: any[]) {
    this.log(console.info, LogLevel.Info, message, additional);
  }

  public warn(message, ...additional: any[]) {
    this.log(console.warn, LogLevel.Warning, message, additional);
  }

  public error(message, ...additional: any[]) {
    this.log(console.error, LogLevel.Error, message, additional);
  }

  private log(func: Function, level: LogLevel, message: string, additional: any[] = []) {
    if (level < ENV.logging.logLevel) {
      return;
    }

    additional.unshift(message);
    func.apply(console, additional);

    this.logger.log(level, message, additional);
  }
}
