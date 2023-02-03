const solution = (tickets) => {
    const visited = new Map();
    const ans = [];
    
    const dfs = (routes) => {
        if (routes.length === tickets.length + 1)
            return ans.push(routes);
        
        tickets.forEach(([s, e], idx) => {
            if (!visited.get(idx)) {
                if (s === routes[routes.length - 1]) {
                    visited.set(idx, true);
                    dfs(routes.concat(e));
                    visited.set(idx, false);
                }
            }
        })
        
    }
    
    dfs(["ICN"]);
    return ans.sort()[0];
}

// 테스트 1 〉	통과 (621.27ms, 56.7MB)
// 테스트 2 〉	통과 (0.12ms, 33.6MB)
// 테스트 3 〉	통과 (0.15ms, 33.4MB)
// 테스트 4 〉	통과 (0.11ms, 33.5MB)