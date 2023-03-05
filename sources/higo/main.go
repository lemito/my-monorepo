package main

import (
	"github.com/lemito/my-monorepo/sources/higo/cmd"
	"github.com/golang/glog"
)

func main() {
	glog.Info("nil")
	cmd.Execute()
}