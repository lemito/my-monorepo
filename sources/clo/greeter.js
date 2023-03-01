goog.provide('io.bazel.rules.closure.Greeter');

goog.require('goog.soy');
goog.require('io.bazel.rules.closure.soy.greeter');



/**
 * Greeter page.
 * @param {string} name Name of person to greet.
 * @constructor
 * @final
 */
io.bazel.rules.closure.Greeter = function(name) {

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
io.bazel.rules.closure.Greeter.prototype.greet = function() {
  goog.soy.renderElement(goog.global.document.body,
                         io.bazel.rules.closure.soy.greeter.greet,
                         {name: this.name_});
};