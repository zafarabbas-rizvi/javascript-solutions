// get longest substring 

function substring(str) {
    const arr = []
    for(let i =0; i < str.length ; i++) {
        if(!arr.includes(str[i])) {
            arr.push(str[i])
        } else {
            arr.length = 0
            arr.push(str[i])
        }
    }
    return arr.join('')
}

var result = substring('abcabcbd')
console.log(result)