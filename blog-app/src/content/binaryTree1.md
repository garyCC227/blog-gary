# Binary Tree LeetCode Question
---
### `1. Inorder Tree Traversal(94)`
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


## `2.Same BinaryTree(100)`
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

## `3.Binary levelOrder traversal(102)`
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

## `4.BinaryTree pruning(814)`
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

## `5.Path Sum(112)`
***difficulty: easy***

***Link: [leetcode link](https://leetcode.com/problems/path-sum/)***
#### Solution
`time complexity: O(n)`

`space complexity: Null`
```Python
class Solution:
    def hasPathSum(self, root: TreeNode, targetSum: int) -> bool:
        if not root: return False
        return self.sol(root, 0, targetSum)
    
    def sol(self, node: TreeNode, partSum:int, targetSum:int) -> bool:
        if node.left and node.right:
            return (self.sol(node.left, partSum + node.val, targetSum) or
                    self.sol(node.right, partSum + node.val, targetSum))
        elif node.left:
            return self.sol(node.left, partSum + node.val, targetSum)
        elif node.right:
            return self.sol(node.right, partSum + node.val, targetSum)
        else:
            #check path sum
            if partSum + node.val == targetSum:
                return True
            else:
                return False
```

## `6.Sum root to leaf number(129)`
***difficulty: easy***

***Link: [leetcode link](https://leetcode.com/problems/sum-root-to-leaf-numbers/)***
#### Solution
`time complexity: O(n)`

`space complexity: Null`

```Python
class Solution:
    def sumNumbers(self, root: TreeNode) -> int:
        if not root: return 0
        ans = self.solution(root, 0)
        return ans
    
    def solution(self, node:TreeNode, subSum: int) -> None:

        if node.left and node.right:
            return (self.solution(node.left, subSum * 10 + node.val) +
            self.solution(node.right, subSum * 10 + node.val))
        elif node.left:
            return self.solution(node.left, subSum * 10 + node.val)
        elif node.right:
            return self.solution(node.right, subSum * 10 + node.val)
        else:
            
            return subSum*10 + node.val 
```

## `7.Lowest Common Ancestor of a Binary Tree(236)`
***difficulty: easy***

***Link: [leetcode link](https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/)***
#### Solution
`time complexity: O(n)`

`space complexity: Null`

```Python
class Solution:
    def lowestCommonAncestor(self, root: 'TreeNode', p: 'TreeNode', q: 'TreeNode') -> 'TreeNode':
        if not root or root == p or root ==q:return root
        left = self.lowestCommonAncestor(root.left, p, q)
        right = self.lowestCommonAncestor(root.right, p, q)
        if(left and right): return root
        return left if left else right
```

