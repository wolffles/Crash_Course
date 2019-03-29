# implement a method to perform basic string 
# compression using the counts of repeated charcters. 
# for example the string aabbcccccaaa would become 
# a2b1c5a3 if the compressed string would not become 
# smaller than the original string, your method should 
# return the original string. you can assume the string 
# has only uppercase and lowercasee letters(a-z).

def stringCompress(string)
  i,temp,count,maxcount,newStr = 1,string[0],1,0,''
  while i < string.length
    if temp === string[i]
      count += 1 
      maxcount = maxcount > count ? maxcount : count
    elsif temp != string[i]
      newStr += temp + count.to_s
      temp = string[i]
      count = 1
    end
    i+=1
  end 
    newStr += temp +count.to_s
    maxcount = maxcount > count ? maxcount : count
    return maxcount === 1 ? string : newStr
end

puts "stringCompress(aaaaaa) === a6"
puts stringCompress("aaaaaa") === "a6"

puts "stringCompress(aabcccccaaa) === a2b1c5a3"
puts stringCompress("aabcccccaaa") === "a2b1c5a3"