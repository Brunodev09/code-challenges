#ifndef M_H
#define M_H

#include <iostream>
#include <string>
#include <vector>

class M {
   public:

    template <class T>
    void print(T s) {
        std::cout << s << std::endl;
    }
    // template <>
    // void print<std::string>(std::string s) {
    //     std::cout << s << std::endl;
    // }

    void printVector(const std::vector<int> &vec) {
        for (int i = 0; i < vec.size(); i++) {
            print("------------");
            print(vec[i]);
        }
    }

    std::vector<int> &concatIntVec(std::vector<int> &v1, std::vector<int> &v2) {
        v1.insert(v1.end(), v2.begin(), v2.end());
        return v1;
    }

    std::vector<int> &splice(std::vector<int> &vec, int index) {
        vec.erase(vec.begin() + index);
        return vec;
    }

    std::vector<std::vector<int>> matrix(int nArr, int nEl,
                                         std::vector<int> &v) {
        std::vector<std::vector<int>> vec2d(nArr);
        int skip = 0;
        for (int i = 0; i < nArr; i++) {
            for (int j = 0; j < nEl; j++) {
                vec2d[i].push_back(v[j + skip]);
            }
            skip += nEl;
        }
        return vec2d;
    }
};

#endif