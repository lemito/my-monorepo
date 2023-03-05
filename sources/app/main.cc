#include <algorithm>
#include <iostream>
#include <string>
#include <vector>

#include "absl/strings/str_join.h"

int main()
{
    std::vector<int> d = {1, 5, 4, 3, 7, 6};
    for (int e : d) {
        std::cout << e << " ";
    }
    std::cout << "\nDo";
    // TODO: Add C++20 sort method
    std::ranges::sort(d);
    std::cout << "posle\n";
    for (int e : d) {
        std::cout << e << " ";
    }
    std::cout << "\n";
    std::vector<std::string> v = {"foo", "bar", "baz"};
    std::string s = absl::StrJoin(v, "-");

    std::cout << "Joined string: " << s << "\n";

  return 0;
}