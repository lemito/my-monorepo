extern crate hello_lib;

// test gate is not usually required in an integration test, but the BUILD
// script is using this file to test cdylib compilation as well, and when
// compiled in that mode, greeter is an unused import.
#[cfg(test)]
use hello_lib::greeter;

#[test]
fn test_greeting() {
    let hello = greeter::Greeter::new("Hello");
    assert_eq!("Hello world", hello.greeting("world"));
}