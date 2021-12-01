const errorHandler = (err, req, res, next) => {
  if (err.name === 'UnauthorizedError') {
    res.status(403);
  }
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  res.status(statusCode);
  res.json({
    message: err.message,
    statusCode: statusCode,
  });
};

module.exports = { errorHandler };
