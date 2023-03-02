load("@io_bazel_rules_closure//closure:defs.bzl", "closure_java_template_library", "closure_js_binary", "closure_js_library", "closure_js_proto_library", "closure_js_template_library", "closure_js_test", "closure_templates_plugin")
load("//closure/private:file_test.bzl", "file_test")

closure_js_proto_library(
    name = "person_proto",
    srcs = ["person.proto"],
)

closure_js_template_library(
    name = "greeter_soy",
    srcs = ["greeter.soy"],
)

file_test(
    name = "nonlocalized_test",
    size = "small",
    file = ":greeter.soy.js",
    invert = True,
    regexp = "goog.getMsg",
)

closure_js_template_library(
    name = "greeter_proto_soy",
    srcs = ["greeter_proto.soy"],
    deps = [
        ":greeter_soy",
        ":person_proto",
    ],
)

#closure_js_library(
closure_js_library(
    name = "greeter_lib",
    srcs = ["greeter.js"],
    suppress = ["useOfGoogProvide"],
    deps = [
        ":greeter_soy",
        #"@com_google_javascript_closure_library//closure/goog/soy"
        "//closure/goog/soy",
    ],
)

closure_js_library(
    name = "greeter_proto_lib",
    srcs = ["greeter_proto.js"],
    suppress = ["useOfGoogProvide"],
    deps = [
        ":greeter_proto_soy",
        ":person_proto",
        "//closure/goog/soy",
    ],
)

closure_js_test(
    name = "greeter_test",
    timeout = "short",
    srcs = ["greeter_test.js"],
    deps = [
        ":greeter_lib",
        "//closure/goog/asserts",
        "//closure/goog/testing:asserts",
        "//closure/goog/testing:jsunit",
    ],
)

closure_js_test(
    name = "greeter_proto_test",
    timeout = "short",
    srcs = ["greeter_proto_test.js"],
    deps = [
        ":greeter_proto_lib",
        "//closure/goog/asserts",
        "//closure/goog/testing:asserts",
        "//closure/goog/testing:jsunit",
    ],
)

closure_java_template_library(
    name = "greeter_soy_java",
    srcs = ["greeter.soy"],
    java_package = "io.bazel.rules.closure.soy.greeter",
)

closure_js_binary(
    name = "greeter_proto_bin",
    deps = [":greeter_proto_lib"],
)

closure_js_binary(
    name = "greeter_bin",
    deps = [":greeter_lib"],
)

'''file_test(
    name = "greeter_java_generated",
    size = "small",
    file = "GreeterSoyInfo.java",
    regexp = "class GreeterSoyInfo",
)'''

closure_java_template_library(
    name = "greeter2_soy_java",
    srcs = ["greeter2.soy"],
    java_package = "io.bazel.rules.closure.soy.greeter",
    deps = [
        ":greeter_soy",
    ],
)

'''file_test(
    name = "greeter2_java_generated",
    size = "small",
    file = "Greeter2SoyInfo.java",
    regexp = "class Greeter2SoyInfo",
)'''
