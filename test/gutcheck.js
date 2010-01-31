module("gutcheck");

test("Plugin registration", function () {
    expect(2);

    var plugins = GutCheck.plugins;
    equals(plugins.length, 1);
    equals(plugins[0].name, "Basic checks");
});
