load("@rules_java//java:defs.bzl", "java_binary")

java_binary(
    name = "GetExample",
    # srcs = glob(["src/main/java/com/example/*.java"]),
    srcs = glob(["*.java"]),
    deps = [
        "@maven//:com_squareup_okhttp3_okhttp",
    ],
)