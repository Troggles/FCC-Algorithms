function getIndexToIns(arr, num) {
    arr.sort(function(a, b) {
        return a - b;
    });

    for (let a = 0; a < arr.length; a++) {
        if (arr[a] >= num)
        return a; 
    }

    return arr.length;
}

getIndexToIns([40, 60], 50)