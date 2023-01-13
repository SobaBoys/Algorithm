# [lv.2] 다리를 지나는 트럭

# 📌 문제

**[level 2] 다리를 지나는 트럭**

**혼자서 해결 했는가? :  ❌**

**성능 개선을 했는가? : ❌**

---

### **문제 설명**

트럭 여러 대가 강을 가로지르는 일차선 다리를 정해진 순으로 건너려 합니다. 모든 트럭이 다리를 건너려면 최소 몇 초가 걸리는지 알아내야 합니다. 다리에는 트럭이 최대 bridge_length대 올라갈 수 있으며, 다리는 weight 이하까지의 무게를 견딜 수 있습니다. 단, 다리에 완전히 오르지 않은 트럭의 무게는 무시합니다.

예를 들어, 트럭 2대가 올라갈 수 있고 무게를 10kg까지 견디는 다리가 있습니다. 무게가 [7, 4, 5, 6]kg인 트럭이 순서대로 최단 시간 안에 다리를 건너려면 다음과 같이 건너야 합니다.

| 경과 시간 | 다리를 지난 트럭 | 다리를 건너는 트럭 | 대기 트럭 |
| --- | --- | --- | --- |
| 0 | [] | [] | [7,4,5,6] |
| 1~2 | [] | [7] | [4,5,6] |
| 3 | [7] | [4] | [5,6] |
| 4 | [7] | [4,5] | [6] |
| 5 | [7,4] | [5] | [6] |
| 6~7 | [7,4,5] | [6] | [] |
| 8 | [7,4,5,6] | [] | [] |

따라서, 모든 트럭이 다리를 지나려면 최소 8초가 걸립니다.

solution 함수의 매개변수로 다리에 올라갈 수 있는 트럭 수 bridge_length, 다리가 견딜 수 있는 무게 weight, 트럭 별 무게 truck_weights가 주어집니다. 이때 모든 트럭이 다리를 건너려면 최소 몇 초가 걸리는지 return 하도록 solution 함수를 완성하세요.

### 제한 조건

- bridge_length는 1 이상 10,000 이하입니다.
- weight는 1 이상 10,000 이하입니다.
- truck_weights의 길이는 1 이상 10,000 이하입니다.
- 모든 트럭의 무게는 1 이상 weight 이하입니다.

### 입출력 예

| bridge_length | weight | truck_weights | return |
| --- | --- | --- | --- |
| 2 | 10 | [7,4,5,6] | 8 |
| 100 | 100 | [10] | 101 |
| 100 | 100 | [10,10,10,10,10,10,10,10,10,10] | 110 |

[출처](http://icpckorea.org/2016/ONLINE/problem.pdf)

※ 공지 - 2020년 4월 06일 테스트케이스가 추가되었습니다.

---

# 📌 풀이

## 오답 풀이

- 생각했던 풀이
    1. 입력으로 준 트럭(truck_weights)를 순서대로 꺼내서 다리를 건너게 해야함 **(선입선출)** . 그러므로
        1. 다리를 건너지 않은 트럭
        2. 다리에 올라가있는 트럭
        3. 다리를 다 건넌 트럭
        
        위와 같이 Queue로 구현해야 겠다고 생각하였음
        
        ```jsx
        function solution(truck_weights) // a.다리를 건너지 않은 트럭
        {
        	var crossing = []; // b. 다리에 올라가있는 트럭
        	var crossed = []; // c. 다리를 다 건넌 트럭
        	return answer;
        }
        ```
        
    2. 몇 초가 걸리는지를 계산할 변수 **seconds**
        
        ```jsx
        function solution(truck_weights) 
        {
        	var crossing = []; 
        	var crossed = []; 
        
        	var seconds = 0; // 시간 계산 변수
        	return seconds;
        }
        ```
        

    
    설명:
    
    - 모든 로직을 truck_weights와 crossing이 모두 비어질 때 까지 반복시켰습니다.
    - 로직이 시작되면, crossing의 맨 앞 요소를 꺼내어 crossed로 push
        
        (다리를 건너는 중인 트럭들 중 맨 앞의 트럭을 다 건넌 것으로 처리해줍니다)
        
    - **조건문 ⇒**
        - 현재 bridge에 트럭이 더 들어갈 수 있는지를 판별,
        - 만약 들어갈 수 없다면 다음 조건으로 넘어감
        - 만약 가능하다면, truck_weights[0]을 crossing에 push,
            
            그 다음요소도 조건에 부합하는지 확인
            
        - 최대로 많은 트럭을 다리 위로 올린 뒤, 초 증가 (seconds++;)

## 수도코드

```jsx
function solution(bridge_length, weight, truck_weights) {
  var seconds = 0;
  var crossing = []; 
	var crossed = [];
	while( truck_weights.length!==0 && crossing.length!==0)
	{
			if(crossing.length!==0)
            {
              crossed.push(crossing[0]);  
              crossing.shift()
            } 
			var bridge_weight = [...crossing]; // this
            for(truck of truck_weights)
						{
							if(truck+bridge_weight<= weight)
			                {
			                    crossing.push(truck)
			                    truck_weights.shift()
			                }
			                else
                {
                    crossing.push(0)
                    break;
                }
							}

			seconds++;
	}
    return seconds;
}
```

## 리뷰

1. 큐를 통한 구현으로 풀이했는데 반복문과 조건문이 너무 많아서 디버그를 하기 힘들었다.
    
    그래서 에러 핸들링을 하려고 해도 어느 부분인지 파악하기가 너무 힘든듯.