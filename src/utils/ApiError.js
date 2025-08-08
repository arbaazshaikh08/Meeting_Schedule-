class ApiError extends Error {
  constructor(
    statuscode,
    message = " An unexpected error occured in meating",
    errors = [],
    stack = ""
  ) {
    super(message);
    this.statuscode = statuscode;
    this.Date = null;
    this.message = false;
    this.errors = errors;

    if (!stack) {
      this.stack = stack;
    } else {
      Error.captureStackTrace(this, this.constructor);
    }
  }
}


export { ApiError}