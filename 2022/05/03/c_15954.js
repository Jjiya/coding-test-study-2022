const fs = require("fs");

(function solution() {
  let input = fs.readFileSync("./sample/c_15954.txt").toString().split("\r\n");

  let [n, k] = input[0].split(/\s/).map((val) => +val);
  let dollList = input[1].split(/\s/).map((doll) => +doll);

  // 최소 표준 편차 저장
  let minStandardDeviation = 1000 ** 3;

  // 인형을 k++개씩 선택하는데, n보다 같거나 작을때 까지
  while (k <= n) {
    for (let idx = 0; idx < n; idx++) {
      // 차례로 인형을 선택하는데, idx번째부터 선택한 k개의 인형이 범위 벗어나면 ㅂㅂ
      if (n < idx + k) break;

      // 1. 선택한 인형들의 평균 구하기
      let sumDoll = 0;
      for (let j = idx; j < idx + k; j++) {
        sumDoll += dollList[j];
      }

      let avgDoll = sumDoll / k;

      // 2. 각 인형마다 평균으로 떨어진 거리를 제곱한 값을 구함
      let sumSquare = 0;

      for (let j = idx; j < idx + k; j++) {
        sumSquare += Math.abs(dollList[j] - avgDoll) ** 2;
      }

      // 3. 2번의 값을 자료 개수로 나눈 후 제곱 근을 구한다.
      let sqrtSquare = Math.sqrt(sumSquare / k);

      if (sqrtSquare < minStandardDeviation) minStandardDeviation = sqrtSquare;
    }
    // 인형 선택 개수 증가
    k++;
  }

  // 최소 표준 편차
  console.log(minStandardDeviation);
})();
