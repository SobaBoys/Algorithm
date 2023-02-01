# [Level 2 괄호 변환하기]

## 📒 문제 설명

> https://school.programmers.co.kr/learn/courses/30/lessons/76502

## 💻 언어

`C++`, `Javascript`

## 관련 알고리즘

> `stack` (자료구조)

## 풀이

### bruth-force

1. 만약 특정 인덱스의 값이 여는 괄호(`(`,`{`,`[`)인지 체크
2. **1번의 조건**을 만족한다면, 그 다음 인덱스의 값이 닫는 괄호(`)`,`}`,`]`)인지 체크
3. **2번의 조건**을 만족한다면, 두 인덱스의 값을 지운다.
4. 다시 맨 처음으로 돌아가서 끝에 도달할 때까지 반복
5. 반복문 죵료 후 입력값에 따라 성공 여부를 출력

> 이런 식으로 계산한다면, 시간복잡도가 너무 커져서 오래 걸린다.

### stack

1. 반복문을 돌리되, 입력값의 길이만큼만 반복한다. **(시간 복잡도 감소)**
2. 만약 특정 인덱스 값이 여는 괄호(`(`,`{`,`[`)라면, 스택에 `push`한다.
3. 그 외의 값이라면, 이 때 스택이 비어있는 경우는 생략한다.
4. 만약 특정 인덱스 값이 닫는 괄호(`)`,`}`,`]`)이고, 스택의 `top`이 해당 괄호와 짝이 맞는다면, 스택을 `pop`한다.
5. 반복문 종료 후 스택이 비어있는 지에 따라 결과를 출력한다.

> 이 방법이 훨씬 더 빠르게 작용한다.
> 실제로 `javascript`로 구현 했을 때 성능차가 엄청났다.

## 결과 (C++)

```cpp
#include <string>
#include <stack>

using namespace std;

char isCorrectX[] = {'(', '[', '{'};
char isCorrectY[] = {')', ']', '}'};

bool isCorrect(string s)
{
  stack<char> st;
  for (int i = 0; i < s.size(); i++)
  {
    if (s[i] == '(' || s[i] == '{' || s[i] == '[')
    {
      st.push(s[i]);
      continue;
    }
    else
    {
      if (st.empty())
        return false;

      for (int j = 0; j < 3; j++)
      {
        if (!st.empty() && st.top() == isCorrectX[j] && s[i] == isCorrectY[j])
        {
          st.pop();
          break;
        }
      }
    }
  }

  return st.empty();
}

int solution(string s)
{
  int cnt = 0;
  for (int i = 0; i < s.size(); i++)
  {
    char tmp = s.front();
    s = s.substr(1);
    s.push_back(tmp);

    if (isCorrect(s))
      cnt++;
  }

  return cnt;
}
```

## 결과 (Javascript)

```javascript
const isCorrectX = ["(", "[", "{"];
const isCorrectY = [")", "]", "}"];

const isCorrect = (s) => {
  const st = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(" || s[i] === "{" || s[i] === "[") {
      st.push(s[i]);
      continue;
    } else {
      if (st.length === 0) return false;

      for (let j = 0; j < 3; j++) {
        if (
          st.length !== 0 &&
          st[st.length - 1] === isCorrectX[j] &&
          s[i] === isCorrectY[j]
        ) {
          st.pop();
          break;
        }
      }
    }
  }

  return st.length === 0;
};

const solution = (s) => {
  let cnt = 0;
  for (let i = 0; i < s.length; i++) {
    let tmp = s[0];
    s = s.slice(1);
    s += tmp;

    // 또는 s = s.slice(i) + s.slice(0, i)

    if (isCorrect(s)) cnt++;
  }

  return cnt;
};
```
