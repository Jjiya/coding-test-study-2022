"use strict";

//참고: https://velog.io/@sangbooom/JS-BFS-DFS

const graph = {
  //노드명 : 인접 노드
  A: ["B", "C"],
  B: ["A", "D"],
  C: ["A", "G", "H", "I"],
  D: ["B", "E", "F"],
  E: ["D"],
  F: ["D"],
  G: ["C"],
  H: ["C"],
  I: ["C", "J"],
  J: ["I"]
};

(function breadthFirstSearch(graph, rootNode) {
  //큐에 시작 노드 넣어놓기
  let queue = [rootNode];
  //방문 내역(=탐색 순서) 저장
  let visited = [];

  //큐에 남은 노드가 없을 때까지 반복
  while (0 < queue.length) {
    console.log(`\n now queue : ${queue} --- \n`)
    //큐의 맨 앞 노드 빼옴 (FIFO)
    let node = queue.shift();

    //현재 노드 탐색한 적 없으면?
    if (!visited.includes(node)) {
      console.log('(X) not visited node : ', node);
      //현재 노드 방문 내역 저장
      visited.push(node);

      //현재 노드의 인접 노드 큐에 삽입
      console.log("queue에 ", ...graph[node], " 넣음");
      queue.push(...graph[node])
    }
  }
  console.log("visited" , visited);
})(graph, "A");