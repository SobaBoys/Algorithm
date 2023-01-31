function solution(citations) {
	return citations.sort((a,b) => {return a > b && -1}).reduce((acc, cur, idx) => {return idx + 1 === cur ? acc = idx + 1 : acc});
}