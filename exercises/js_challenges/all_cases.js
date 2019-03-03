// In this kata, you will make a function that converts 
// between camelCase, snake_case, and kebab -case

// You must write a function that changes to a given case. 
// It must be able to handle all three case types:

function split(string) {
  if (string.includes('-')) { return string.split('-') }
  else if (string.includes('_')) { return string.split('_') }
  else if (/[A-Z]/.test(string)) {
    return string.match(/[a-z]+|[A-Z][a-z]*/g).map(
      el => {
        return el.toLowerCase()
      })
  }
  else return [string]
}

function capitalize(string) {
  return string.length > 1 ? string[0].toUpperCase() + string.slice(1) : string[0].toUpperCase()
}

function validate(string) {
  let ary = [];
  ary.push(/-/.exec(string))
  ary.push(/_/.exec(string))
  ary.push(/[A-Z]/.exec(string))
  if (ary.filter(el => el !== null).length > 1) { return "invalid" }
  return "valid"
}

function changeCase(string, type) {
  if (typeof string != "string") { return undefined }
  if (validate(string) === "invalid") { return undefined }
  if (string === "") { return "" }
  let ary = split(string)
  switch (type) {
    case "snake":
      return ary.join("_");
    case "camel":
      return ary.map((ele, idx) => {
        return idx > 0 ? capitalize(ele) : ele
      }).join('')
    case "kebab":
      return ary.join('-')
    default:
      return undefined;
  }
}


console.log(changeCase("snakeCase", "snake"))
// "snake_case"
console.log(changeCase("some-lisp-name", "camel"))
// "someLispName"
console.log(changeCase("map_to_all", "kebab"))
// "map-to-all"
console.log(changeCase("doHTMLRequest", "kebab"))
// "do-h-t-m-l-request"
console.log(changeCase("invalid-inPut_bad", "kebab"))
// undefined
console.log(changeCase("valid-input", "huh???"))
// undefined
console.log(changeCase("", "camel"))
// ""