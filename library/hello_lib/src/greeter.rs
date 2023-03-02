pub struct Greeter {
    greeting: String,
}

impl Greeter {
    pub fn new(greeting: &str) -> Greeter {
        Greeter {
            greeting: greeting.to_string(),
        }
    }

    pub fn greeting(&self, thing: &str) -> String {
        format!("{} {}", &self.greeting, thing)
    }

    pub fn greet(&self, thing: &str) {
        println!("{} {}", &self.greeting, thing);
    }
}

#[cfg(test)]
mod test {
    use super::Greeter;

    #[test]
    fn test_greeting() {
        let hello = Greeter::new("Hi");
        assert_eq!("Hi Rust", hello.greeting("Rust"));
    }
}