/*
In error middleware we only able to pass error message not error Code. so we will make a new error class
*/
class ErrorHandler extends Error {
  constructor(message, statusCode) {
    super(message);
    /*
    super- parent class(Error)constructor.
    message inside super will reach inside to Error class
    */
    this.statusCode = statusCode;
    /**
     * Now for error handling we will call ErrorHandler instead of error class
     */
  }
}

export const errorMiddleware = (err, req, res, next) => {
  // Error message is empty
  err.message = err.message || "Internal Server Error";
  err.statusCode = err.statusCode || 500;

  return res.status(err.statusCode).json({
    success: false,
    message: err.message,
  });
};

export default ErrorHandler;
