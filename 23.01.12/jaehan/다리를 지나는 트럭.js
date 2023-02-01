function solution(bridge_length, weight, truck_weights) {
    const bridge = [];
    let cnt = -1;
    
    while (cnt++, truck_weights.length !== 0) {
        bridge.unshift(0);
        bridge.length > bridge_length && bridge.pop();
        
        const curW = bridge.reduce((sum, i) => sum + i);
        
        if (curW + truck_weights.at(0) <= weight) {
            bridge.shift();
            bridge.unshift(truck_weights.at(0))
            truck_weights.shift();
        }
    }
    
    return cnt + bridge_length;
}

// 테스트 1 〉	통과 (12.23ms, 35.4MB)
// 테스트 2 〉	통과 (1023.77ms, 36.5MB)
// 테스트 3 〉	통과 (0.11ms, 33.5MB)
// 테스트 4 〉	통과 (205.85ms, 36.2MB)
// 테스트 5 〉	통과 (2034.69ms, 36.1MB)
// 테스트 6 〉	통과 (567.87ms, 36.3MB)
// 테스트 7 〉	통과 (10.32ms, 35.4MB)
// 테스트 8 〉	통과 (0.47ms, 33.5MB)
// 테스트 9 〉	통과 (7.60ms, 36.1MB)
// 테스트 10 〉	통과 (0.57ms, 33.6MB)
// 테스트 11 〉	통과 (0.15ms, 33.5MB)
// 테스트 12 〉	통과 (0.92ms, 33.6MB)
// 테스트 13 〉	통과 (3.45ms, 35.5MB)
// 테스트 14 〉	통과 (0.06ms, 33.5MB)