const pair = { "{": "}", "[": "]", "(": ")" };

function solution(s) {
  const arr = s.split("");
  let result = 0;
  const isValid = (arr) => {
    const stack = [];
    for (let i = 0; i < arr.length; i++) {
      const currentBracket = arr[i];
      if (arr.length % 2 === 1) return false;
      // worst 케이스 빠르게 제거 (개수가 짝수일 경우에만 짝을 맞출 수 있다. 만약 엄청나게 많은 홀수 더미를 만날 경우 다 탐색하기도 전에 컷)
      if (pair[currentBracket])
        // 마주친 괄호가 좌괄호일 경우
        stack.push(currentBracket);
      // 현재 탐색중인 괄호가 좌괄호일 경우 해당 좌괄호를 스택에 저장
      else {
        // 마주친 괄호가 우괄호일 경우
        let latestLeftBracket = stack.length - 1;
        if (currentBracket !== pair[stack[latestLeftBracket]]) return false; // 스택에 가장 마지막에(최근)에 저장한 좌괄호와 맵상에 키로 저장된 좌괄호에서 value값인 우괄호를 get해서 같은 종류의
        // 우괄호인지 대조한 후 아니라면 false를 리턴한다
        stack.pop(); // 위의 조건을 그냥 pass했다면 짝이 맞는 괄호라는 의미이므로 스택에서 좌괄호를 pop한다
      }
    }
    if (stack.length) return false; // for문을 끝까지 돌고 나왔다는 의미는 배열의 끝까지 탐색했다는 의미이다. 그런데도 스택 안에 좌괄호가 남아있다면
    // 짝을 찿지 못했다는 의미이므로 false를 리턴
    return true;
  };

  for (let i = 0; i < s.length; i++) {
    if (isValid(arr)) result++;
    arr.push(arr.shift());
  }

  return result;
}

console.log(solution("[](){}"));
