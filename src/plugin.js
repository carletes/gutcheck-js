// plugin.js
//
// Plugin support.
//
// Copyright (C) 2009 Carlos Valiente <carlos@pepelabs.net>
//
// This program is free software; you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation; either version 3 of the License, or
// (at your option) any later version.
//
// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
//
// You should have received a copy of the GNU General Public License
// along with this program; if not, write to the
//      Free Software Foundation, Inc., 
//      59 Temple Place,
//      Suite 330,
//      Boston, MA  02111-1307  USA

(function (module) {

var Plugin = function (name) {
    this.name = name;
    this.active = false;
    this.wordChecks = [];
    this.lineChecks = [];
    this.paragraphChecks = [];
}

function pushCheck(message, fn, checks) {
    checks.push(fn);
    fn.message = message;
    fn.active = true;
}

Plugin.prototype.lineCheck = function (message, fn) {
    pushCheck(message, fn, this.lineChecks);
}

Plugin.prototype.paragraphCheck = function (message, fn) {
    pushCheck(message, fn, this.paragraphChecks);
}

Plugin.prototype.wordCheck = function (message, fn) {
    pushCheck(message, fn, this.wordChecks);
}

function runChecks (checks, ctx, what) {
    checks.forEach(function (check) {
        if (!check.active) {
            return;
        }
        ctx.message = check.message;
        check(ctx, what);
    });
}

Plugin.prototype.checkLine = function (ctx, line) {
    if (this.active) {
        runChecks(this.lineChecks, ctx, line);
    }
}

Plugin.prototype.checkParagraph = function (ctx, para) {
    if (this.active) {
        runChecks(this.paragraphChecks, ctx, para);
    }
}

Plugin.prototype.checkWord = function (ctx, word) {
    if (this.active) {
        runChecks(this.wordChecks, ctx, word);
    }
}

module.Plugin = Plugin;

})(GutCheck);
