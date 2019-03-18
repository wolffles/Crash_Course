p 'Welcome to the Commandline calculator, this calculator takes '
p 'in a string of arithmetic and prints out the numeric answer.'

p 'Are you ready? yes or no'
input = 'no'
until input === "yes"
  input = gets.chomp
end
satisfied = 'no'
def solve(string)
  i = 0
  string = string.scan(/[\d]+\.?0?|[\D]/)
  while i < string.length
    if string[i] == "/"
      sub = string[i-1].to_f/string[i+1].to_f
      string[i] = sub
      string.delete_at(i-1)
      string.delete_at(i) 
      i = 0
    elsif  string[i] == "*"
      sub = string[i-1].to_f*string[i+1].to_f
      string[i] = sub
      string.delete_at(i-1)
      string.delete_at(i) 
      i = 0
    else 
      i += 1
    end
  end
    i = 0
    while i < string.length
    if string[i] == "-"
      sub = string[i-1].to_f-string[i+1].to_f
      string[i] = sub
      string.delete_at(i-1)
      string.delete_at(i) 
      i = 0
    elsif  string[i] == "+"
      sub = string[i-1].to_f+string[i+1].to_f
      string[i] = sub
      string.delete_at(i-1)
      string.delete_at(i) 
      i = 0
    else 
      i += 1
    end
  end
  return string.join('')
end

def seperate(string)
  return string.scan(/\(\d+\D?\d+?\)/)[0]
end

def calculate(string)
  og_sub = seperate(string)
  while og_sub 
    substring = solve(og_sub.delete('()'))
    string.sub!(og_sub, substring)
    p string
    og_sub = seperate(string)
  end
  return solve(string)
end
until satisfied === "yes"
  p "please enter your expression"
  input = gets.chomp
  p "Answer: " + calculate(input).to_s
  p 'Are you satisfied? yes or no?'
  satisfied = gets.chomp 
end
