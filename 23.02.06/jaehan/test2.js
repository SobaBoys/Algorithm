const solution = (tickets) => {
    const graph = {};
    const ans = [];
    const visited = new Map();
    tickets.sort().forEach(([s, e]) => {!graph[s] ? graph[s] = [e] : graph[s].push(e)});
    
    const dfs = (routes) => {
        if (routes.length === tickets.length + 1) {
            return ans.push(...routes);
        }
        else {
            let cur = routes[routes.length - 1];
            if (!graph[cur]) return;
            
            for (const ticket of graph[cur]) {
                if (!visited.get(ticket)) {
                    visited.set(ticket, true);
                    dfs(routes.concat(ticket));
                    visited.set(ticket, false);
                }
            }
        }
    }
    
    dfs(["ICN"]);
    return ans;
}