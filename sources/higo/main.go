package main

import (
	"github.com/bazelbuild/rules_go/examples/basic-gazelle/cmd"
	"github.com/golang/glog"
)

func main() {
	glog.Init("nil")
	cmd.Execute()
}