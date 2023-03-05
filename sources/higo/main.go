package main

import (
	"./cmd"
	"github.com/golang/glog"
)

func main() {
	glog.Info("nil")
	cmd.Execute()
}