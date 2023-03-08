"""
A multiline comment as a string literal.

Docstrings don't trigger the warning if they are first statements of a file or a function.
"""

load("@rules_jvm_external//:defs.bzl", "maven_install")

def java_dependencies():
    maven_install(
        artifacts = [
            "com.squareup.okhttp3:okhttp:jar:4.10.0",
            "javax.servlet:javax.servlet-api:4.0.1",
        ],
        repositories = [
            "https://repo1.maven.org/maven2",
        ],
    )
