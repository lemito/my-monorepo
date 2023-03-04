goog.provide('io.bazel.rules.closure.GreeterProto');

goog.require('goog.soy');
goog.require('io.bazel.rules.closure.soy.protoGreeter');
goog.require('proto.io.bazel.rules.closure.soy.Person');



/**
 * Greeter page.
 * @param {string} name Name of person to greet.
 * @param {string} lastname Surname of person to greet.
 * @constructor
 * @final
 */
io.bazel.rules.closure.GreeterProto = function(name, lastname) {

  /**
   * Name of person to greet.
   * @private {string}
   * @const
   */
  this.name_ = name;

    /**
   * surname of person to greet.
   * @private {string}
   * @const
   */
    this.lastname_ = lastname;
};


/**
 * Renders HTML greeting as document body.
 */
io.bazel.rules.closure.GreeterProto.prototype.greet = function() {
  var person = new proto.io.bazel.rules.closure.soy.Person();
  person.setName(this.name_);
  person.setLastname(this.lastname_);

  goog.soy.renderElement(goog.global.document.body,
                         io.bazel.rules.closure.soy.protoGreeter.greet,
                         {person: person});
};