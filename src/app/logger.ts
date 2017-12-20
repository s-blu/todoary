export class Logger {
  debugMode = false;

  debug(msg) {
    if (this.debugMode) {
      console.log(`[debug] ${msg}`);
    }
  }

  info(msg) {
    console.log(`[info] ${msg}`);
  }

  warn(msg) {
    console.log(`[WARN] ${msg}`);
  }

  error(msg) {
    console.log(`[[[ERROR]]] ${msg}`);
  }

  enableDebug() {
    this.debugMode = true;
  }

  disableDebug() {
    this.debugMode = false;
  }
}
