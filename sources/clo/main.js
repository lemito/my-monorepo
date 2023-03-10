goog.provide("app.main");

/**
 * Main entry point for the browser application.
 * @export
 */
app.main = function () {
  const App = goog.require("io.bazel.rules.closure.soy.globals.hello");
  const app = new App();
  app.render(document.body);
  app.start();
};