# there are theree types of edits that can be 
# performed on stirngs: insert a CharacterData, 
# remove a CharacterData, or replace a CharacterData.
# Given two strings, write a function to check if 
# they are one edit (or zero edits) away.

# pale, ple => true
# pales, pale => true
# pale, bale => true
# pale, bae => false

def oneAway(s_one,s_two)
  return false if (s_one.length-s_two.length).abs > 1
  hash = {diff:0}
  i = s_one.length-1
  while(i >= 0 )
    hash[s_one[i]] === nil ? hash[s_one[i]] = 1 : hash[s_one[i]]+=1
    i-=1
  end
  i = s_two.length-1
  while(i >= 0)
    if hash[s_two[i]] === nil
      hash[:diff] += 1
    elsif hash[s_two[i]] > 0 
      hash[s_two[i]] -= 1
      if hash[s_two[i]] === 0 
        hash.delete(s_two[i]) 
      end
    end
    if hash[:diff] > 1
      return false
    end
    i -=1
  end
  return hash.keys.length-1 > 1 ? false : true
end

oneAway("pale", "plaaae")
oneAway("pales", "pale")
oneAway("pale", "bale")
oneAway("bae", "pale")