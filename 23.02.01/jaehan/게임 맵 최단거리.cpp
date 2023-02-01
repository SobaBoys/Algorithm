#include <vector>
#include <queue>
#include <utility>

using namespace std;

int dx[] = {1, -1, 0, 0};
int dy[] = {0, 0, 1, -1};

int solution(vector<vector<int>> maps)
{
  queue<pair<int, int>> q;
  int N = maps.size(), M = maps[0].size();
  vector<vector<int>> dist(N, vector<int>(M, 0));
  q.push({0, 0});
  dist[0][0] = 1;

  while (!q.empty())
  {
    pair<int, int> cur = q.front();
    q.pop();

    if (cur.first == N - 1 && cur.second == M - 1)
      return dist[cur.first][cur.second];

    for (int i = 0; i < 4; i++)
    {
      int nx = cur.first + dx[i];
      int ny = cur.second + dy[i];

      if (nx < 0 || ny < 0 || nx >= N || ny >= M || dist[nx][ny] != 0 || maps[nx][ny] == 0)
        continue;

      q.push({nx, ny});
      dist[nx][ny] = dist[cur.first][cur.second] + 1;
    }
  }

  return -1;
}