//Objective is to find all distinct root-to-leaf paths that result

class Node {
    constructor(left, right, val) {
      this.left = left
      this.right = right
      this.val = val
    }
}
  
class Tree {
    constructor(root) {
      this.root = null
    }
  
    createRoot(val) {
      this.root = new Node(null, null, val)
    }
  
    addLeftNode(node, val) {
      node.left = new Node(null, null, val)
    }
  
    addRightNode(node, val) {
      node.right = new Node(null, null, val)
    }
}

let tree = new Tree()
tree.createRoot(3)
tree.addLeftNode(tree.root, 9)
tree.addRightNode(tree.root, 20)
tree.addRightNode(tree.root.right, 7)
tree.addLeftNode(tree.root.right, 15)

let sum = 12


//O(n) solution that does a dfs traversal of the tree.

let paths = []
    
function dfs(node, path, sum) {
    if (!node) {
        return
    }
        
    path.push(node.val)
        
    //If we've reached a leaf and the sum will reach 0
    if (!node.left && !node.right && sum == node.val) {
        paths.push([...path])
    //Otherwise, dfs with the path and sum
    } else {
        dfs(node.left, path, sum - node.val)
        dfs(node.right, path, sum - node.val)    
    }
        
    //Get rid of last element of the path (backtrack)
    path.splice(path.length - 1)
}
dfs(tree.root, [], sum)
    
return paths