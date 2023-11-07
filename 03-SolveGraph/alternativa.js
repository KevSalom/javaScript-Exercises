function SolveGraph(graph, start, target, visited = {}) {
    if (visited[start]) {
      return false;
    }
  
    visited[start] = true;
  
    if (start === target) {
      return true;
    }
  
    if (graph[start].length === 0) {
      return false;
    }
  
    if (graph[start][0] === target) {
      return true;
    } else if (SolveGraph(graph, graph[start][0], target, visited)) {
      return true;
    }
  
    if (graph[start][1] && graph[start][1] === target) {
      return true;
    } else if (graph[start][1] && SolveGraph(graph, graph[start][1], target, visited)) {
      return true;
    }
  
    return false;
  }
  
  console.log(SolveGraph({
    a: ["c"],
    c: ["s", "d"],
    s: ["c"],
    d: ["c"]
  }, 'a', 'x'));