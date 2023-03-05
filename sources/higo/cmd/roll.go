package cmd

import (
	"fmt"

	"../pkg/roll"
	"github.com/spf13/cobra"
	"github.com/golang/glog"
)

// rollCmd represents the roll command
var rollCmd = &cobra.Command{
	Use:   "roll",
	Short: "A brief description of your command",
	Long: `A longer description that spans multiple lines and likely contains examples
and usage of using your command. For example:
Cobra is a CLI library for Go that empowers applications.
This application is a tool to generate the needed files
to quickly create a Cobra application.`,
	Run: func(cmd *cobra.Command, args []string) {
		glog.Info("calling roll")
		fmt.Printf("Number rolled: %s\n", roll.Roll())
	},
}

func init() {
	rootCmd.AddCommand(rollCmd)

}