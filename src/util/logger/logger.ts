import type { ILogger, IMetadata, LogLevel } from "./logger.types";

export class Logger implements ILogger {
  private initiatorName: string;
  constructor(initiatorName: string) {
    this.initiatorName = initiatorName;
  }

  info(message: string, metadata: IMetadata, error?: Error | undefined): void {
    console.info(
      message,
      { initiatorName: this.initiatorName, ...metadata },
      error
    );
  }
  error(message: string, metadata: IMetadata, error?: Error | undefined): void {
    console.error(
      message,
      { initiatorName: this.initiatorName, ...metadata },
      error
    );
  }
  debug(message: string, metadata: IMetadata, error?: Error | undefined): void {
    console.debug(
      message,
      { initiatorName: this.initiatorName, ...metadata },
      error
    );
  }
  log(
    logLevel: LogLevel,
    message: string,
    metadata: IMetadata,
    error?: Error | undefined
  ): void {
    throw new Error("Method not implemented.");
  }
}
