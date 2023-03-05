load("@io_bazel_rules_go//go:def.bzl", "go_library")

go_library(
    name = "cmd",
    srcs = [
        "roll.go",
        "root.go",
    ],
    importpath = "github.com/bazelbuild/rules_go/examples/basic-gazelle/cmd",
    visibility = ["//visibility:public"],
    deps = [
        "//pkg/roll",
        "@com_github_spf13_cobra//:cobra",
        "@com_github_golang_glog//:glog",
    ],
)