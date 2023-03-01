goog.provide('io.bazel.rules.closure.GreeterProto');

goog.require('goog.soy');
goog.require('io.bazel.rules.closure.soy.protoGreeter');
goog.require('proto.io.bazel.rules.closure.soy.Person');



/**
 * Greeter page.
 * @param {string} name Name of person to greet.
 * @constructor
 * @final
 */
io.bazel.rules.closure.GreeterProto = function(name) {

  /**
   * Name of person to greet.
   * @private {string}
   * @const
   */
  this.name_ = name;
};


/**
 * Renders HTML greeting as document body.
 */
io.bazel.rules.closure.GreeterProto.prototype.greet = function() {
  var person = new proto.io.bazel.rules.closure.soy.Person();
  person.setName(this.name_);

  goog.soy.renderElement(goog.global.document.body,
                         io.bazel.rules.closure.soy.protoGreeter.greet,
                         {person: person});
};