

function sort(...arr){
    const descending = arr.sort((a, b) => a - b);
    const reverse = descending.reverse();
    return reverse.join(",")
}

const result = sort(1,2,5,7,8,8,9,9,1,99);

console.log(result)