load("@io_bazel_rules_closure//closure:defs.bzl", "closure_js_library")
load("@com_google_j2cl//build_defs:rules.bzl", "j2cl_application")

closure_js_library(
    name = "app",
    srcs = ["app.js"],
    deps = ["//sources/j2cl/src/main/java/com/google/j2cl/samples/helloworldlib"],
)

j2cl_application(
    name = "helloworld",
    entry_points = ["j2cl.samples.app"],
    deps = [":app"],
)