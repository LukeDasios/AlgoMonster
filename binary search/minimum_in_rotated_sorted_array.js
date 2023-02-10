function findMinRotated(arr) {
    if (arr.length === 1) return 0
    let last = arr[arr.length - 1]
    let first_true_index = -1
    let start = 0, end = arr.length - 1
    
    while (start <= end) {
       let mid = Math.floor((start + end) / 2)
       
       if (arr[mid] <= last) {
           end = mid - 1
           first_true_index = mid
       } else {
           start = mid + 1 
       } 
    }
    
    return first_true_index
}