const isCorrectX = ['(', '[', '{'];
const isCorrectY = [')', ']', '}'];

const isCorrect = (s) => {
    const st = [];
    for (let i = 0 ; i < s.length ; i++) {
      if (s[i] === '(' || s[i] === '{' || s[i] === '[') {
        st.push(s[i]);
        continue;
      }
      else {
        if (st.length === 0) return false;

        for (let j = 0 ; j < 3 ; j++) {
          if (st.length !== 0 && st[st.length - 1] === isCorrectX[j] && s[i] === isCorrectY[j]) {
            st.pop();
            break;
          }
        }
      }
    }
    
    return st.length === 0;
}

const solution = (s) => {
    let cnt = 0;
    for (let i = 0 ; i < s.length ; i++) {
        let tmp = s[0];
        s = s.slice(1);
        s += tmp;

        // 또는 s = s.slice(i) + s.slice(0, i)
        
        if (isCorrect(s))
            cnt++;
    }
    
    return cnt;
}