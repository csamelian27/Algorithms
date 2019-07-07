bfs = (root) => {
  if(!root) return root
  let q = []

  while (q.length) {
    let node = q.shift()
    if(!node) continue
    console.log(node.val);
    q.push(node.left)
    q.push(node.right)
  }

  return q
}
