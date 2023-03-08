load("@rules_go//go:def.bzl", "go_library", "go_test")

go_library(
    name = "roll",
    srcs = ["roll_dice.go"],
    importpath = "github.com/lemito/my-monorepo/sources/higo/pkg/roll",
    visibility = ["//visibility:public"],
    deps = ["@com_github_golang_glog//:glog"],
)

go_test(
    name = "roll_test",
    srcs = ["roll_dice_test.go"],
    embed = [":roll"],
)
