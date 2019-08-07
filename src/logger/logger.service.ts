import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ENV } from '@app/env';
import { Subject } from 'rxjs';
import dayjs from 'dayjs';
import { LogLevel } from './logger';

export interface LogFields {
  userId: string;
  elapsedTime?: number;
  requestPath?: string;
  environment?: string;
  appVersion?: string;
  url?: string;
}

interface LogEntry {
  type: LogLevel;
  message: string;
  additional: string;
  data: LogFields;
}

enum LoggerEvents {
  Pause = 0,
  Flush = 1
}

@Injectable()
export class LoggerService {
  private buffer: LogEntry[] = [];
  private flush = new Subject<LoggerEvents>();

  private readonly APP_FIELD = 'Application';
  private readonly COMPANY_NAME_FIELD = 'CompanyName';
  private readonly ENV_FIELD = 'Environment';
  private readonly VERSION_FIELD = 'Version';
  private readonly USER_NAME_FIELD = 'UserName';
  private readonly ELAPSED_MS_FIELD = 'ElapsedMilliseconds';
  private readonly REQUEST_PATH_FIELD = 'RequestPath';
  private readonly URL_FIELD = 'Url';
  private readonly APP_STATE_FIELD = 'AppState';

  constructor(public http: HttpClient) {
    this.flush
      .debounceTime(5000)
      .filter(event => event === LoggerEvents.Flush)
      .subscribe(() => this.flushBuffer());
  }

  public log(level: LogLevel, message: string, additional: any[] = []) {
    if (level < ENV.logging.logLevel) {
      return;
    }

    this.appendBuffer(level, message, this.prepareAdditionalParameters(additional));
  }

  private appendBuffer(type: LogLevel, message: string, additional: string) {
    //TODO definir os campos de log
    const data: LogFields = {
      userId: '',
      elapsedTime: 0,
      requestPath: '',
      environment: '',
      appVersion: '',
      url: '',
    };

    this.buffer.push({
      type,
      message,
      data,
      additional
    });

    this.flush.next(LoggerEvents.Flush);
  }

  private flushBuffer() {
    const data = this.buffer.splice(0);

    if (data.length === 0) {
      this.flush.next(LoggerEvents.Pause);
      return;
    }

    const body = data
      .map((entry) => this.buildLogString(entry))
      .reduce((sum, entry) => (sum += entry), '');

    this.http
      .post(ENV.logging.elasticSearchEndpoint, body)
      .take(1)
      .subscribe();
  }

  private buildLogString(entry: LogEntry): string {
    const index = this.buildIndexChunk();
    const body = this.buildBodyChunk(entry);

    return `${index}\n${body}\n`;
  }

  private buildIndexChunk() {
    const date = dayjs();
    const index = {
      index: {
        _index: `app-${date.format('YYYY.M.D')}`,
        _type: 'logevent'
      }
    };

    return JSON.stringify(index);
  }

  private buildBodyChunk(entry: LogEntry) {
    const { type, message, data, additional: aditional } = entry;
    const level = type;
    const date = dayjs();
    const messageTemplate = this.getMessageTemplate();
    const fields = this.getFields(data);
    const body = {
      '@timestamp': `${date.toISOString()}`,
      level,
      messageTemplate,
      message,
      aditional,
      fields
    };

    return JSON.stringify(body);
  }

  private getMessageTemplate() {
    const fields: string[] = [
      this.APP_FIELD,
      this.COMPANY_NAME_FIELD,
      this.ENV_FIELD,
      this.VERSION_FIELD,
      this.USER_NAME_FIELD,
      this.ELAPSED_MS_FIELD,
      this.REQUEST_PATH_FIELD,
      this.URL_FIELD,
      this.APP_STATE_FIELD
    ];
    const template = fields.map((field) => `{${field}}`).join(' - ');

    return template;
  }

  private getFields(data: LogFields) {
    return {
      [this.APP_FIELD]: '',
      //TODO: definiro o nome da empresa
      [this.COMPANY_NAME_FIELD]: '',
      [this.ENV_FIELD]: data.environment,
      [this.VERSION_FIELD]: data.appVersion,
      [this.USER_NAME_FIELD]: data.userId,
      [this.ELAPSED_MS_FIELD]: data.elapsedTime,
      [this.REQUEST_PATH_FIELD]: data.requestPath,
      [this.URL_FIELD]: data.url
    };
  }

  private prepareAdditionalParameters(additional: any[]): string {
    if (additional === null || additional === undefined) {
      return null;
    }

    return additional.map((next, idx) => {
      try {
        // We just want to make sure the JSON can be parsed, we do not want to actually change the type
        if (typeof next === 'object') {
          JSON.stringify(next);
        }

        return next;
      } catch (e) {
        return `The additional[${idx}] value could not be parsed using JSON.stringify().`;
      }
    }).join("\n");
  }
}
