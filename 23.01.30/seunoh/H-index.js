function solution(citations) {
  citations.sort((a, b) => b - a);
  // 논문 인용횟수가 큰 수부터 찾아야 빠르기 때문에
  // 주어진 매개변수 배열을 내림차순으로 정렬한다
  for (let i = 0; i < citations.length; i++) {
    if (i >= citations[i]) return i;
  }
  // 논문의 개수(i)와 인용된 횟수(citation[i]) 를 비교한다
  // 인용된 횟수가 논문수(i)보다 작거나 같은 시점에서의 i를 리턴한다
  return citations.length;
  // 인용된 횟수가 같은 배열이 있을 시에는 논문의 개수를 리턴한다
}
console.log(solution([2, 2]));
