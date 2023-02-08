const tickets = [
  ["ICN", "SFO"],
  ["ICN", "ATL"],
  ["SFO", "ATL"],
  ["ATL", "ICN"],
  ["ATL", "SFO"],
];

function solution(tickets) {
  tickets.sort(); // 글자순 정렬
  console.log(tickets);
  /* 
['ATL', 'ICN']
['ATL', 'SFO']
['ICN', 'ATL']
['ICN', 'SFO']
['SFO', 'ATL']
 */
  let visit = Array(tickets.length).fill(false);
  // tickets.length = 5
  // [false, false, false, false, false]
  console.log(visit);
  var answer = [];
  function dfs(current, cnt, path) {
    // 첫 dfs 매개변수 (current = "ICN",  cnt = 0, path = ["ICN"])
    // current = 현재방문역,
    // cnt = 현재까지의 방문역 개수 (dfs 종료시점을 명시하기 위해서 필요하다)
    // path = 방문한 경로를 매개변수로 받는 dfs
    if (cnt === tickets.length && answer.length === 0) {
      // dfs 종료 조건
      // cnt(방문역의 개수)가 tickets.length와 같다는 것은
      // 모든 티켓을 사용하여 역을 방문했다는 의미이므로 path(전체 방문 경로)를 리턴하면서 DFS함수를 종료한다
      // 정렬했으므로 처음오는 경우의 수가 답
      answer = path;
      return;
      // 함수를 종료하고 다시 47라인의 dfs("ICN", 0, ["ICN"])이 실행되고
      // 방문한 역을 제외하고 모든 티켓을 다 사용할 때까지 다시 반복
    }
    for (let i = 0; i < tickets.length; i++) {
      console.log(i, current, cnt, path, visit[i]);
      if (visit[i]) continue; // 경우의 수1 : 이미 방문한 역인 경우 continue 키워드로 현재 순회를 스킵한다
      // console.log(i, tickets[i][0]);
      if (tickets[i][0] === current) {
        // 현재 출발역이 타켓에 적힌 출발역과 일치할 때에
        // cnt가 0과1일 때는 통과되고 i가 2가 돼서 첫 시작역이 ICN이 되면 처음으로 조건이 True가 된다)
        // 경우의 수2 : 위의 visit 조건을 통과했다면 방문하지 않은 경로임을 의미
        visit[i] = true; // 방문한 경로를 체크하고(ICN - ATL 티켓이 visited로 체크된다)
        dfs(tickets[i][1], cnt + 1, [...path, tickets[i][1]]);
        // 현재 출발역의 도착역인 [tickets[i][1]을 현재까지의 경로를 나타내는 path에 추가해준 후 다시 매개변수로 넘겨준다
        // 2순회 dfs(ATL,1,['ICN', 'ATL']) 이 매개변수로 넘어가면서 dfs가 재귀적으로 실행된다
        visit[i] = false; // 이 코드 라인은 언제 실행되는지?
      }
    }
  }
  dfs("ICN", 0, ["ICN"]); // 시작역은 무조건 ICN부터
  return answer;
}

console.log(solution(tickets));
// ['ICN', 'ATL', 'ICN', 'SFO', 'ATL', 'SFO']

console.log(0.1 + 0.2);
