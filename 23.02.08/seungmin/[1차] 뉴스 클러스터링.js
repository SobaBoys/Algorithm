function solution(str1, str2) {
    
    function sliceStr(str) // 기존 함수와 다른 점 => 영어 소/대문자 문자열만 받또록
    {
         var array=[];
         for (let i = 0 ; i < str.length - 1 ; i++) 
         {
            const s = str.slice(i, i + 2).toLowerCase();
            !s.match(/[^a-zA-Z]+/g) && array.push(s);
        } 
        return array;
    }

    array1 = sliceStr(str1);
    array2 = sliceStr(str2);
    let inter = []; // 교집합
    let union = [...array2]
    for(element of array1)
    {
        for (let i = 0 ; i < union.length; i++) 
        {
                if (element === union[0]) 
                {
                    inter.push(union.shift());
                    break;
                }
            union.push(union[0]);
            union.shift();
        }
    }
    const unionLen = array1.length + array2.length - inter.length; 
    // 합집합 length
    const J = inter.length / unionLen; 
    // 자카드
    return (unionLen===0)? 65536 : parseInt(J*65536);
 
}
// 테스트 1 〉	통과 (0.33ms, 33.4MB)
// 테스트 2 〉	통과 (0.27ms, 33.4MB)
// 테스트 3 〉	통과 (0.26ms, 33.4MB)
// 테스트 4 〉	통과 (1.73ms, 33.9MB)
// 테스트 5 〉	통과 (0.27ms, 33.4MB)
// 테스트 6 〉	통과 (0.18ms, 33.3MB)
// 테스트 7 〉	통과 (0.40ms, 33.4MB)
// 테스트 8 〉	통과 (0.25ms, 33.4MB)
// 테스트 9 〉	통과 (0.43ms, 33.4MB)
// 테스트 10 〉	통과 (0.78ms, 33.5MB)
// 테스트 11 〉	통과 (1.30ms, 33.6MB)
// 테스트 12 〉	통과 (0.35ms, 33.4MB)
// 테스트 13 〉	통과 (0.46ms, 33.4MB)