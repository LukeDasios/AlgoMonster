function findFirstOccurrence(arr, target) {
    let start = 0, end = arr.length
    let first_true_index = -1
    
    while (start <= end) {
        let mid = Math.floor((start + end) / 2)
        
        if (arr[mid] >= target) {
            end = mid - 1
            if (arr[mid] === target) first_true_index = mid
        } else {
            start = mid + 1
        }
    }
    
    return first_true_index;
}