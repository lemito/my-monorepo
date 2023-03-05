load("@com_google_j2cl//build_defs:rules.bzl", "j2cl_library")

package(
    default_visibility = ["//visibility:public"],
    licenses = ["notice"],
)

j2cl_library(
    name = "helloworldlib",
    srcs = glob([
        "*.java",
        "*.js",
    ]),
    deps = [
        "@com_google_j2cl//:jsinterop-annotations-j2cl",
    ],
)