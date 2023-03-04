goog.module('j2cl.samples.app');

const HelloGuava = goog.require('com.google.j2cl.samples.guava.HelloGuava');

document.body.innerText = HelloGuava.getHelloWorld();