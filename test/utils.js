var Context = function (message) {
    this.message = message;
    this.errors = [];
}

Context.prototype.error = function (loc, lineOffset) {
    this.errors.push({ message: this.message,
                       lineNumber: loc.lineNumber,
                       lineOffset: lineOffset });
}

Context.prototype.clear = function () {
    this.errors = [];
}
