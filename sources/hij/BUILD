load("@rules_java//java:defs.bzl", "java_binary")
load("@io_bazel_rules_appengine//appengine:appengine.bzl", "appengine_war")

package(default_visibility = ["//visibility:public"])

appengine_war(
    name = "backend",
    data = [":webapp"],
    data_path = "/sources/hij/webapp",
    jars = [":app_deploy.jar"],
)

filegroup(
    name = "webapp",
    srcs = glob(["webapp/**/*"]),
)

java_binary(
    name = "app",
    srcs = glob(["src/main/java/**/*.java"]),
    main_class = "does.not.exist",
    deps = [
        #"@io_bazel_rules_appengine//appengine:javax.servlet.api",
        "@maven//:javax_servlet_javax_servlet_api",
    ],
)
