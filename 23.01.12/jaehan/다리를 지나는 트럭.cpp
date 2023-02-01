#include <string>
#include <vector>
#include <algorithm>
#include <iostream>

using namespace std;

int solution(int bridge_length, int weight, vector<int> truck_weights)
{
  reverse(truck_weights.begin(), truck_weights.end());
  vector<int> bridge(bridge_length, 0);
  int cnt = -1;

  while (cnt++, !truck_weights.empty())
  {
    int curW = 0;

    for (int i = bridge_length - 1; i >= 1; i--)
      bridge[i] = bridge[i - 1];
    bridge[0] = 0;

    for (int &i : bridge)
      curW += i;

    if (curW + truck_weights.back() <= weight)
    {
      bridge[0] = truck_weights.back();
      truck_weights.pop_back();
    }
  }

  return cnt + bridge_length;
}

// 테스트 1 〉 통과(1.88ms, 4.14MB)
// 테스트 2 〉 통과(202.04ms, 3.66MB)
// 테스트 3 〉 통과(0.01ms, 3.67MB)
// 테스트 4 〉 통과(50.02ms, 3.63MB)
// 테스트 5 〉 통과(1126.52ms, 4.2MB)
// 테스트 6 〉 통과(263.05ms, 4.19MB)
// 테스트 7 〉 통과(0.98ms, 4.2MB)
// 테스트 8 〉 통과(0.03ms, 3.67MB)
// 테스트 9 〉 통과(0.47ms, 4.19MB)
// 테스트 10 〉 통과(0.03ms, 3.68MB)
// 테스트 11 〉 통과(0.01ms, 4.21MB)
// 테스트 12 〉 통과(0.02ms, 4.2MB)
// 테스트 13 〉 통과(0.13ms, 4.14MB)
// 테스트 14 〉 통과(0.01ms, 4.2MB)