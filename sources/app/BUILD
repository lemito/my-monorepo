load("@rules_cc//cc:defs.bzl", "cc_binary")

cc_binary(
    name = "app",
    srcs = ["main.cc"],
    copts = [
        "-std=c++20",
    ],
    deps = ["@com_google_absl//absl/strings"],
)
