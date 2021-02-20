const doubleArray = [
    [1,2,3,4],
    [2,3,4,5],
    [3,4,5,6],
    [4,5,6,7],
    [5,6,7,8]
];



function Find(target, array){
    let rowCount = array.length - 1;
    let i = rowCount,
    j = 0;

    while(i >=0 && j < array[i].length){
        if(array[i][j] === target){
            return true;
        }else if(array[i][j] > target){
            i --;
            continue;
        }else if(array[i][j] < [target]){
            j ++;
            continue;
        }
    }

    return false;
}


console.log(Find(9,doubleArray));