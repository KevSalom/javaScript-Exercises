function SolveGraph(graph, start, target, visited = {}) {
  // Tu código aquí

  if (visited[start]) return false;
  else visited[start] = true;

  if (start === target) return true;

 if (graph[start][0] === target){
    return true
  } else if (SolveGraph(graph, graph[start][0], target, visited)){
    return true
  } 

  
  if(graph[start][1] && graph[start][1] === target){
    return true
  } else if(graph[start][1] && (SolveGraph(graph, graph[start][1], target, visited))){
    return true
  }

  return false
}

console.log(SolveGraph({
  a: ["c"],
  c: ["s", "d"],
  s:["c"],
  d:["c"]
}, 'a', 'x'))

module.exports = SolveGraph;
