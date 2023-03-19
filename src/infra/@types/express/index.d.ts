/* eslint-disable @typescript-eslint/naming-convention */
declare namespace Express {
  export interface Request {
    hasUrlPatternMatched: boolean | undefined;
    runtime: {
      start: number;
      end: number;
    };
  }
}
