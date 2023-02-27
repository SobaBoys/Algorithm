let str1 = "aa1+aa2	";
let str2 = "AAAA12";

function solution(str1, str2) {
  let answer = 0;
  function explode(text) {
    const result = [];
    for (let i = 0; i < text.length - 1; i++) {
      const char1 = text.charCodeAt(i);
      const char2 = text.charCodeAt(i + 1);
      if (
        ((char1 >= 65 && char1 <= 90) || (char1 >= 97 && char1 <= 122)) &&
        ((char2 >= 65 && char2 <= 90) || (char2 >= 97 && char2 <= 122))
      ) {
        result.push(text.substr(i, 2).toLowerCase());
      }
    }
    return result;
  }
/////////////////////////////////
  const arr1 = explode(str1);
  const arr2 = explode(str2);
  const set = new Set([...arr1, ...arr2]);
  // 합집합
  let union = 0;
  // 교집합
  let intersection = 0;
  set.forEach((item) => {
    const has1 = arr1.filter((x) => x === item).length;
    const has2 = arr2.filter((x) => x === item).length;
    // 합집합
    union += Math.max(has1, has2);
    // 교집합
    intersection += Math.min(has1, has2);
  });
  return union === 0 ? 65536 : Math.floor((intersection / union) * 65536);
}

console.log(solution(str1, str2));