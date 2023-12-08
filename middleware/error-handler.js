export function errorHandler(err, req, res, next) {
  const status = err.status ?? 500;
  const errors = err.errors ?? err.message;
  if (status >= 500) {
    console.error(err);
    res.status(status).json({ error: "Internal Server Error" });
  } else if (status >= 400) {
    console.error("errors: ", errors);
    res.status(status).json({ error: errors });
  }
}
