function mergeSort(arr) {


    function merge(left, right) {
        var result =[],
            indLeft=0, indRight=0;
        while ( indLeft < left.length && indRight < right.length ) {
            if ( left[indLeft] <= right[indRight]) {
                result.push(left[indLeft++]);

            } else {
                result.push(right[indRight++]);
            }
        }
   
       
        return result.concat(left.slice(indLeft).concat(right.slice(indRight)) );
    }



    function merge_sort(arr) {
        if ( arr.length <=1) {
            return arr;
        }
        var left = [], right = [];
        var centerElInd = Math.floor(arr.length/2);
        left = arr.slice(0, centerElInd);
        right = arr.slice( centerElInd);
        return ( merge (merge_sort(left), merge_sort(right)));
    }


    return merge_sort(arr);


}

var arr = [10, 21, 11, 23, 5, 3, 89];

mergeSort(arr);

