## Add two numebr(2)
```Python
class Solution:
    def addTwoNumbers(self, l1: ListNode, l2: ListNode) -> ListNode:
        return self.add(l1, l2, 0)
    
    def add(self, l1:ListNode, l2:ListNode, overflow:int) -> ListNode:
        if l1 == None and l2 == None:
            if overflow == 0:
                return None
            else:
                return ListNode(overflow)
        
        
        total = (l1.val if l1 is not None else 0) + (l2.val if l2 is not None else 0) + overflow
        node = ListNode(total % 10)
        node.next = self.add(l1.next if l1 else None, l2.next if l2 else None, total // 10)
        
        return node
```
