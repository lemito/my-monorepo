load("@io_bazel_rules_closure//closure:defs.bzl", "closure_java_template_library", "closure_js_library", "closure_js_proto_library", "closure_js_template_library", "closure_js_test", "closure_templates_plugin")
load("@io_bazel_rules_closure//closure/private:file_test.bzl", "file_test")

closure_js_proto_library(
    name = "person_proto",
    srcs = ["person.proto"],
)

closure_js_template_library(
    name = "greeter_soy",
    srcs = ["greeter.soy"],
)

closure_js_template_library(
    name = "localized_soy",
    srcs = ["localized.soy"],
    should_generate_soy_msg_defs = True,
)

file_test(
    name = "localized_test",
    size = "small",
    file = ":localized.soy.js",
    regexp = "goog.getMsg('Hello",
)

file_test(
    name = "nonlocalized_test",
    size = "small",
    file = ":greeter.soy.js",
    invert = True,
    regexp = "goog.getMsg",
)

closure_js_template_library(
    name = "localized_using_defs_soy",
    srcs = ["defs.soy"],
    defs = [
        "--shouldGenerateGoogMsgDefs=true",
    ],
)

closure_js_template_library(
    name = "plugin_soy",
    srcs = ["plugin.soy"],
    plugins = [":plugin_ExampleModule"],
)

java_library(
    name = "ExampleModule",
    srcs = ["ExampleModule.java"],
    deps = [
        "@com_google_guava",
        "@com_google_inject_extensions_guice_multibindings",
        "@com_google_inject_guice",
        "@com_google_template_soy",
    ],
)

closure_templates_plugin(
    name = "plugin_ExampleModule",
    module = "test.ExampleModule",
    deps = [":ExampleModule"],
)

file_test(
    name = "plugin_test_toLower",
    size = "small",
    file = ":plugin.soy.js",
    regexp = ".toLowerCase()",
)

file_test(
    name = "localized_using_defs_test",
    size = "small",
    file = ":defs.soy.js",
    regexp = "goog.getMsg('Hello",
)

closure_js_template_library(
    name = "greeter_proto_soy",
    srcs = ["greeter_proto.soy"],
    deps = [
        ":greeter_soy",
        ":person_proto",
    ],
)

closure_js_library(
    name = "greeter_lib",
    srcs = ["greeter.js"],
    suppress = ["useOfGoogProvide"],
    deps = [
        ":greeter_soy",
        "//closure-library/closure/goog/soy:soy",
    ],
)

closure_js_library(
    name = "greeter_proto_lib",
    srcs = ["greeter_proto.js"],
    suppress = ["useOfGoogProvide"],
    deps = [
        ":greeter_proto_soy",
        ":person_proto",
        "//closure-library/closure/goog/soy",
    ],
)

closure_js_test(
    name = "greeter_test",
    timeout = "short",
    srcs = ["greeter_test.js"],
    deps = [
        ":greeter_lib",
        "//closure-library/closure/goog/asserts",
        "//closure-library/closure/goog/testing:asserts",
        "//closure-library/closure/goog/testing:jsunit",
    ],
)

closure_js_test(
    name = "greeter_proto_test",
    timeout = "short",
    srcs = ["greeter_proto_test.js"],
    deps = [
        ":greeter_proto_lib",
        "//closure-library/closure/goog/asserts",
        "//closure-library/closure/goog/testing:asserts",
        "//closure-library/closure/goog/testing:jsunit",
    ],
)

closure_java_template_library(
    name = "greeter_soy_java",
    srcs = ["greeter.soy"],
    java_package = "io.bazel.rules.closure.soy.greeter",
)

file_test(
    name = "greeter_java_generated",
    size = "small",
    file = "GreeterSoyInfo.java",
    regexp = "class GreeterSoyInfo",
)

closure_java_template_library(
    name = "greeter2_soy_java",
    srcs = ["greeter2.soy"],
    java_package = "io.bazel.rules.closure.soy.greeter",
    deps = [
        ":greeter_soy",
    ],
)

file_test(
    name = "greeter2_java_generated",
    size = "small",
    file = "Greeter2SoyInfo.java",
    regexp = "class Greeter2SoyInfo",
)

################################################################################
# Globals variables can be defined in txt files

closure_js_template_library(
    name = "globals_soy",
    srcs = ["globals.soy"],
    globals = "globals.txt",
)

closure_js_test(
    name = "globals_test",
    timeout = "short",
    srcs = ["globals_test.js"],
    deps = [
        ":globals_soy",
        "//closure-library/closure/goog/soy:soy", 
       # "@com_google_javascript_closure_library//closure/goog/testing:asserts",
       # "@com_google_javascript_closure_library//closure/goog/testing:jsunit",
       # "@com_google_javascript_closure_library//closure/goog/testing:testsuite",
        "//closure-library/closure/goog/testing:testsuite",
        "//closure-library/closure/goog/testing:asserts",
        "//closure-library/closure/goog/testing:jsunit",
    ],
)