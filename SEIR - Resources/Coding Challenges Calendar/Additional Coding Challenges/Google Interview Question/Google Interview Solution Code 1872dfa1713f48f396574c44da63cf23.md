# Google Interview Solution Code

```jsx
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
let findMedianSortedArrays = function(nums1, nums2) {
    if(!nums1.length && !nums2.length) {
        return "You're a jerk for giving me this test case :("
    }
    let count = 0;
    let result;
    let median = (nums1.length + nums2.length + 1) / 2;
    while(median > count) {
        if(!nums1.length && median % 1 !== 0 && (count + 1) > median) {
            result += nums2[0];
            result /= 2;
        } else if(!nums1.length) {
            result = nums2[0];
            nums2.shift();
        } else if (!nums2.length) {
            if(median % 1 !== 0 && (count + 1) > median) {
                result += nums1[0];
                result /= 2;
            } else {
                result = nums1[0];
                nums1.shift();
            }
        }
        else if(nums1[0] >= nums2[0]) {
            if (median % 1 !== 0 && (count + 1) > median) {
                result += nums2[0];
                result /= 2;
            } else {
                result = nums2[0];
                nums2.shift();
            }
        } else {
            if (median % 1 !== 0 && (count + 1) > median) {
                result += nums1[0];
                result /= 2;
            } else {
                result = nums1[0];
                nums1.shift();
            }
        }
        count++;
    }
    return result;
};

```

Remember, the solution you originally come up with does not have to be this optimized. The stats for this hard question are below, and most solutions will come up well short of this runtime.