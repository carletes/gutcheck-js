module("content");

test("Text() constructor", function () {
    expect(6);

    var text = new GutCheck.Text();
    ok(text, "No-arg constructor");
    equals(text.paragraphs.length, 0, "Too many paragraphs");

    text = new GutCheck.Text("");
    ok(text, "Empty arg constructor");
    equals(text.paragraphs.length, 0, "Too many paragraphs");

    text = new GutCheck.Text("foo");
    ok(text, "Constructor with text");
    ok(text.paragraphs.length > 0, "Too few paragraphs");
});

test("Paragraphs", function () {
    expect(25);

    var text = new GutCheck.Text("foo");
    equals(text.paragraphs.length, 1);
    var lines = text.paragraphs[0].lines;
    equals(lines.length, 1);
    equals(lines[0].text, "foo");

    text = new GutCheck.Text("foo\n");
    equals(text.paragraphs.length, 1);
    lines = text.paragraphs[0].lines;
    equals(lines.length, 1);
    equals(lines[0].text, "foo");

    text = new GutCheck.Text("foo\nbar");
    equals(text.paragraphs.length, 1);
    lines = text.paragraphs[0].lines;
    equals(lines.length, 2);
    equals(lines[0].text, "foo");
    equals(lines[1].text, "bar");

    text = new GutCheck.Text("foo\nbar\nbaz");
    equals(text.paragraphs.length, 1);
    lines = text.paragraphs[0].lines;
    equals(lines.length, 3);
    equals(lines[0].text, "foo");
    equals(lines[1].text, "bar");
    equals(lines[2].text, "baz");

    text = new GutCheck.Text("foo\nbar\n\nbaz");
    equals(text.paragraphs.length, 2);
    lines = text.paragraphs[0].lines;
    equals(lines.length, 2);
    equals(lines[0].text, "foo");
    equals(lines[1].text, "bar");
    lines = text.paragraphs[1].lines;
    equals(lines[0].text, "baz");

    text = new GutCheck.Text("foo\nbar\n\n\nbaz");
    equals(text.paragraphs.length, 2);
    lines = text.paragraphs[0].lines;
    equals(lines.length, 2);
    equals(lines[0].text, "foo");
    equals(lines[1].text, "bar");
    lines = text.paragraphs[1].lines;
    equals(lines[0].text, "baz");
});

test("Line terminators", function () {
    expect(5);

    var lines = new GutCheck.Text("foo\nbar").lines;
    equals(lines.length, 2, "LF");

    lines = new GutCheck.Text("foo\r\nbar").lines;
    equals(lines.length, 2, "CR-LF");

    lines = new GutCheck.Text("foo\n\rbar").lines;
    equals(lines.length, 2, "LF-CR");

    lines = new GutCheck.Text("foo\rbar").lines;
    equals(lines.length, 2, "CR (you never know...)");

    lines = new GutCheck.Text("foo\r\nbar\nbaz").lines;
    equals(lines.length, 3, "CR-LF and LF");
});

test("Line numbers", function () {
    expect(11);

    var lines = new GutCheck.Text("foo\nbar").lines;
    equals(lines[0].lineNumber, 0);
    equals(lines[1].lineNumber, 1);

    lines = new GutCheck.Text("foo\n\nbar").lines;
    equals(lines[0].lineNumber, 0);
    equals(lines[1].lineNumber, 1);
    equals(lines[2].lineNumber, 2);

    lines = new GutCheck.Text("foo\n\nbar\n\n").lines;
    equals(lines[0].lineNumber, 0);
    equals(lines[1].lineNumber, 1);
    equals(lines[2].lineNumber, 2);
    equals(lines[3].lineNumber, 3);
    equals(lines[4].lineNumber, 4);
    equals(lines[2].lineNumber, 2);
});

test("Words", function () {
    expect(13);

    var words = new GutCheck.Text("foo").words;
    equals(words.length, 1);
    equals(words[0].text, "foo");
    equals(words[0].lineNumber, 0);

    words = new GutCheck.Text("foo bar").words;
    equals(words.length, 2);
    equals(words[0].text, "foo");
    equals(words[0].lineNumber, 0);
    equals(words[1].text, "bar");
    equals(words[1].lineNumber, 0);

    words = new GutCheck.Text("\tfoo    bar").words;
    equals(words.length, 2);
    equals(words[0].text, "foo");
    equals(words[0].lineNumber, 0);
    equals(words[1].text, "bar");
    equals(words[1].lineNumber, 0);
});
