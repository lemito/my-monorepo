goog.require('goog.asserts');
goog.require('goog.testing.asserts');
goog.require('goog.testing.jsunit');
goog.require('io.bazel.rules.closure.GreeterProto');


function testGreet() {
  var greeter = new io.bazel.rules.closure.GreeterProto('Andy', 'Schtoike');
  greeter.greet();
  var body = document.body;
  goog.asserts.assert(body != null);
  assertHTMLEquals('<p>Hello <b>Andy</b>!', body.innerHTML);
}