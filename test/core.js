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

test("Short line", function () {
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

    text = new GutCheck.Text(" A verse\n Another verse");
    ctx.clear();
    GutCheck.run(ctx, text);
    equals(ctx.errors.length, 0);
});
