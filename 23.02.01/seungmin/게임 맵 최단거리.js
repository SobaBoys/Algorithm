function solution(maps) {
    const ds = [[0, 1], [0, -1], [1, 0], [-1, 0]]; // 방향 설정 오른쪽/왼쪽/아래/위
    const [n, m] = [maps.length, maps[0].length]; // row, col
    const visit = Array.from(Array(n), e => Array(m).fill(0)); // 입력의 row,col 만큼의 0으로 찬 배열
    console.log(visit)
    visit[0][0] = 1; // 첫 노드는 방문한걸로 check

    let idx = 0; 
    const queue = [[0, 0]]; 
    while(queue.length != idx)
    {
        const [posX, posY] = queue[idx];
        for(let i = 0; i < ds.length; i++)
        {
            const [newX, newY] = [posX + ds[i][0], posY + ds[i][1]];
            if(newX < 0 || newY < 0 || newX >= n || newY >= m) continue;
            if(!visit[newX][newY] && maps[newX][newY])
            {
                visit[newX][newY] = visit[posX][posY] + 1;
                queue.push([newX, newY]);
            }
        }
        idx++;
    }
    return visit[n - 1][m - 1] ? visit[n - 1][m - 1] : -1; 
}