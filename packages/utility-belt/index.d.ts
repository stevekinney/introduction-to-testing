export type RequireOnly<T, Keys extends keyof T = keyof T> = Partial<T> &
  Required<Pick<T, Keys>>;
export declare const isError: (error: unknown) => error is Error;
export declare const getErrorMessage: (
  error: unknown,
  defaultMessage: string,
) => string;
