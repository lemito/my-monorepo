load("@bazel_tools//tools/build_defs/repo:git.bzl", "git_repository")
load("@bazel_tools//tools/build_defs/repo:http.bzl", "http_archive")

http_archive(
    name = "io_bazel_rules_go",
    sha256 = "56d8c5a5c91e1af73eca71a6fab2ced959b67c86d12ba37feedb0a2dfea441a6",
    urls = [
        "https://mirror.bazel.build/github.com/bazelbuild/rules_go/releases/download/v0.37.0/rules_go-v0.37.0.zip",
        "https://github.com/bazelbuild/rules_go/releases/download/v0.37.0/rules_go-v0.37.0.zip",
    ],
)

http_archive(
    name = "bazel_gazelle",
    sha256 = "ecba0f04f96b4960a5b250c8e8eeec42281035970aa8852dda73098274d14a1d",
    urls = [
        "https://mirror.bazel.build/github.com/bazelbuild/bazel-gazelle/releases/download/v0.29.0/bazel-gazelle-v0.29.0.tar.gz",
        "https://github.com/bazelbuild/bazel-gazelle/releases/download/v0.29.0/bazel-gazelle-v0.29.0.tar.gz",
    ],
)
#=================#
#=====Java========#
#=================#
http_archive(
    name = "rules_java",
    sha256 = "a1f82b730b9c6395d3653032bd7e3a660f9d5ddb1099f427c1e1fe768f92e395",
    urls = [
        "https://github.com/bazelbuild/rules_java/releases/download/5.4.1/rules_java-5.4.1.tar.gz",
    ],
)

load("@rules_java//java:repositories.bzl", "rules_java_dependencies", "rules_java_toolchains")

rules_java_dependencies()

rules_java_toolchains()

RULES_JVM_EXTERNAL_TAG = "4.2"

RULES_JVM_EXTERNAL_SHA = "cd1a77b7b02e8e008439ca76fd34f5b07aecb8c752961f9640dea15e9e5ba1ca"

http_archive(
    name = "rules_jvm_external",
    sha256 = RULES_JVM_EXTERNAL_SHA,
    strip_prefix = "rules_jvm_external-%s" % RULES_JVM_EXTERNAL_TAG,
    url = "https://github.com/bazelbuild/rules_jvm_external/archive/%s.zip" % RULES_JVM_EXTERNAL_TAG,
)

load("@rules_jvm_external//:repositories.bzl", "rules_jvm_external_deps")

rules_jvm_external_deps()

load("@rules_jvm_external//:setup.bzl", "rules_jvm_external_setup")

rules_jvm_external_setup()

load("@rules_jvm_external//:defs.bzl", "maven_install")

maven_install(
    artifacts = [
        # https://mvnrepository.com/artifact/com.squareup.okhttp3/okhttp
        "com.squareup.okhttp3:okhttp:jar:4.10.0",
    ],
    repositories = [
        "https://repo1.maven.org/maven2",
    ],
)

http_archive(
    name = "rules_proto",
    sha256 = "dc3fb206a2cb3441b485eb1e423165b231235a1ea9b031b4433cf7bc1fa460dd",
    strip_prefix = "rules_proto-5.3.0-21.7",
    urls = [
        "https://github.com/bazelbuild/rules_proto/archive/refs/tags/5.3.0-21.7.tar.gz",
    ],
)

load("@rules_proto//proto:repositories.bzl", "rules_proto_dependencies", "rules_proto_toolchains")

rules_proto_dependencies()

rules_proto_toolchains()

# io_bazel_rules_go
load("@io_bazel_rules_go//go:deps.bzl", "go_download_sdk", "go_register_toolchains", "go_rules_dependencies")
load("@bazel_gazelle//:deps.bzl", "gazelle_dependencies")

go_download_sdk(
    name = "go_sdk",
    goarch = "amd64",
    goos = "linux",
    version = "1.17.7",
)

go_rules_dependencies()

go_register_toolchains()

gazelle_dependencies()

http_archive(
    name = "io_bazel_rules_webtesting",
    #sha256 = "<version-specific-sha>",
    urls = [
        "https://github.com/bazelbuild/rules_webtesting/releases/download/0.3.5/rules_webtesting.tar.gz",
    ],
)

load("@io_bazel_rules_webtesting//web:repositories.bzl", "web_test_repositories")

web_test_repositories()

http_archive(
    name = "io_bazel_rules_closure",
    sha256 = "9498e57368efb82b985db1ed426a767cbf1ba0398fd7aed632fc3908654e1b1e",
    strip_prefix = "rules_closure-0.12.0",
    urls = [
        "https://mirror.bazel.build/github.com/bazelbuild/rules_closure/archive/0.12.0.tar.gz",
        "https://github.com/bazelbuild/rules_closure/archive/0.12.0.tar.gz",
    ],
)

load("@io_bazel_rules_closure//closure:repositories.bzl", "rules_closure_dependencies", "rules_closure_toolchains")

rules_closure_dependencies()

