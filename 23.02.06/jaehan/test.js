const solution = (tickets) => {
    const graph = {};
    const visited = new Map();
    tickets.sort().forEach(([s, e]) => {!graph[s] ? graph[s] = [e] : graph[s].push(e)});
    
    const dfs = (cur) => {
        if (!graph[cur]) return [cur];
        const st = [cur];
        
        for (const ticket of graph[cur]) {
            if (!visited.get(ticket)) {                    
                visited.set(ticket, true);
                for (const e of dfs(ticket))
                    st.push(e);
                visited.set(ticket, false);
            }
        }
        
        return st;
    }
    
    return dfs("ICN");
}