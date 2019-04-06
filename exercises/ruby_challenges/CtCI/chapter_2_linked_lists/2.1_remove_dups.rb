# Write code to remove duplicates form an unsorted linked list.


# creating a linked list
class Node
  attr_accessor :data, :next
  def initialize(data, next_node = nil)
    @data = data
    @next = next_node
  end
end

list = Node.new(3)
list = Node.new(4,list)
list = Node.new(5,list)
list = Node.new(10,list)
list = Node.new(3,list)

def remove_next(node)
  node.next = node.next.next
  return node 
end 

def remove_dups(head)
  hash = {}
  temp = head
  hash[temp.data] = true
  while(temp.next != nil)
    if(hash[temp.next.data] === nil)
      hash[temp.next.data] = true 
      temp = temp.next
    else 
      temp = remove_next(temp)
      temp = temp.next 
    end
  end
  return head 
end

p remove_dups(list)
p list