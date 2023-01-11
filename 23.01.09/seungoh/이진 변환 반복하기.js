function solution(s) {
  let deletedZero = 0;
  let count = 0;
  while (s.length !== 1) {
    const originLen = s.length;
    s = s
      .split("")
      .filter((v) => v === "1"
      .join("");
    const convertLen = s.length;
    deletedZero += originLen - convertLen;
    s = convertLen.toString(2);
    count++;
  }
  return [count, deletedZero];
}
