// https://ko.khanacademy.org/math/statistics-probability/summarizing-quantitative-data/variance-standard-deviation-population/a/calculating-standard-deviation-step-by-step
const fs = require("fs");
// 일반 표준편차 구하기... 문제의도와 맞지 않아서...
(function solution() {
  let input = fs.readFileSync("./sample/c_15954.txt").toString().split("\r\n");
  let dollList = input[1].split(/\s/).map((doll) => +doll);

  let dollAvg =
    dollList.reduce((sum, doll) => (sum += doll), 0) / dollList.length;
  console.log("평균", dollAvg);

  let dist = dollList.reduce(
    (distSum, doll) => (distSum += Math.abs(doll - dollAvg) ** 2),
    0
  );
  console.log("거리 합계", dist);

  let sum = Math.sqrt(dist / dollList.length);
  console.log("표준편차", sum);
})();
