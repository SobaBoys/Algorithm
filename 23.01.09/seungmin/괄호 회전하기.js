function solution(s) {
    
    const stack = [];
    let result = 0;
    let isRight = true;
    if (s.length % 2 === 1) return 0; // 문자열의 갯수가 홀수인 경우 절대 O일수 없음
    for (var i = 0 ; i< s.length ; i++)
    {
        var candidate = s.slice(i) + s.slice(0,i) 
        // 문자열 회전을 .slice()를 통해 구현
        isRight = true; // 올바른 괄호 문자열인지 판별하는 Boolean 변수 초기화
        for (var word of candidate) // candidate 순회
        {
            if(word === '(' || word === '{'|| word === '[' )
            {
                stack.push(word) // 순회 중, 여는 괄호가 나오면 stack에 푸시해줌
            }
            else
            {
                var leftWord = stack.pop() 
            // 닫는 괄호일 경우, 스택을 pop하고 pop된 문자를 leftWord에 넣는다. 
            // 열어놓은 괄호가 닫히는지 확인해야하므로
                if(word === ')' && leftWord === '(') continue;
                if(word === '}' && leftWord === '{') continue;
                if(word === ']' && leftWord === '[') continue;
                else
                {
                    isRight = false;
                    break;
                }
            }
        }
        if (isRight) result++ // 위 조건들을 거친 뒤, isRight가 true이면, 맞는 문자열이므로 result를 1 올려준다.
    }

    return result;
}