load("@rules_go//go:def.bzl", "go_binary", "go_library")
load("@gazelle//:def.bzl", "gazelle")

# gazelle:prefix .
gazelle(name = "gazelle")

# adding rule to update deps
gazelle(
    name = "gazelle-update-repos",
    args = [
        "-from_file=go.mod",
        "-to_macro=deps.bzl%go_dependencies",
        "-prune",
    ],
    command = "update-repos",
)

go_library(
    name = "basic-gazelle_lib",
    srcs = ["main.go"],
    importpath = "github.com/lemito/my-monorepo/sources/higo",
    visibility = ["//visibility:private"],
    deps = [
        "//sources/higo/cmd",
        "@com_github_golang_glog//:glog",
    ],
)

go_binary(
    name = "basic-gazelle",
    embed = [":basic-gazelle_lib"],
    visibility = ["//visibility:public"],
)