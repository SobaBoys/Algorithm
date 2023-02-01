# [Level 2 괄호 변환하기]

## 📒 문제 설명

> https://school.programmers.co.kr/learn/courses/30/lessons/76502

## 💻 언어

`Javascript`

## 관련 알고리즘

> `stack` (자료구조)

## 풀이

### stack

# 글로 로직 가구현

- worst케이스
  애초에 개수가 홀수라서 몇 번을 회전 시켜도 짝이 맞을 수가 없을 때
  테스트 케이스 : ]()
  0을 리턴한다
- 경우의 수
  우괄호를 마주칠 때
  좌괄호를 마주칠 때
- 수도 코드
  - (도돌이표) s의 0번째 인덱스를 s의 마지막 인덱스로 옮긴다(s의 길이만큼 반복한다)
  - 해쉬맵으로 지문 대조 목록을 생성한다. 왜냐하면 마주친 괄호의 종류를 추적 해야하기 때문이다.
  - 해쉬맵의 key- value에 좌괄호 - 우괄로의 형태로 저장하고, i포인터가 s를 탐색하면서 해당 키 값(좌괄호) 의 특정 괄호를 마주치면 현재 탐색 중이던 s[i]번째 좌괄호를 스택에 저장한다.
  - 만약 마주친 것이 좌괄호가 아닐 경우 그것은 당연히 우괄호일 것이므로, 그 우괄호가 어떤 종류인지 해쉬맵에서 대조를 통해 파악해야한다. 최근에 스택에 들어온 좌괄호를 pop해서 변수에 남는다. 해당 변수로 해쉬맵의 value에 접근해서 그 값을 변수에 담는다.
  - 그 변수를 현재 탐색 중인 s[i]와 대조해서 짝이 맞는 괄호가 아니라면 루프를 바로 중단하고 다음 괄호 회전으로 넘어간다
  - 이렇게 s의 마지막 녀석까지 탐색을 끝냈는데
    - 스택에 만약 남아있는 좌괄호가 있다면 이 녀석은 짝을 찾지 못한 녀석이기 때문에 s는 유효하지 않은 괄호문자열이다
    - 스텍에 만약 남아있는 좌괄호가 없다면 모든 좌괄호가 짝을 찾은 것이기 때문에 count를 ++ 해준다
  - s의 길이만큼 회전을 마친 후 count를 리턴한다

# My Solution

---

```jsx
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
```
