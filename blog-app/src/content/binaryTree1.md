# Binary Tree LeetCode Question
---
### `1. Inorder Tree Traversal`
***difficulty: medium***
***Link: [leetcode link](https://leetcode.com/problems/binary-tree-inorder-traversal/)***
#### Solution

##### 1. Iterative 
`time complexity: O(n)`
`space complexity:O(h)`
```Python
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
from collections import deque
class Solution:
    def inorderTraversal(self, root: TreeNode) -> List[int]:
        s = deque()
        res = []
        curr = root
        
        while True:
            if curr is not None:
                s.append(curr)
                curr = curr.left
                
            elif(s):
                curr = s.pop()
                res.append(curr.val)
                curr = curr.right
            
            else:
                break
                
        return res
```

##### 2. Recursive
`time complexity: O(n)`
`space complexity:O(n)`
```Python
class Solution:
    def inorderTraversal(self, root: TreeNode) -> List[int]:
        res = []
        self.solution(root, res)
                
        return res
    
    def solution(self, node, res):
        if node == None:return
        self.solution(node.left, res)
        res.append(node.val)
        self.solution(node.right, res)
```


## `2.Same BinaryTree`
***difficulty: easy***
***Link: [leetcode link](https://leetcode.com/problems/same-tree/)***
#### Solution
`time complexity: O(n)`
`space complexity: null`
```Python
# Author:Linchen chen # Date：16/02/2021
class Solution:
  def isSameTree(self, p: TreeNode, q: TreeNode) -> bool:
      if p is None and q is None: return True
      if p is None or q is None: return False # if either of the node is empty
      if p.val != q.val: return False # compare node.value
      else:
        return (True and
               self.isSameTree(p.left, q.left) and 
                self.isSameTree(p.right, q.right)
               )
```

## `3.Binary levelOrder traversal`
***difficulty: medium***
***Link: [leetcode link](https://leetcode.com/problems/binary-tree-level-order-traversal/)***
#### Solution
`time complexity: O(n)`
`space complexity: O(n)`

```Python
# Author:Linchen chen # Date：16/02/202
class Solution:
    def levelOrder(self, root: TreeNode) -> List[List[int]]:
      lvl = 0; ans = []
      self.levelOrderSolution(root, lvl, ans)
      return ans
    
    # DFS
    def levelOrderSolution(self, node:TreeNode, lvl:int, ans:List[List[int]]) -> None:
      if node is None: return
      if lvl >= len(ans):
        ans.append([node.val])
      else:
        ans[lvl].append(node.val)
        
      self.levelOrderSolution(node.left, lvl+1, ans)
      self.levelOrderSolution(node.right, lvl+1, ans)
```

## `4.BinaryTree pruning`
***difficulty: medium***
***Link: [leetcode link](https://leetcode.com/problems/binary-tree-pruning/)***
#### Solution, fastest solution in leetcode
`time complexity: O(n)`
`space complexity: O(n)`
```c++
//C++ solution, Linchen Chen, 16/02/2021
class Solution {
public:
  TreeNode* pruneTree(TreeNode* root) {
    if(!root) return root;
    root->left = pruneTree(root->left);
    root->right = pruneTree(root->right);
    if(root->val == 1 || root->left || root->right){
      return root;
    }
    return nullptr;
  }
};
```