// english.js
//
// Checks specific to the English language.
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

var plugin = GutCheck.newPlugin("English language checks");

var commonTypos = [
    "teh", "th", "og", "fi", "ro", "adn", "yuo", "ot", "fo", "thet", "ane",
    "nad", "te", "ig", "acn",  "ahve", "alot", "anbd", "andt", "awya",
    "aywa", "bakc", "om", "btu", "byt", "cna", "cxan", "coudl", "dont",
    "didnt", "couldnt", "wouldnt", "doesnt", "shouldnt", "doign", "ehr",
    "hmi", "hse", "esle", "eyt", "fitrs", "firts", "foudn", "frmo", "fromt",
    "fwe", "gaurd", "gerat", "goign", "gruop", "haev", "hda", "hearign",
    "seeign", "sayign", "herat", "hge", "hsa", "hsi", "hte", "htere",
    "htese", "htey", "htis", "hvae", "hwich", "idae", "ihs", "iits", "int",
    "iwll", "iwth", "jsut", "loev", "sefl", "myu", "nkow", "nver", "nwe",
    "nwo", "ocur", "ohter", "omre", "onyl", "otehr", "otu", "owrk", "owuld",
    "peice", "peices", "peolpe", "peopel", "perhasp", "perhpas", "pleasent",
    "poeple", "porblem", "porblems", "rwite", "saidt", "saidh", "saids",
    "seh", "smae", "smoe", "sohw", "stnad", "stopry", "stoyr", "stpo",
    "tahn", "taht", "tath", "tehy", "tghe", "tghis", "theri", "theyll",
    "thgat", "thge", "thier", "thna", "thne", "thnig", "thnigs", "thsi",
    "thsoe", "thta", "timne", "tirne", "tkae", "tthe", "tyhat", "tyhe",
    "veyr", "vou", "vour", "vrey", "waht", "wasnt", "awtn", "watn", "wehn",
    "whic", "whcih", "whihc", "whta", "wihch", "wief", "wiht", "witha",
    "wiull", "wnat", "wnated", "wnats", "woh", "wohle", "wokr", "woudl",
    "wriet", "wrod", "wroet", "wroking", "wtih", "wuould", "wya", "yera",
    "yeras", "yersa", "yoiu", "youve", "ytou", "yuor",

    // added h/b words for version 12 - removed a few with "tbe" v.25
    "abead", "ahle", "ahout", "ahove", "altbough", "balf", "bardly", "bas",
    "bave", "baving", "bebind","beld", "belp", "belped", "ber", "bere",
    "bim", "bis", "bome", "bouse", "bowever", "buge", "dehates", "deht",
    "han", "hecause", "hecome", "heen", "hefore", "hegan", "hegin",
    "heing","helieve", "henefit", "hetter", "hetween", "heyond", "hig",
    "higber", "huild", "huy", "hy", "jobn", "joh", "meanwbile", "memher",
    "memhers", "numher", "numhers","perbaps", "prohlem", "puhlic",
    "witbout",

    // and a few more for .18
    "arn", "hin", "hirn", "wrok", "wroked", "amd", "aud",
    "prornise", "prornised", "modem", "bo", "heside", "chapteb", "chaptee",
    "se"
];

var goodWords = [
    // Common abbreviations and other OK words not to query as typos.
    "mr", "mrs", "mss", "mssrs", "ft", "pm", "st", "dr", "hmm", "h'm",
    "hmmm", "rd", "sh", "br", "pp", "hm", "cf", "jr", "sr", "vs", "lb",
    "lbs", "ltd", "pompeii","hawaii","hawaiian", "hotbed", "heartbeat",
    "heartbeats", "outbid", "outbids", "frostbite", "frostbitten"
];

var abbreviations = [
    // Common abbreviations that cause otherwise unexplained periods.
    "cent", "cents", "viz", "vol", "vols", "vid", "ed", "al", "etc", "op",
    "cit", "deg", "min", "chap", "oz", "mme", "mlle", "mssrs"
];

var notAtStart = [
    // Two-Letter combinations that rarely if ever start words, but are common
    // scannos or otherwise common letter combinations.
    "hr", "hl", "cb", "sb", "tb", "wb", "tl", "tn", "rn", "lt", "tj"
];

var notAtEnd = [
    // Two-Letter combinations that rarely if ever end words, but are common
    // scannos or otherwise common letter combinations.
    "cb", "gb", "pb", "sb", "tb", "wh", "fr", "br", "qu", "tw", "gl",
    "fl", "sw", "gr", "sl", "cl", "iy"
];

var commonScannos = [
    "cb", "gbt", "pbt", "tbs", "mrn", "ahle", "ihle", "tbi", "tbe", "ii"
];

//
// Word-level checks.
//

plugin.checkWord("Scanno", function scannos(ctx, word) {
});

plugin.checkWord("Single-character word", function (ctx, word) {
});

plugin.checkWord("Typo", function typos(ctx, word) {
});

plugin.checkWord("Unusual word end", function (ctx, word) {
});

plugin.checkWord("Unusual word start", function (ctx, word) {
});

plugin.checkWord("Upper-case leter in midword", function (ctx, word) {
});


//
// Line-level checks.
//

plugin.lineCheck("'I' for '!'", function (ctx, line) {
});

//
// Paragraph-level checks.
//

plugin.paragraphCheck("had/bad error", function (ctx, para) {
});

plugin.paragraphCheck("he/be error", function (ctx, para) {
});

plugin.paragraphCheck("hut/but error", function (ctx, para) {
});

})();
