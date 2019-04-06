# Write code to remove duplicates form an unsorted linked ListeningStateChangedEvent.


# creating a linked list
class Node
  attr_accessor :data, :next
  def initialize(data, next_node = nil)
    @data = data
    @next = next_node
  end
end

list = Node.new(5)
list = Node.new(4,list)
list = Node.new(3,list)
list = Node.new(10,list)
list = Node.new(3,list)