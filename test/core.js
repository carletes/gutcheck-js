module("core");

GutCheck.activatePlugin("Basic checks");

var ctx = new Context();


test("Angled bracket with 'From'", function () {
    expect(10);

    var text = new GutCheck.Text("Blah blah");
    ctx.clear();
    GutCheck.run(ctx, text);
    equals(ctx.errors.length, 0);

    text = new GutCheck.Text("Blah blah >From");
    ctx.clear();
    GutCheck.run(ctx, text);
    equals(ctx.errors.length, 1);
    equals(ctx.errors[0].message, "Angled bracket with 'From'");
    equals(ctx.errors[0].lineNumber, 0);

    text = new GutCheck.Text("Lorem ipsum dolor sit amet, consectetur adipisicing elit\nBlah blah >From");
    ctx.clear();
    GutCheck.run(ctx, text);
    equals(ctx.errors.length, 1);
    equals(ctx.errors[0].message, "Angled bracket with 'From'");
    equals(ctx.errors[0].lineNumber, 1);

    text = new GutCheck.Text("Lorem ipsum dolor sit amet, consectetur adipisicing elit\n\n\nBlah blah >From");
    ctx.clear();
    GutCheck.run(ctx, text);
    equals(ctx.errors.length, 1);
    equals(ctx.errors[0].message, "Angled bracket with 'From'");
    equals(ctx.errors[0].lineNumber, 3);
});

test("Forward slash character", function () {
    expect(4);

    var text = new GutCheck.Text("Blah blah");
    ctx.clear();
    GutCheck.run(ctx, text);
    equals(ctx.errors.length, 0);

    text = new GutCheck.Text("Blah\\blah");
    ctx.clear();
    GutCheck.run(ctx, text);
    equals(ctx.errors.length, 1);
    equals(ctx.errors[0].message, "Forward slash character");
    equals(ctx.errors[0].lineNumber, 0);
});

test("Hyphen at end of line", function () {
    expect(4);

    var text = new GutCheck.Text("Blah blah");
    ctx.clear();
    GutCheck.run(ctx, text);
    equals(ctx.errors.length, 0);

    text = new GutCheck.Text("Blah-");
    ctx.clear();
    GutCheck.run(ctx, text);
    equals(ctx.errors.length, 1);
    equals(ctx.errors[0].message, "Hyphen at end of line");
    equals(ctx.errors[0].lineNumber, 0);
});

test("Long line", function () {
    expect(7);

    var text = new GutCheck.Text("Blah blah");
    ctx.clear();
    GutCheck.run(ctx, text);
    equals(ctx.errors.length, 0);

    text = new GutCheck.Text("123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789");
    ctx.clear();
    GutCheck.run(ctx, text);
    equals(ctx.errors.length, 1);
    equals(ctx.errors[0].message, "Long line");
    equals(ctx.errors[0].lineNumber, 0);


    text = new GutCheck.Text("Lorem ipsum dolor sit amet, consectetur adipisicing elit\n123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789");
    ctx.clear();
    GutCheck.run(ctx, text);
    equals(ctx.errors.length, 1);
    equals(ctx.errors[0].message, "Long line");
    equals(ctx.errors[0].lineNumber, 1);
});

test("Paragraph starts with lowercase", function () {
    expect(13);

    var text = new GutCheck.Text("Blah blah");
    ctx.clear();
    GutCheck.run(ctx, text);
    equals(ctx.errors.length, 0);

    text = new GutCheck.Text("blah blah");
    ctx.clear();
    GutCheck.run(ctx, text);
    equals(ctx.errors.length, 1);
    equals(ctx.errors[0].message, "Paragraph starts with lowercase");
    equals(ctx.errors[0].lineNumber, 0);

    text = new GutCheck.Text("   blah blah");
    ctx.clear();
    GutCheck.run(ctx, text);
    equals(ctx.errors.length, 1);
    equals(ctx.errors[0].message, "Paragraph starts with lowercase");
    equals(ctx.errors[0].lineNumber, 0);

    text = new GutCheck.Text("\"blah blah,\" he said");
    ctx.clear();
    GutCheck.run(ctx, text);
    equals(ctx.errors.length, 1);
    equals(ctx.errors[0].message, "Paragraph starts with lowercase");
    equals(ctx.errors[0].lineNumber, 0);

    text = new GutCheck.Text("Lorem ipsum dolor sit amet, consectetur adipisicing elit\n\nblah blah");
    ctx.clear();
    GutCheck.run(ctx, text);
    equals(ctx.errors.length, 1);
    equals(ctx.errors[0].message, "Paragraph starts with lowercase");
    equals(ctx.errors[0].lineNumber, 2);
});

test("Short line", function () {
    expect(12);

    var text = new GutCheck.Text("Blah blah");
    ctx.clear();
    GutCheck.run(ctx, text);
    equals(ctx.errors.length, 0);

    text = new GutCheck.Text("Blah blah\nBlah blah");
    ctx.clear();
    GutCheck.run(ctx, text);
    equals(ctx.errors.length, 1);
    equals(ctx.errors[0].message, "Short line");
    equals(ctx.errors[0].lineNumber, 0);

    text = new GutCheck.Text("Blah blah\nBlah blah\nFoo");
    ctx.clear();
    GutCheck.run(ctx, text);
    equals(ctx.errors.length, 2);
    equals(ctx.errors[0].message, "Short line");
    equals(ctx.errors[0].lineNumber, 0);
    equals(ctx.errors[1].message, "Short line");
    equals(ctx.errors[1].lineNumber, 1);

    text = new GutCheck.Text(" A verse\n Another verse\nA short line\n And a last verse");
    ctx.clear();
    GutCheck.run(ctx, text);
    equals(ctx.errors.length, 1);
    equals(ctx.errors[0].message, "Short line");
    equals(ctx.errors[0].lineNumber, 2);
});

test("Tab character", function () {
    expect(4);

    var text = new GutCheck.Text("Blah blah");
    ctx.clear();
    GutCheck.run(ctx, text);
    equals(ctx.errors.length, 0);

    text = new GutCheck.Text("Blah\tblah");
    ctx.clear();
    GutCheck.run(ctx, text);
    equals(ctx.errors.length, 1);
    equals(ctx.errors[0].message, "Tab character");
    equals(ctx.errors[0].lineNumber, 0);
});
