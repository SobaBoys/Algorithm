다음과 같은 문제를 폴어보았다.
> ## [level 2] n^2 배열 자르기 - 87390 

[문제 링크](https://school.programmers.co.kr/learn/courses/30/lessons/87390) 


### 구분

코딩테스트 연습 > 월간 코드 챌린지 시즌3

### 채점결과

<br/>정확성: 100.0<br/>합계: 100.0 / 100.0

### 문제 설명

<p>정수 <code>n</code>, <code>left</code>, <code>right</code>가 주어집니다. 다음 과정을 거쳐서 1차원 배열을 만들고자 합니다.</p>

<ol>
<li><code>n</code>행 <code>n</code>열 크기의 비어있는 2차원 배열을 만듭니다.</li>
<li><code>i = 1, 2, 3, ..., n</code>에 대해서, 다음 과정을 반복합니다.

<ul>
<li>1행 1열부터 <code>i</code>행 <code>i</code>열까지의 영역 내의 모든 빈 칸을 숫자 <code>i</code>로 채웁니다.</li>
</ul></li>
<li>1행, 2행, ..., <code>n</code>행을 잘라내어 모두 이어붙인 새로운 1차원 배열을 만듭니다.</li>
<li>새로운 1차원 배열을 <code>arr</code>이라 할 때, <code>arr[left]</code>, <code>arr[left+1]</code>, ..., <code>arr[right]</code>만 남기고 나머지는 지웁니다.</li>
</ol>

<p>정수 <code>n</code>, <code>left</code>, <code>right</code>가 매개변수로 주어집니다. 주어진 과정대로 만들어진 1차원 배열을 return 하도록 solution 함수를 완성해주세요.</p>

<hr>

<h5>제한사항</h5>

<ul>
<li>1 ≤ <code>n</code> ≤ 10<sup>7</sup></li>
<li>0 ≤ <code>left</code> ≤ <code>right</code> &lt; n<sup>2</sup></li>
<li><code>right</code> - <code>left</code> &lt; 10<sup>5</sup></li>
</ul>

<hr>

<h5>입출력 예</h5>
<table class="table">
        <thead><tr>
<th>n</th>
<th>left</th>
<th>right</th>
<th>result</th>
</tr>
</thead>
        <tbody><tr>
<td>3</td>
<td>2</td>
<td>5</td>
<td><code>[3,2,2,3]</code></td>
</tr>
<tr>
<td>4</td>
<td>7</td>
<td>14</td>
<td><code>[4,3,3,3,4,4,4,4]</code></td>
</tr>
</tbody>
      </table>
<hr>

<h5>입출력 예 설명</h5>

<p><strong>입출력 예 #1</strong></p>

<ul>
<li>다음 애니메이션은 주어진 과정대로 1차원 배열을 만드는 과정을 나타낸 것입니다.</li>
</ul>

<p><img src="https://grepp-programmers.s3.amazonaws.com/production/file_resource/103/FlattenedFills_ex1.gif" title="" alt="ex1"></p>

<p><strong>입출력 예 #2</strong></p>

<ul>
<li>다음 애니메이션은 주어진 과정대로 1차원 배열을 만드는 과정을 나타낸 것입니다.</li>
</ul>

<p><img src="https://grepp-programmers.s3.amazonaws.com/production/file_resource/104/FlattenedFills_ex2.gif" title="" alt="ex2"></p>


> 출처: 프로그래머스 코딩 테스트 연습, https://programmers.co.kr/learn/challenges

> ## 문제 해결과정

처음에는 단순 구현 문제라고 생각했다.
왜냐하면 이해가 느린 필자는 문제를 이해하는 것조차 어려웠고 
각 행렬의 조건 찾는것도 시간이 많이 걸렸거든..
오랫동안 보다보니, 한 칸의 값은 해당 행,열중 더 큰 값으로 들어간다는걸 알았고..
다음과 같이 순서를 나눠 문제를 해결했다.

	1. n*n 2차원 배열 만들기
    2. col,row 중 더 큰 값으로 2차원 배열 채워주기
    3. forEach문을 이용해 다시 1차원 배열로 만들기
    4. left,right에 맞춰 .slice()로 배열 자르기
    
코드는 이랬다.
![](https://velog.velcdn.com/images/turfguy/post/2ec09e29-6328-441c-8dda-590b86485084/image.png)

어차피 틀린 코드니까 그냥 사진으로 첨부한다.
준 테스트 케이스에서는 문제 없이 통과되길래 그대로 제출했다.
근데 내가 문제의 제한사항을 간과한것같다.

> <h5>제한사항</h5>
<ul>
<li>1 ≤ <code>n</code> ≤ 10<sup>7</sup></li>
<li>0 ≤ <code>left</code> ≤ <code>right</code> &lt; n<sup>2</sup></li>
<li><code>right</code> - <code>left</code> &lt; 10<sup>5</sup></li>

</ul>


n이 10^7 까지도 들어올 수 있다는 사실이다. 
그래서 히든 테스트케이스에서 처참하게 갈려버렸다.
메모리초과, 시간초과..

그래서 다 지우고 다시 생각해봤다. 
이 문제는 애초에 n*n 배열로 만들어서 풀면 시간/메모리 초과에 걸리므로,
규칙을 파악해서 바로 return해야하는 문제였다. 
```javascript
function solution(n, left, right) {
    var answer = [];
    for ( var i = left ; i<= right ; i++)
    {
        const row = parseInt(i/n);	// Row
        const col = i%n;	// Column
        answer.push(Math.max(row,col)+1)
    }
    return answer
}
```

일단, for문의 i는 left부터 시작해서 right와 같을 때 까지 순회시킨다.
![](https://velog.velcdn.com/images/turfguy/post/c890f3c5-14d4-4eda-8ace-6659c985f24d/image.png)

그 말인 즉슨 다음과 같은 경우는 2부터 5까지 순회하면서,
필요가 없는 0~1 / 6~8의 값은 아예 고려하지 않는 것이다.
지금처럼 n이 작은 경우에는 n*n 배열을 만들어서 순회해도 되지만
그럼 n이 10^5처럼 큰 수인 경우에는, 시간 혹은 메모리가 초과되어버린다.

그리고 n*n 배열의 특징은 **row는 i/n이고 col은 i%n** 이라는 것인데,
이를 계산한 뒤 더 큰 값을 선택하여, 순서대로 push해주면 끝.

> ## 느낀점 

문제를 이해하는 능력을 길러야 할 것 같다.
구현처럼 요구사항이 긴 문제의 경우 문제를 읽은 뒤, 요구사항을 파악하는데
너무 많은 시간을 할애한다고 느꼈다.
코딩테스트의 경우 다른 수험자들과 같은 시간 안에 문제를 해결해야 하는데
시간이 부족한면 당연히 불리하기 때문이다.

두번째는 여러 유형의 문제를 **많이** 풀어보고 풀이법을 몸에 익히는 것이다.
어제 '괄호 회전하기' 도 잘못된 풀이 방식을 채택해 꽤 애를 먹었다.
그래서 주변에 문제를 보여주고 풀어보라고 했더니 다들 비슷한 유형을 풀어봤는지 손 쉽게 풀었다. **역시 경험이 중요하다.**

