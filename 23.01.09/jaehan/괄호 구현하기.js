const isCorrectX = ["(", "[", "{"];
const isCorrectY = [")", "]", "}"];

const isCorrect = (s) => {
    for (let i = 0 ; i < s.length ; i++) {
        for (let j = 0 ; j < 3 ; j++) {
            if (s[i] === isCorrectX[j] && s[i + 1] === isCorrectY[j]) {
                s = s.slice(0, i).concat(s.slice(i+2));
                i = -1;
                break;
            }
        }
    }
    
    return s.length === 0;
}

const solution = (s) => {
    let cnt = 0;
    for (let i = 0 ; i < s.length ; i++) {
        let tmp = s[0];
        s = s.slice(1);
        s += tmp;
        
        if (isCorrect(s))
            cnt++;
    }
    
    return cnt;
}