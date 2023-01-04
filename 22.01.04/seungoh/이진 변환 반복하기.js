function solution(s){
    let deletedzero = 0;
    let count = 0;
    while(s.length !==1){
        const originLen = s.length;
        s = s.split('').filter(v=>v==='1').join('');
        const convertLen = s.length;
        deletedzero += originLen - convertLen;
        s= convertLen.toString(2);
        count++
    }
    return [count, deletedzero]
}