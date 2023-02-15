function solution(record) {
    let answer = [];
    let users = [];
    let userDict ={};
    for (command of record) // 문자열을 공백 기준으로 분류하여 배열로 반환
    { 
        let [action, uid, nickname] = command.split(" ");
        if(action === 'Enter')
        {
            answer.push([uid, '님이 들어왔습니다.'])
        }
        if(action === 'Leave') // 나가는 경우 닉네임 변경 없으므로 'continue'
        {
            answer.push([uid, '님이 나갔습니다.'])
            
            continue;
        }
        userDict[uid] = nickname; 
        // Change, Enter 인 경우 닉네임을 새로 들어온 입력대로 uid(키), 닉네임(밸류)로 객체에 저장
        
    }
    return answer.map(ele => userDict[ele[0]] + ele[1]);
}   