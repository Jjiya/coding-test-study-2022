const fs = require("fs");

(function solution() {
  let input = fs.readFileSync("./sample/a_20126.txt").toString().split("\r\n");
  // 입력 파일을 숫자 형식의 배열로 변환
  let roomC040 = input.map((val) => val.split(/\s/).map((str) => +str));

  // 시험 가능 시간
  let availableTime = -1;

  // 안교수의 시험 시작 시간
  let [anStart, anPeroid, roomMaxTime] = roomC040[0];

  // 안교수의 수업을 제외한 후 남은 시험 예정 시간을 오름차순 정렬
  roomC040 = roomC040.slice(1).sort((a, b) => a[0] - b[0]);

  // 1. 안교수의 시험 시작이 0이고, 첫번째 시험 시작이 안교수 시험이 끝난 후라면 0 출력
  if (anStart === 0 && anStart + anPeroid <= roomC040[0][0]) {
    console.log(0);
    return;
  }

  // 2. 현재 시험과 다음 시험 사이의 간격이 안교수의 시험 기간보다 크거나 같으면 현재 시험 종료 시간 반환
  for (let i = 0; i < roomC040.length - 1; i++) {
    let [start, period] = roomC040[i];
    if (anPeroid <= roomC040[i + 1][0] - (start + period)) {
      availableTime = start + period;

      console.log(availableTime);
      return;
    }
  }

  // 마지막 시험 가져오기
  const [lastTime, lastPeroid] = [...roomC040].pop();

  // 마지막 시험의 종료시간 + 안교수 시험 기간이 강의실 최대 시간보다 작으면 마지막 시험 종료시간 반환
  if (anPeroid + lastPeroid <= roomMaxTime) {
    availableTime = lastPeroid;
  }

  console.log(availableTime);
})();
