all:
	bazel build //sources/app:app
bazel-clean:
	bazel clean
run-a:
	bazel run //sources/app:app
greet_l:
	bazel build //sources/clo:greeter_lib
greet_b:
	bazel build //sources/clo:greeter_bin
bb:
	bazel build //sources/hello-rust:fibonacci_test --platforms=//sources/hello-rust:linux-armv7
dd:
	bazel build //sources/clo:bundle