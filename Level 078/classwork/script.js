// ForEach
array = [1,2,3,4,5];

function ForEachclon(array, elem) {
    for (let i = 0; i < array.length; i++ ) {
        elem(array[i], i, array)
    }
}

// map 
function mapclone(array, elem) {
    const result = []
    for(let i = 0; i < array.length; i++) {
        result.push(elem(array[i], i, array))   }
    return result
}

// filter 

function filterclone(array, elem) {
    const result = []
    for(let i = 0; i < array.length; i++) {
        if(elem(array[i], i, array)) {
            result.push(arr[i])
        }
    }
    return result
}

//findindex

function findindexclone(array, elem) {
    for(let i = 0; i < array.length; i++) {
        if(elem(array[i], i, array)) {
            return i
        }
    }
    return -1
}

