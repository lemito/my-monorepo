goog.provide("io.bazel.rules.closure.soy.globals.main");


/**
 * Main entry point for the browser application.
 * @export
 */
const App = goog.require("io.bazel.rules.closure.soy.globals.hello");
const app = new App();
app.render(document.body);
app.start();