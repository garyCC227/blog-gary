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


## Swap nodes in pairs(24)
```Python

class Solution:
    def swapPairs(self, head: ListNode) -> ListNode:
        if not head:
            return None
        
        if not head.next:
            return head
            
        head.val, head.next.val = head.next.val, head.val
        
        head.next.next = self.swapPairs(head.next.next)
        return head
```


## Reverse Linked List(206)
 - 32ms > 85%
```Python
class Solution:
    def reverseList(self, node: ListNode) -> ListNode:
        if not node:
            return None
        curr = node
        prev = None
        while True:
            next_ = curr.next
            curr.next = prev
            
            prev = curr
            curr = next_
            
            if not curr:
                break
            
        return prev
```


## Linked List cycle(141)
- 48 ms, faster than 92.36%
```Python

class Solution:
    def hasCycle(self, head: ListNode) -> bool:
        fast = slow = head
        
        while (fast is not None) and (fast.next is not None):
            fast, slow = fast.next.next, slow.next
            
            if fast == slow:
                return True
            
        return False
```
