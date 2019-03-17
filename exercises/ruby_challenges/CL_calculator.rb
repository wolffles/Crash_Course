p 'welcome to the Commandline calculator, this calculator takes in a string of arithmetic and prints out the numeric answer'
p 'are you ready? yes or no'
input = 'no'
until input === "yes"
  input = gets.chomp
end
`clear`

#((2+5)+20-5*3)
# regex match (digit +-*/ * digit *)
# if match solve substring
# and replace repeat until no more matches.
# solve helper
def solve(string)
  # from left to right * or / then + or -
end
def seperate(string)
  #regex for order of operation
  while regex match is true
    #replace substring matched with result of solve(substring)
  return string
end
def calculate(string)
  seperate(string)
end

