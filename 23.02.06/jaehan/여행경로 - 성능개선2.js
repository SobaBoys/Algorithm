const solution = (tickets) => {
    const visited = new Map();
    tickets.sort();
    
    const dfs = (cur) => {
        const st = [];
        
        tickets.forEach(([s, e], idx) => {
            if (!visited[idx] && s === cur) {
                visited[idx] = true;
                for (const element of dfs(e))
                    st.push(element);
                st.push(e);
            }
        })
        return st;
    }
    
    return ["ICN", ...dfs("ICN").reverse()];
}

// 정확성  테스트
// 테스트 1 〉	통과 (0.57ms, 33.6MB)
// 테스트 2 〉	통과 (0.19ms, 33.4MB)
// 테스트 3 〉	통과 (0.13ms, 33.5MB)
// 테스트 4 〉	통과 (0.17ms, 33.4MB)