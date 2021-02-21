// Constant imports
import LOG_TYPE from '../constants/TestConstants';

// Local variables
let testing = true;
let testingUserInteraction = false;
let api = true;
let connection = true;
let auth = true;
let log = true;
let redux = true;
let intercept = true;
let screen = true;
let button_click = true;
let swipe = true;
let page_view = true;

let FgRed = '\x1b[31m';
let FgGreen = '\x1b[32m';
let FgYellow = '\x1b[33m';
let FgCyan = '\x1b[36m';
let FgMagenta = '\u001b[35m';

let BgBlue = '\u001b[44;1m';
let BgMagenta = '\u001b[45;1m';
let BgCyan = '\u001b[46;1m';
let BgBlack = '\u001b[40m';

// Local functions
const screenLoaded = (type = LOG_TYPE.SCREEN, msg = '', from = '') => {
  if (testing) {
    if (screen && type == LOG_TYPE.SCREEN) {
      console.log(`${type}`, `${JSON.stringify(msg)}`, `${from}`);
    }
  }
};

const good = (type = LOG_TYPE.LOG, msg = '', from = '') => {
  if (testing) {
    if (api && type == LOG_TYPE.API) {
      console.log(`Successful ${type}`, `${JSON.stringify(msg)}`, `${from}`);
    }
    if (connection && type == LOG_TYPE.CON) {
      console.log(`Successful ${type}`, `${JSON.stringify(msg)}`, `${from}`);
    }
    if (log && type == LOG_TYPE.LOG) {
      console.log(`Successful ${type}`, `${JSON.stringify(msg)}`, `${from}`);
    }
    if (intercept && type == LOG_TYPE.INTERCEPT) {
      console.log(`Successful ${type}`, `${JSON.stringify(msg)}`, `${from}`);
    }
    if (auth && type == LOG_TYPE.AUTH) {
      console.log(`Successful ${type}`, `${JSON.stringify(msg)}`, `${from}`);
    }
    if (redux && type == LOG_TYPE.REDUX) {
      console.log(`Successful ${type}`, `${JSON.stringify(msg)}`, `${from}`);
    }
  }
};

const warn = (type = LOG_TYPE.LOG, msg = '', from = '') => {
  if (testing) {
    if (api && type == LOG_TYPE.API) {
      console.log(`Warn ${type}`, `${JSON.stringify(msg)}`, `${from}`);
    }
    if (connection && type == LOG_TYPE.CON) {
      console.log(`Warn ${type}`, `${JSON.stringify(msg)}`, `${from}`);
    }
    if (log && type == LOG_TYPE.LOG) {
      console.log(`Warn ${type}`, `${JSON.stringify(msg)}`, `${from}`);
    }
    if (intercept && type == LOG_TYPE.INTERCEPT) {
      console.log(`Warn ${type}`, `${JSON.stringify(msg)}`, `${from}`);
    }
    if (auth && type == LOG_TYPE.AUTH) {
      console.log(`Warn ${type}`, `${JSON.stringify(msg)}`, `${from}`);
    }
    if (redux && type == LOG_TYPE.REDUX) {
      console.log(`Warn ${type}`, `${JSON.stringify(msg)}`, `${from}`);
    }
  }
};

const bad = (type = LOG_TYPE.LOG, msg = '', from = '') => {
  if (testing) {
    if (api && type == LOG_TYPE.API) {
      console.log(`! FAILED ! ${type}`, `${JSON.stringify(msg)}`, `${from}`);
    }
    if (connection && type == LOG_TYPE.CON) {
      console.log(`! FAILED ! ${type}`, `${JSON.stringify(msg)}`, `${from}`);
    }
    if (log && type == LOG_TYPE.LOG) {
      console.log(`! FAILED ! ${type}`, `${JSON.stringify(msg)}`, `${from}`);
    }
    if (intercept && type == LOG_TYPE.INTERCEPT) {
      console.log(`! FAILED ! ${type}`, `${JSON.stringify(msg)}`, `${from}`);
    }
    if (auth && type == LOG_TYPE.AUTH) {
      console.log(`! FAILED ! ${type}`, `${JSON.stringify(msg)}`, `${from}`);
    }
    if (redux && type == LOG_TYPE.REDUX) {
      console.log(`! FAILED ! ${type}`, `${JSON.stringify(msg)}`, `${from}`);
    }
  }
};

export {good, warn, bad, screenLoaded};
