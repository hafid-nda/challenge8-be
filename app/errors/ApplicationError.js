class ApplicationError extends Error {
  get details() {
    return {};
  }
}

module.exports = ApplicationError;
