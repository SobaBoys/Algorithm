const solution = (str1, str2) => {
    const A = [];
    const B = [];
    
    for (let i = 0 ; i < str1.length - 1 ; i++) {
        const s1 = str1.slice(i, i + 2).toUpperCase();
        !s1.match(/[^a-zA-Z]+/g) && A.push(s1);
    }
    
    for (let i = 0 ; i < str2.length - 1 ; i++) {
        const s2 = str2.slice(i, i + 2).toUpperCase();
        !s2.match(/[^a-zA-Z]+/g) && B.push(s2);
    }
    
    const queue = [...B];
    let Intersection = 0;
    
    A.forEach((ele) => {
        for (let i = 0 ; i < queue.length; i++) {
            if (ele === queue[0]) {
                queue.shift();
                Intersection++;
                break;
            }
            queue.push(queue[0]);
            queue.shift();
        }
    });
    
    const Union = A.length + B.length - Intersection;
    const J = Intersection / Union;
    
    return !Union ? 65536 : Math.floor(J * 65536);
}

// 테스트 1 〉	통과 (0.24ms, 33.4MB)
// 테스트 2 〉	통과 (0.25ms, 33.4MB)
// 테스트 3 〉	통과 (0.22ms, 33.6MB)
// 테스트 4 〉	통과 (2.54ms, 37.2MB)
// 테스트 5 〉	통과 (0.37ms, 33.4MB)
// 테스트 6 〉	통과 (0.25ms, 33.4MB)
// 테스트 7 〉	통과 (0.66ms, 33.4MB)
// 테스트 8 〉	통과 (0.20ms, 33.5MB)
// 테스트 9 〉	통과 (0.47ms, 33.6MB)
// 테스트 10 〉	통과 (0.81ms, 33.2MB)
// 테스트 11 〉	통과 (1.40ms, 33.4MB)
// 테스트 12 〉	통과 (0.15ms, 33.5MB)
// 테스트 13 〉	통과 (0.38ms, 33.5MB)