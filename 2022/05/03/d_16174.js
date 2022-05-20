"use strict";

const fs = require("fs");

(function solution() {
  let [info, ...gameArea] = fs
    .readFileSync("./sample/d_16174.txt")
    .toString()
    .split("\r\n");

  info = parseInt(info) - 1;
  gameArea = gameArea.map((area) => area.split(/\s/));
  let gameAreaGraph = {};

  for (let i = 0; i < gameArea.length; i++) {
    gameArea[i].forEach((distance, j) => {
      distance = parseInt(distance);

      gameAreaGraph[`${i},${j}`] = [
        `${i + distance},${j}`,
        `${i},${j + distance}`,
      ];
    });
  }

  let visited = [];
  let queue = ["0,0"];

  let arriveEnd = false;

  while (0 < queue.length) {
    let curNode = queue.shift();

    let [xIdx, yIdx] = curNode.split(",").map((idx) => +idx);
    if (info < xIdx || info < yIdx) continue;

    if (gameArea[xIdx][yIdx] === "-1") {
      arriveEnd = true;
      break;
    }

    if (!visited.includes(curNode)) {
      visited.push(curNode);

      queue.push(...gameAreaGraph[curNode]);
    }
  }

  console.log(arriveEnd ? "HaruHaru" : "Hing");
})();
