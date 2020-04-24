const terminalDisplay = (message, end) => {
  console.log("//////////ERROR////////////");
  console.log(message);

  if (end) {
    process.exit();
  }
};

const errorManager = {
  handleError: err => {
    switch (true) {
      case err.code === "ENOTFOUND":
        terminalDisplay("Failed to fetch URL", err, true);
        break;
      case err.code === "LDA_FAIL":
        terminalDisplay(err.message, false);
        break;
      case err.code === "REQUEST_FAIL":
        terminalDisplay(err.message, false);
        break;
      case err.code === "RESPONSE_ERROR":
        break;
      case !!err.message:
        terminalDisplay(err.message, true);
        break;
      default:
        terminalDisplay("Unknown Error", true);
    }
  },
  terminalDisplay
};

module.exports = errorManager;