rules_closure_toolchains()

#=================#
#=====Protobuf====#
#=================#
git_repository(
    name = "com_google_protobuf",
    remote = "https://github.com/protocolbuffers/protobuf",
    tag = "v3.10.0",
)

load("@com_google_protobuf//:protobuf_deps.bzl", "protobuf_deps")

protobuf_deps()

#=================#
#=====Closure=====#
#=================#
git_repository(
    name = "com_google_javascript_closure_library",
    remote = "https://github.com/google/closure-library",
    tag = "v20230206",
)

# Only needed if you want to run your tests on headless Chrome
'''load("@io_bazel_rules_closure//closure:defs.bzl", "setup_web_test_repositories")
setup_web_test_repositories(
    chromium = True,
)'''

#=================#
#=====Rust========#
#=================#
'''
http_archive(
    name = "platforms",
    sha256 = "5308fc1d8865406a49427ba24a9ab53087f17f5266a7aabbfc28823f3916e1ca",
    urls = [
        "https://mirror.bazel.build/github.com/bazelbuild/platforms/releases/download/0.0.6/platforms-0.0.6.tar.gz",
        "https://github.com/bazelbuild/platforms/releases/download/0.0.6/platforms-0.0.6.tar.gz",
    ],
)

http_archive(
    name = "rules_rust",
    sha256 = "2466e5b2514772e84f9009010797b9cd4b51c1e6445bbd5b5e24848d90e6fb2e",
    urls = ["https://github.com/bazelbuild/rules_rust/releases/download/0.18.0/rules_rust-v0.18.0.tar.gz"],
)
load("@rules_rust//rust:repositories.bzl", "rules_rust_dependencies", "rust_register_toolchains", "rust_repositories")
rust_repositories()
rules_rust_dependencies()
rust_register_toolchains(
    edition = "2021",
    versions = [
        "1.66.1",
    ],
)
load("@rules_rust//crate_universe:defs.bzl", "crates_repository")
crates_repository(
    name = "crate_index",
    cargo_lockfile = "//:Cargo.lock",
    #lockfile = "//:Cargo.Bazel.lock",
    manifests = [
        "//:Cargo.toml",
       # "//sources/hello-rust:Cargo.toml",
    ],
)
load("@crate_index//:defs.bzl", "crate_repositories")
crate_repositories()
load("@docker_config//:pull.bzl", "container_pull")
container_pull(
    name = "base_debian11_cc",
    digest = "sha256:2a0daf90a7deb78465bfca3ef2eee6e91ce0a5706059f05d79d799a51d339523",
    registry = "gcr.io",
    repository = "distroless/cc-debian11",
)'''

#=================#
#=====Go==========#
#=================#
'''http_archive(
    name = "io_bazel_rules_go",
    sha256 = "56d8c5a5c91e1af73eca71a6fab2ced959b67c86d12ba37feedb0a2dfea441a6",
    urls = [
        "https://mirror.bazel.build/github.com/bazelbuild/rules_go/releases/download/v0.37.0/rules_go-v0.37.0.zip",
        "https://github.com/bazelbuild/rules_go/releases/download/v0.37.0/rules_go-v0.37.0.zip",
    ],
)

http_archive(
    name = "bazel_gazelle",
    sha256 = "448e37e0dbf61d6fa8f00aaa12d191745e14f07c31cabfa731f0c8e8a4f41b97",
    urls = [
        "https://mirror.bazel.build/github.com/bazelbuild/bazel-gazelle/releases/download/v0.28.0/bazel-gazelle-v0.28.0.tar.gz",
        "https://github.com/bazelbuild/bazel-gazelle/releases/download/v0.28.0/bazel-gazelle-v0.28.0.tar.gz",
    ],
)

load("@io_bazel_rules_go//go:deps.bzl", "go_register_toolchains", "go_rules_dependencies", "go_download_sdk")
load("@bazel_gazelle//:deps.bzl", "gazelle_dependencies")

go_download_sdk(
    name = "go_sdk",
    goos = "linux",
    goarch = "amd64",
    version = "1.18.1",
    sdks = {
        # NOTE: In most cases the whole sdks attribute is not needed.
        # There are 2 "common" reasons you might want it:
        #
        # 1. You need to use an modified GO SDK, or an unsupported version
        #    (for example, a beta or release candidate)
        #
        # 2. You want to avoid the dependency on the index file for the
        #    SHA-256 checksums. In this case, You can get the expected
        #    filenames and checksums from https://go.dev/dl/
        "linux_amd64": ("go1.18.1.linux-amd64.tar.gz", "b3b815f47ababac13810fc6021eb73d65478e0b2db4b09d348eefad9581a2334"),
        "darwin_amd64": ("go1.18.1.darwin-amd64.tar.gz", "3703e9a0db1000f18c0c7b524f3d378aac71219b4715a6a4c5683eb639f41a4d"),
    },
)

go_rules_dependencies()

go_register_toolchains(go_version = "1.18.1")

gazelle_dependencies()
'''
