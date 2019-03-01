//for loop
function range(start, end) {
    var ans = [];
    for (let i = start; i <= end; i++) {
        ans.push(i);
    }
    return ans;
}

//recursion
function range_numbers(start, end){
    if(start===end) return [start];
    return [start, ...range(start + 1, end)];
}

//adding charcters 
 // string.charCodeAt(string index starts at 0)   =>  "a".charCodeAt(0) => 97

// recursion range with string
function range_letters(start, end){
    if(start.charCodeAt(0) === end.charCodeAt(0)) return [start]
    return [start, ...range_letters(String.fromCharCode(start.charCodeAt(0)+1),end)];
}


function range(start, end) {
    if (typeof start === "number" && typeof end === "number") {
        if (start === end) return [start];
        return [start, ...range(start + 1, end)];
    }
    else if (typeof start === "string" && typeof end === "string") {
        if (start.charCodeAt(0) === end.charCodeAt(0)) return [start]
        return [start, ...range(String.fromCharCode(start.charCodeAt(0) + 1), end)];
    }
    else {
        return "'start' and 'end' should be same type"
    }
}
