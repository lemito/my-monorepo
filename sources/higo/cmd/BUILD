load("@io_bazel_rules_go//go:def.bzl", "go_library")

go_library(
    name = "cmd",
    srcs = [
        "roll.go",
        "root.go",
    ],
    importpath = "//source/higo/cmd",
    visibility = ["//visibility:public"],
    deps = [
        "//source/higo/pkg/roll",
        "@com_github_spf13_cobra//:cobra",
        "@com_github_golang_glog//:glog",
    ],
)