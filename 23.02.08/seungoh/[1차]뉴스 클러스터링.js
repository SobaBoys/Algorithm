let str1 = "aa1+aa2	";
let str2 = "AAAA12";

function solution(str1, str2) {
  let answer = 0;
  // 2개씩 잘라서 영문자가 아닌 게 껴있으면 버리는 함수

  function explode(text) {
    const result = [];
    for (let i = 0; i < text.length - 1; i++) {
      const char1 = text.charCodeAt(i);
      const char2 = text.charCodeAt(i + 1);
      if (
        ((char1 >= 65 && char1 <= 90) || (char1 >= 97 && char1 <= 122)) &&
        ((char2 >= 65 && char2 <= 90) || (char2 >= 97 && char2 <= 122))
      ) {
        result.push(text.substr(i, 2).toLowerCase());
      }
    }
    return result;
  }

  const arr1 = explode(str1);
  const arr2 = explode(str2);
  // 왜 set을 썼는지? set 자료구조가 중복을 제거해주니까(중복된 값을 추가하려고 하면 아무 일도x)
  // 왜 중복을 제거 해야하는데?
  // 주어진 str1 str2와 set을 비교하려고
  // ar1과 ar2의 합집합을 만든다. 다만, 두 배열의 각 고유 요소가 집합에 한 번만 나타나도록 한다.
  // 중복 요소를 제거해준다
  const set = new Set([...arr1, ...arr2]);
  // 합집합
  let union = 0;
  // 교집합
  let intersection = 0;

  // 같은 원소를 검사해서 많은 쪽은 공집합에 더하고 적은쪽은 교집합에 더한다.
  // set을 순회시키는 이유?
  // set 내부의 각각의 요소와 arr내부의 각각의 요소를 비교한다
  // 공집합과 교집합을 왜 찾는지? 자카드 유사도가 교집합 크기/합집합 크기이니까
  // 왜 has1과 has2 중에 큰 쪽을 공집합에 더하는지?
  // 왜 작은 쪽을 교집합에 더하는지?

  // forEach 메서드를 사용하여 set 내부의 각 요소들을 순회하고 필터 메서드와 길이 속성을 사용하여
  // ar1과 ar2 배열 내부의 요소들 중 set내부의 요소들과
  // 동일한 요소들을 추출한 후 길이를 구한다.
  // 이것이 각 배열에서 나타나는 횟수이다. 이러한 값은 각각 변수 has1과 has2에 저장된다.
  set.forEach((item) => {
    const has1 = arr1.filter((x) => x === item).length;
    const has2 = arr2.filter((x) => x === item).length;
    // 합집합
    union += Math.max(has1, has2);
    // 교집합
    intersection += Math.min(has1, has2);
  });
  // 합집합이 0일 경우 65536을 리턴하고 0이
  // 아닐 경우 교집합을 합집합으로 나눈 값에 65536을 곱한 값을 리턴한다
  return union === 0 ? 65536 : Math.floor((intersection / union) * 65536);
}

console.log(solution(str1, str2));
