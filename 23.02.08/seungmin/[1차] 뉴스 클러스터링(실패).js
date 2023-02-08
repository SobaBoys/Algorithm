function solution(str1, str2) {
    
    function sliceStr(str)
    {
         var array=[];
         for (let i = 0 ; i < str.length - 1 ; i++) 
         {
            const s = str.slice(i, i + 2).toLowerCase();
            !s.match(/[^a-zA-Z]+/g) && array.push(s);
        } 
        return array;
    }
  
//     function sliceStr(str)
//     {
//       // let words = 
//       //     str.replace(/[\d\s\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"]/g,"");
//       console.log(str);
//       str = str.toLowerCase();
//       let array = [];
//       for(var i=0; i<str.length; i++)
//       {
//           if (!i%2===0) array.push(str[i-1]+str[i])
//       }
//       for(var k=0; k<array.length; k++)
//       {
          
//       }
//       return array;
//     }
  
    array1 = sliceStr(str1);
    array2 = sliceStr(str2);
    let inter = []; // 교집합
    for(var j=0; j<array1.length; j++)
    {
        if(array2.includes(array1[j]))
        {
            inter.push(array1[j]);
        }
    }
    // array1 = array1.filter(x => !inter.includes(x));
    // let union = [...array1, ...array2]; //합집합
    // const set = new Set(union);
    // const uniqueUnion = [...set];
    // var answer= parseInt(inter.length/union.length*65536);
    
    const realUnion = array1.length + array2.length - inter.length;
    const J = inter.length / realUnion;

    return !realUnion ? 65536 : parseInt(J * 65536);
 
}
// 테스트 1 〉	통과 (0.27ms, 33.4MB)
// 테스트 2 〉	통과 (0.34ms, 33.4MB)
// 테스트 3 〉	통과 (0.34ms, 33.4MB)
// 테스트 4 〉	실패 (1.26ms, 33.8MB)
// 테스트 5 〉	통과 (0.39ms, 33.5MB)
// 테스트 6 〉	통과 (0.27ms, 33.5MB)
// 테스트 7 〉	실패 (0.31ms, 33.4MB)
// 테스트 8 〉	통과 (0.26ms, 33.4MB)
// 테스트 9 〉	실패 (0.48ms, 33.5MB)
// 테스트 10 〉	실패 (0.59ms, 33.5MB)
// 테스트 11 〉	실패 (0.52ms, 33.5MB)
// 테스트 12 〉	통과 (0.32ms, 33.4MB)
// 테스트 13 〉	통과 (0.27ms, 33.5MB)