function solution(s) {
    var countZero =0;
    var countChange = 0;
    var answer =[];
    var array = [...s]
    while(true)
    {
        
        if(array.join('') == '1')
        {
            break
        }
        countChange +=1 ;
        for(const element of array)
        {
            if(element == 0)
            {
                countZero+=1
            }
        }
        var copyArray = array.filter(function(data) {
        return data != 0;
        });
        var pivot = copyArray.length.toString(2)
        array = [...pivot]
        

        
    }
    // console.log(`countZero: ${countZero}`)
    // console.log(`countChange: ${countChange}`)
    answer.push(countChange)
    answer.push(countZero)
    
    return answer
}