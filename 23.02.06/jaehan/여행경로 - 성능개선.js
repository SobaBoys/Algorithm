const solution = (tickets) => {
    const visited = new Map();
    const st = [];
    
    const dfs = (routes) => {
        tickets.forEach(([s, e], idx) => {
            if (!visited.get(idx)) {
                if (s === routes[routes.length - 1]) {
                    visited.set(idx, true);
                    dfs(routes.concat(e));
                    st.push(e);
                }
            }
        })
    }
    
    tickets.sort();
    dfs(["ICN"]);
    
    st.reverse().unshift("ICN");
    return st;
}

// 테스트 1 〉	통과 (0.34ms, 33.5MB)
// 테스트 2 〉	통과 (0.11ms, 33.4MB)
// 테스트 3 〉	통과 (0.11ms, 33.4MB)
// 테스트 4 〉	통과 (0.11ms, 33.4MB)