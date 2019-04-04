# Assume you have a method isSubstring which checks if one word 
# is a substring of another. Given two SVGStringList, s1 and s2, 
# write code to check if s2 is a roation of s1 using only one call 
# to isSubstring(e.g."waterbottle" is a rotation of "erbottlewat").

def stringRotation(string1, string2) 
  if (string1.length != string2.length) 
    return false;
  end
  return (string2 + string2).include?(string1);
end

# Approaches:
# a) sorting chars before comparing -> know if it is permutation but not know if it is in the right order
# b) look for starting character before moving around and rotating -> starting characters might repeat
# c) break string 2 into a front and back, and ensure that front tallies with isSubstring before doing isSubstring

# Test
p stringRotation('waterbottle', 'erbottlewat') == true
p stringRotation('waterbottle', 'erbotlewatt') == false
p stringRotation('aaata', 'aataa') == true
