// content.js
//
// Content-handling code.
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

var Word = function (text, lineNumber) {
    this.text = text;
    this.lineNumber = lineNumber;
}


var Line = function (text, lineNumber) {
    this.text = text.trim();
    this.lineNumber = lineNumber;
    this.parse();
}

Line.prototype.parse = function () {
    this.words = [];
    if (this.text.length > 0) {
        this.empty = false;
        this.text.split(/\s+/).forEach(function (word) {
            if (w !== "") {
                var w = new Word(word, this.lineNumber);
                this.words.push(w);
            }
        }, this);
    } else {
        this.empty = true;
    }
}


var Paragraph = function () {
    this.lines = [];
    this.empty = true;
}

Paragraph.prototype.push = function (line) {
    if (!line.empty) {
        this.lines.push(line);
        this.empty = false;
    }
}


var Text = function (text) {
    this.text = text;
    this.parse();
}

Text.prototype.parse = function () {
    this.words = [];
    this.lines = [];
    this.paragraphs = [];

    if (this.text === undefined || this.text === "") {
        return;
    }

    var p = new Paragraph();
    this.text
        .replace(/\r\n/g, "\n")
        .replace(/\n\r/g, "\n")
        .replace(/\r/g, "\n").split(/\n/).forEach(function (lineText, num) {
            var line = new Line(lineText, num);
            this.lines.push(line);
            this.words = this.words.concat(line.words);
            if (line.empty && !p.empty) {
                this.paragraphs.push(p);
                p = new Paragraph();
            } else {
                p.push(line);
            }
    }, this);
    if (!p.empty) {
        this.paragraphs.push(p);
    }
}


module.Text = Text;

})(GutCheck);
