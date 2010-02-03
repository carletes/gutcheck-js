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

var plugins = [];

return {
    plugins: plugins,

    activatePlugin: function (name) {
        plugins.forEach(function (p) {
            if (p.name === name) {
               p.active = true;
            }
        });
    },

    newPlugin: function (name) {
        var p = new GutCheck.Plugin(name);
        plugins.push(p);
        return p;
    },

    run: function (ctx, text) {
        plugins.forEach(function (p) {
            if (p.active) {
                text.paragraphs.forEach(function (para) {
                    p.checkParagraph(ctx, para);
                    para.lines.forEach(function (line) {
                        p.checkLine(ctx, line);
                    });
                });
                text.words.forEach(function (word) {
                    p.checkWord(ctx, word);
                });
            }
        });
    }
};

})();
