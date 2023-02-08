function solution(tickets) {
    let answer = []; //리턴
    let result=[]; // 결과 저장 피벗
    let len = tickets.length; //티켓 갯수만큼의 변수 설정
    let visited =[]; //방문한 노드 체크하는 변수
    tickets= tickets.sort(); // 유니코드 순으로 정렬
    function dfs(str, count)
    {
        result.push(str); // dfs에 들어온 문자열 result에 푸쉬
        
        if (len === count) // 티켓 갯수와 카운트가 같으면
        {
            answer = result;   // 현재 result를 답으로 저장하고 true 리턴
            return true;
        }
        
        for(var i = 0; i<len ; i++)
        {
            if(!visited[i] && tickets[i][0]===str) 
            // 반복문으로 visited , 입력 의 노드 하나씩 돌면서 
            // visit의 i번째와 입력의 i번째 출발지점이 둘 다 str과 같으면
            {
                visited[i] = true; // visit의 i번째는 true;
                if(dfs(tickets[i][1],count+1)) return true;
                // 카운트 늘리고 i번째의 도착지로 다시 dfs했을때 true면 true로 리턴
                visited[i] = false; //여기까지 온 경우는 false
            }
        }
        result.pop(); // 여기까지 왔다는건 안된다는 의미로 pop , false 리턴
    
        return false;
        
    }
    
    dfs("ICN",0); // 출발
    
    return answer;
}