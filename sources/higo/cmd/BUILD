load("@rules_go//go:def.bzl", "go_library")

go_library(
    name = "cmd",
    srcs = [
        "roll.go",
        "root.go",
    ],
    importpath = "github.com/lemito/my-monorepo/sources/higo/cmd",
    visibility = ["//visibility:public"],
    deps = [
        "//sources/higo/pkg/roll",
        "@com_github_golang_glog//:glog",
        "@com_github_spf13_cobra//:cobra",
    ],
)
