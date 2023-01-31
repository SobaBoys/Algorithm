function solution(bridge_length, weight, truck_weights) {
  let time = 0;
  let queue = [[0, 0]];
  // 큐는 다리를 형상화한 것이다
  // [ 트럭무게, 나갈 시간]
  let weightOnBridge = 0;
  let trucks = truck_weights;
  while (queue.length > 0 || trucks.length > 0) {
    if (queue[0][1] === time) weightOnBridge -= queue.shift()[0];

    if (weightOnBridge + trucks[0] <= weight) {
      weightOnBridge += trucks[0];
      queue.push([trucks.shift(), time + bridge_length]);
    } else {
      if (queue[0]) time = queue[0][1] - 1;
    }
    time++;
  }
  return time;
}
