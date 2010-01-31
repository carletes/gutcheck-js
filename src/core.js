// core.js
//
// Basic checks.
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

(function () {

var plugin = GutCheck.newPlugin("Basic checks");

//
// Word-level checks.
//

plugin.wordCheck("Digit in word", function (ctx, word) {
});

//
// Line-level checks.
//

plugin.lineCheck("Angled bracket with 'From'", function (ctx, line) {
});

plugin.lineCheck("Asterisk character", function (ctx, line) {
});

plugin.lineCheck("Capital \"S\"", function (ctx, line) {
});

plugin.lineCheck("Carat character", function (ctx, line) {
});

plugin.lineCheck("Control character", function (ctx, line) {
});

plugin.lineCheck("Forward slash character", function (ctx, line) {
});

plugin.lineCheck("HTML symbol", function (ctx, line) {
});

plugin.lineCheck("Hypen at end of line", function (ctx, line) {
});

plugin.lineCheck("Long line", function (ctx, line) {
});

plugin.lineCheck("Missing paragraph break", function (ctx, line) {
});

plugin.lineCheck("Non-ASCII character", function (ctx, line) {
});

plugin.lineCheck("Non-ISO-8859 character", function (ctx, line) {
});

plugin.lineCheck("Single character line", function (ctx, line) {
});

plugin.lineCheck("Spaced dash", function (ctx, line) {
});

plugin.lineCheck("Spaced doublequote", function (ctx, line) {
});

plugin.lineCheck("Spaced em-dash", function (ctx, line) {
});

plugin.lineCheck("Spaced punctuation", function (ctx, line) {
});

plugin.lineCheck("Spaced singlequote", function (ctx, line) {
});

plugin.lineCheck("Starts with punctuation", function (ctx, line) {
});

plugin.lineCheck("Suspicious punctuation", function (ctx, line) {
});

plugin.lineCheck("Tab character", function (ctx, line) {
});

plugin.lineCheck("Tilde character", function (ctx, line) {
});

plugin.lineCheck("Unspaced bracket", function (ctx, line) {
});

plugin.lineCheck("Unspaced quotes", function (ctx, line) {
});


//
// Paragraph-level checks.
//

plugin.paragraphCheck("Broken em-dash", function (ctx, para) {
});

plugin.paragraphCheck("Mismatched curly brackets", function (ctx, para) {
});

plugin.paragraphCheck("Mismatched doublequotes", function (ctx, para) {
});

plugin.paragraphCheck("Mismatched round brackets", function (ctx, para) {
});

plugin.paragraphCheck("Mismatched singlequotes", function (ctx, para) {
});

plugin.paragraphCheck("Mismatched square brackets", function (ctx, para) {
});

plugin.paragraphCheck("No punctuation at paragraph end", function (ctx, para) {
});

plugin.paragraphCheck("Paragraph starts with lowercase", function (ctx, para) {
});

plugin.paragraphCheck("Short line", function (ctx, para) {
});


})();
