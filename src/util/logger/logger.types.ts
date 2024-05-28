export enum LogLevel {
  SILLY = "silly",
  DEBUG = "debug",
  VERBOSE = "verbose",
  HTTP = "http",
  INFO = "info",
  WARN = "warn",
  ERROR = "error",
}

export interface IContext {
  methodName?: string;
}

export interface IMetadata extends IContext {
  [prop: string]: any;
}

export interface ILogger {
  info(message: string, metadata: IMetadata, error?: Error): void;
  error(message: string, metadata: IMetadata, error?: Error): void;
  debug(message: string, metadata: IMetadata, error?: Error): void;
  log(
    logLevel: LogLevel,
    message: string,
    metadata: IMetadata,
    error?: Error
  ): void;
}
