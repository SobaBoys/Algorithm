const solution = (str1, str2) => {
    const A = [];
    const B = [];

    const search = (str, array) => {
      for (let i = 0; i < str.length - 1; i++) {
        const s = str.slice(i, i + 2).toUpperCase();
        !s.match(/[^a-zA-Z]+/g) && array.push(s);
      }
    }
    
    search(str1, A);
    search(str2, B);
    
    const Disjoint = [...B];
    const Intersection = [];
    
    A.forEach((ele) => {
        for (let i = 0 ; i < Disjoint.length; i++) {
            if (ele === Disjoint[0]) {
                Intersection.push(Disjoint.shift());
                break;
            }
            Disjoint.push(Disjoint[0]);
            Disjoint.shift();
        }
    });
    
    const Union = A.length + B.length - Intersection.length;
    const J = Intersection.length / Union;
    
    return !Union ? 65536 : Math.floor(J * 65536);
}

// 테스트 1 〉	통과 (0.25ms, 33.5MB)
// 테스트 2 〉	통과 (0.41ms, 33.6MB)
// 테스트 3 〉	통과 (0.44ms, 33.4MB)
// 테스트 4 〉	통과 (2.78ms, 37.2MB)
// 테스트 5 〉	통과 (0.36ms, 33.4MB)
// 테스트 6 〉	통과 (0.21ms, 33.4MB)
// 테스트 7 〉	통과 (0.42ms, 33.6MB)
// 테스트 8 〉	통과 (0.28ms, 33.6MB)
// 테스트 9 〉	통과 (0.68ms, 33.7MB)
// 테스트 10 〉	통과 (0.78ms, 33.5MB)
// 테스트 11 〉	통과 (2.69ms, 33.7MB)
// 테스트 12 〉	통과 (0.36ms, 33.5MB)
// 테스트 13 〉	통과 (0.58ms, 33.5MB)