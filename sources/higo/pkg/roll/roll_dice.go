package roll

import (
	"math/rand"
	"strconv"
	"time"

	"github.com/golang/glog"
)

func Roll() string {
	glog.Info("rolling the dice")
	return generateNumber()
}

func generateNumber() string {
	source := rand.NewSource(time.Now().UnixNano())
	random := rand.New(source)
	return strconv.Itoa(random.Intn(100))
}