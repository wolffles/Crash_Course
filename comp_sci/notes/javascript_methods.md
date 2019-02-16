

# ~~~~~~~~~~~~~~~~JAVASCRIPT METHODS~~~~~~~~~~~~~~~

# Arrays.prototype

# String.prototype

# String.prototype
function alphabetWar(battlefield) {    
    let battle_ary = battlefield
    if (/#/.test(battlefield)){
      battle_ary = battlefield.match(/\#|\[\w+\]?/g)
      battlefield = battle_ary.join('')
    }
    if (/#{2,}/.test(battlefield)){
      battlefield = battlefield.replace(/(\[\w+\])?#{2,}(\[\w+\])?/g, '[]')
      battle_ary = battlefield.match(/\#|\[\w+\]?/g)
    }
    if (/#(\[\w+\])?#/.test(battlefield)){
      let temp = []
      for(let i = 0; i < battle_ary.length - 2; i++){
        if (battle_ary[i] === "#" && battle_ary[i+1] && battle_ary[i+2] === "#"){
          if (!temp.includes(i+2)){
            temp.push(i)
            temp.push(i+1)
            temp.push(i+2)
          }
        }
      }
      temp.forEach(ele => battle_ary[ele] = '')
      battlefield = battle_ary.join('')
    }
    return battlefield.length === 0 ? '' : battlefield.match(/\w+/g).join('')
}
console.log(alphabetWar('abde[fgh]ijk'))
console.log(alphabetWar('ab#de[fgh]ijk'))
console.log(alphabetWar('ab#de[fgh]ij#k'))
console.log(alphabetWar('##abde[fgh]ijk'))
console.log(alphabetWar('##abde[fgh]'))
console.log(alphabetWar('##abcde[fgh]'))
console.log(alphabetWar('abcde[fgh]'))    
console.log(alphabetWar('##abde[fgh]ijk[mn]op'))
console.log(alphabetWar('#abde[fgh]i#jk[mn]op'))
console.log(alphabetWar('[ab]adfd[dd]##[abe]dedf[ijk]d#d[h]#'))
console.log(alphabetWar('[a]#[b]#[c]'))
console.log(alphabetWar('[a]#b#[c][d]'))
console.log(alphabetWar('[a][b][c]'))
console.log(alphabetWar('##a[a]b[c]#'))