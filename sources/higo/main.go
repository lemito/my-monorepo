package main

import (
	"fmt"
	"net/http"
	)
	 
func main() {
	http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintf(w, "Hello World!")
	})
	http.ListenAndServe(":8080", nil)
	fmt.Println("Server started at localhost:8080")
}