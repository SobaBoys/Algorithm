function solution(record) {
    const Info = new Map();
    const ans = [];
    
    record.forEach((element) => {
        const [order, id, nickname] = element.split(" "); 
                
        if (order === 'Enter') {
            Info.set(id, nickname);
            ans.push([id, 'Enter']);
        }
        else if (order === 'Leave') {
            ans.push([id, 'Leave']);
        }
        else if (order === 'Change') {
            Info.set(id, nickname);
        }
    })
    
    const useSendMessage = (id, status) => {
        if (status === 'Enter')
            return `${Info.get(id)}님이 들어왔습니다.`
        else if (status === 'Leave')
            return `${Info.get(id)}님이 나갔습니다.`
    }
    
    return ans.map(([id, status]) => {
      useSendMessage(id, status);
    })
}