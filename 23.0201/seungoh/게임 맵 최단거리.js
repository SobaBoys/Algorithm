const maps = [
  [
    [1, 0, 1, 1, 1],
    [1, 0, 1, 0, 1],
    [1, 0, 1, 1, 1],
    [1, 1, 1, 0, 1],
    [0, 0, 0, 0, 1],
  ],
];

const directions = [
  [-1, 0],
  [0, 1],
  [1, 0],
  [0, -1], //시계방향순서탐색 (위, 오른쪽, 아래, 왼쪽)
];

const solution = function (maps) {
  const answer = 0;
  const [n, m] = [maps.length, maps[0].length];
  const seen = new Array(n).fill(0).map(() => new Array(m).fill(false));
  // 주어진 배열과 똑같은 n x m 짜리 false로 가득찬 배열을 초기화
  const values = []; // 탐색한 값을 집어넣는 배열
  const queue = [[0, 0]]; // 최좌측상단부터 탐색 시작
  while (queue.length) {
    const currentPos = queue.shift();
    const row = currentPos[0];
    const col = currentPos[1];
    // 범위를 초과할 경우 혹은 continue 키워드로 현재 순회를 스킵함
    if (
      row < 0 ||
      row >= maps.length ||
      col < 0 ||
      col >= maps[0].length ||
      seen[row][col] ||
      maps[row][col] == 0
    )
      continue;
    // 위의 조건을 통과했다면 valid한 탐색이기 때문에
    // seen 배열의 값을 true로 바꾸고 탐색한 값을 value 배열에 집어넣음
    seen[row][col] = true;
    values.push(maps[row][col]);
    // 그리고 시계방향으로 좌표를 이동함
    for (let i = 0; i < directions.length; i++) {
      const currentDir = directions[i];
      queue.push([row + currentDir[0], col + currentDir[1]]);
    }
  }
  // 탐색한 모든 배열의 수가 곧 거리이므로 모든 값을 담은 values의 길이를 리턴
  return values.length;
};

console.log(solution(maps));
