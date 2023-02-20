let record = [
  // 상태, 아이디, 닉네임 순
  "Enter uid1234 Muzi",
  "Enter uid4567 Prodo",
  "Leave uid1234",
  "Enter uid1234 Prodo",
  "Change uid4567 Ryan",
];

function solution(record) {
  // userInfo를 맵 객체로 할당하는 이유는?
  // 중복닉네임을 허용하기 때문에 같은 닉네임이더라고 고유한 key를 갖을 수 있도록 해준다
  const userInfo = {};
  // action
  const action = [];
  // stateMapping을 맵 객체로 할당하는 이유?
  const stateMapping = {
    Enter: "님이 들어왔습니다.",
    Leave: "님이 나갔습니다.",
  };

  record.forEach((v) => {
    // 하나로 묶여있는 배열 내부의 문자열을
    // 상태(state), 아이디(id), 닉네임(nick)로 3개로 각각 분리해준다
    const [state, id, nick] = v.split(" ");
    console.log(record);

    // 만약 상태가 change가 아니라면(입장 혹은 퇴장일 때)
    // 상태와 아이디를 action 배열에 푸시한다
    if (state !== "Change") {
      console.log(state, id);
      action.push([state, id]);
    }

    // 만약 닉네임(nick)이라면 중복 닉네임을 허용하도록 설정해줘야한다
    // 또한 재입장할 때는 해당 아이디를 키로 갖는 요소에 닉네임을 덮어쓰기 해서
    // 변경된 닉네임으로 표시되게 끔 설정해줘야한다
    // Map객체로 초기화한 userInfo에 id를 키로
    // nick을 그 키에 대한 값으로 저장해준다
    // 즉, 닉네임이 중복되더라도 맵핑된 id에 따라서 고유한 키를 가지기 때문에
    // 닉네임이 같더라도 서로 다른 키를 갖기 때문에 다른 값으로 인식한다
    if (nick) {
      userInfo[id] = nick;
      console.log(userInfo);
      /* {uid1234: 'Muzi'}
      {uid1234: 'Muzi', uid4567: 'Prodo'}
      {uid1234: 'Prodo', uid4567: 'Prodo'}
      {uid1234: 'Prodo', uid4567: 'Ryan'}
      
      */
    }
  });

  // 사용자의 현재 상태를 담은 배열 action을 맵핑해서 알맞은 메세지를 출력하도록 해준다
  return action.map(([state, uid]) => {
    console.log(state, uid);
    console.log(action);
    return `${userInfo[uid]}${stateMapping[state]}`;
  });
}

console.log(solution(record));
