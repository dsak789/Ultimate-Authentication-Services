export const LoggingHandler = (req, res, next) => {
  try {
    const logStr = `> ${req.method} :: ${req.path} :: ${Date()}`;
    console.log(logStr);
  } catch (error) {
    console.log(error.message);
  } finally {
    next();
  }
};
