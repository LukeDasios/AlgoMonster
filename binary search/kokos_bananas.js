var minEatingSpeed = function(piles, h) {    
    let left = 1;
    let right = 1e9;
    
    while (left < right) {
        const mid = Math.floor((left + right) / 2);

        if (can_finish_eating(mid)) {
            right = mid
        } else {
            left = mid + 1
        }
    }
   
    return left;
    
    function can_finish_eating(k) {
        let count = 0;
        
        for (const pile of piles) {
            count += Math.ceil(pile / k);
        }
        
        return count <= h
    }
};