module("gutcheck");

test("Plugin registration", function () {
    expect(3);

    var plugins = GutCheck.plugins;
    equals(plugins.length, 2);
    equals(plugins[0].name, "Basic checks");
    equals(plugins[1].name, "English language checks");
});
