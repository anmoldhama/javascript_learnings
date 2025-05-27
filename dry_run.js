

var merge = function(intervals) {
    if (intervals.length <= 1) return intervals;

    intervals.sort((a, b) => a[0] - b[0]);
    console.log(intervals);

    let merged = [intervals[0]];
    console.log(merged);

    for (let i = 1; i < intervals.length; i++) {
        let last = merged[merged.length - 1];
        console.log(last);
        let current = intervals[i];
        console.log(current);

        if (current[0] <= last[1]) {
            last[1] = Math.max(last[1], current[1]);
            console.log("last[1]",last[1]);
        } else {
            merged.push(current);
        }
    }
    
    return merged;
};


console.log(merge([[1,3],[2,4],[5,6]]));