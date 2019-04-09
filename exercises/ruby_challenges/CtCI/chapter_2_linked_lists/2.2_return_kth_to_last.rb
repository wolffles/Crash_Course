# Implement an algorithm to find the kth to last element of a
# singly linked list.

class Node
attr_accessor :data, :next
  def initalizae(data,next_node=nil)
    @data = data
    @next = next_node
  end
end

list = Node.new(3)
list = Node.new(4, list)
list = Node.new(5, list)
list = Node.new(10,list)
list = Node.new(3, list)

def kth_last(head,n)
  i = 0
  while(i < n-1)
    if(head == nil || head.next == nil)
      return nil
    end
    head = head.next
    i+=1
  end
  return head
end

puts kth_last(list,2)