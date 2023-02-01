// n 편 중(배열 길이)
// 인용횟수 h번 이상(요소 값) 인 요소가 h개 이상 , 나머지는 h 이하
// 이 H의 최댓값이 h-index
function solution(citations) {
    
    let hIndex = [];
    citations.sort((a,b)=> b-a);
   
    for (let i = 0; i<citations.length; i++)
    {
        if(i >= citations[i]) return i;
    }
    return citations.length;
}