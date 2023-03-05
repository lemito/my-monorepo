load("@rules_cc//cc:defs.bzl", "cc_binary")

cc_binary(
    name = "app",
    srcs = ["main.cc"],
    deps = ["@com_google_absl//absl/strings"],
    copts = [
        "-std=c++20",
    ],
)
