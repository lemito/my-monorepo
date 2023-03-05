goog.module('j2cl.samples.hello');

const HelloWorld = goog.require('com.google.j2cl.samples.helloworldlib.HelloWorld');

/**
 * Says hello to console!
 *
 * @return {void}
 */
function sayHello() {
  document.body.innerText = `${HelloWorld.getHelloWorld()} and JS!`;
}

exports = {sayHello};