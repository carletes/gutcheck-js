module("plugins");

test("Constructor", function () {
    expect(2);

    var p = new GutCheck.Plugin("Test plugin");
    ok(p);
    equals(p.active, false);
});

test("Line checks", function () {
    expect(3);

    var p = new GutCheck.Plugin("Test plugin");
    p.lineCheck("Line check 1", function (ctx, line) { ctx.error(line); });
    p.lineCheck("Line check 2", function (ctx, line) { ctx.error(line); });
    equals(p.lineChecks.length, 2);
    equals(p.lineChecks[0].message, "Line check 1");
    equals(p.lineChecks[1].message, "Line check 2");
});

test("Paragraph checks", function () {
    expect(3);

    var p = new GutCheck.Plugin("Test plugin");
    p.paragraphCheck("Paragraph check 1", function (ctx, p) { ctx.error(p); });
    p.paragraphCheck("Paragraph check 2", function (ctx, p) { ctx.error(p); });
    equals(p.paragraphChecks.length, 2);
    equals(p.paragraphChecks[0].message, "Paragraph check 1");
    equals(p.paragraphChecks[1].message, "Paragraph check 2");
});

test("Word checks", function () {
    expect(3);

    var p = new GutCheck.Plugin("Test plugin");
    p.wordCheck("Word check 1", function (ctx, word) { ctx.error(word); });
    p.wordCheck("Word check 2", function (ctx, word) { ctx.error(word); });
    equals(p.wordChecks.length, 2);
    equals(p.wordChecks[0].message, "Word check 1");
    equals(p.wordChecks[1].message, "Word check 2");
});

test("Execution", function () {
    expect(11);

    var sampleText = new GutCheck.Text("Foo\nBar\n\nBaz");
    var ctx = new Context();
    var p = new GutCheck.Plugin("Test plugin");
    p.lineCheck("Line check 1", function (ctx, line) { ctx.error(line); });
    p.lineCheck("Line check 2", function (ctx, line) { ctx.error(line); });
    p.paragraphCheck("Paragraph check 1", function (ctx, p) { ctx.error(p); });
    p.paragraphCheck("Paragraph check 2", function (ctx, p) { ctx.error(p); });
    p.wordCheck("Word check 1", function (ctx, word) { ctx.error(word); });
    p.wordCheck("Word check 2", function (ctx, word) { ctx.error(word); });

    equals(p.active, false);
    p.checkLine(ctx, sampleText.lines[0]);
    p.checkParagraph(ctx, sampleText.paragraphs[0]);
    p.checkWord(ctx, sampleText.words[0]);
    equals(ctx.errors.length, 0);

    p.active = true;

    p.checkLine(ctx, sampleText.lines[0]);
    equals(ctx.errors.length, 2);
    equals(ctx.errors[0].message, "Line check 1");
    equals(ctx.errors[1].message, "Line check 2");

    p.checkParagraph(ctx, sampleText.paragraphs[0]);
    equals(ctx.errors.length, 4);
    equals(ctx.errors[2].message, "Paragraph check 1");
    equals(ctx.errors[3].message, "Paragraph check 2");

    p.checkWord(ctx, sampleText.words[0]);
    equals(ctx.errors.length, 6);
    equals(ctx.errors[4].message, "Word check 1");
    equals(ctx.errors[5].message, "Word check 2");
});
