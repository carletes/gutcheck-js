// gutcheck.js
//
// An implemenation of gutcheck in Javascript.
//
// Copyright 2009, Carlos Valiente <carlos@pepelabs.net>
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

var GutCheck = (function () {

var lineChecks = [],
    paragraphChecks = [],
    wordChecks = [];

var settings = {
    openSingleQuote:  "'",
    closeSingleQuote: "'",
    openDoubleQuote:  "\"",
    closeDoubleQuote: "\""
};

return {
    lineChecks: function () {
        for (var i = 0, n = arguments.length; i < n; ++i) {
            lineCheck.push(arguments[i]);
        }
    },

    paragraphChecks: function () {
        for (var i = 0, n = arguments.length; i < n; ++i) {
            paragraphChecks.push(arguments[i]);
        }
    },

    run: function (textData, context) {
        var text = new Text(textData);
        text.paragraphs.forEach(function (p) {
            paragraphChecks.forEach(function (check) { check(context, p); });

            p.lines.forEach(function (line) {
                lineChecks.forEach(function (check) { check(context, line); });

                line.words.forEach(function (w) {
                    wordChecks.forEach(function (check) { check(context, word); });
                });
            });
        });
    },

    set: function (key, value) {
        if (settings.hasOwnProperty(key)) {
            settings[key] = value;
        }
    },

    wordChecks: function () {
        for (var i = 0, n = arguments.length; i < n; ++i) {
            wordChecks.push(arguments[i]);
        }
    }
};

})();
