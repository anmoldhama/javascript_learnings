function print_subarray(arr){
    for(let start = 0; start<arr.length; start++){
        let str = "";
        for(let end = start; end<arr.length; end++){
            str += arr[end];
            console.log(str);
        }

    }
}

print_subarray([1,2,3,4]);