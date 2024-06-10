// REMOVE DUPLICATES

// Given an integer array nums sorted in non-decreasing order, remove some duplicates 
// in-place such that each unique element appears at most twice. 
// The relative order of the elements should be kept the same.
// Since it is impossible to change the length of the array in some 
// languages, you must instead have the result be placed in the first 
// part of the array nums. More formally, if there are k elements after 
// removing the duplicates, then the first k elements of nums should hold the 
// final result. It does not matter what you leave beyond the first k elements.
// Return k after placing the final result in the first k slots of nums.
// Do not allocate extra space for another array. You must do this by 
// modifying the input array in-place with O(1) extra memory.

const removeDuplicates = function(nums) {
    let k = 0;
    for(let i = 0; i < nums.length; i++) {
        if ((nums[i] === nums[i+1]) && (nums[i+2])) {
            continue
        }
        nums[k] = nums[i]
        k++
    }
    return k;
};

// To solve this problem, we can use a two-pointer approach. We'll iterate 
// through the array while maintaining two pointers: one for the position to 
// overwrite (k) and another for iterating through the array (i). We'll check 
// if the current element is different from the next two elements. If it is, 
// we'll overwrite the element at position k with it. By doing this, we'll 
// ensure that the array contains at most two occurrences of each element.

// Initialize two pointers: k (position to overwrite) and i (iterator).
// Iterate through the array from index 0 to nums.length - 1.
// For each element at index i, i.e. nums[i] check if it's different from the 
// next two elements, i.e. nums[i+1], and nums[i+1]). If it is, overwrite the 
// element at position k with it. If it's not then jump to the next iteration
// Increment k and continue iterating through the array.
// Return k, which represents the length of the resulting array after removing 
// duplicates.


class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length != t.length) {
            return false;
        }

        const countS = {};
        const countT = {};

        for (let i = 0; i < s.length; i++) {
            countS[s[i]] = 1 + (countS[s[i]]
|| 0);
            countT[t[i]] = 1 + (countT[t[i]]
|| 0);
        }

        for (const key in countS){
            if (countS[key] !== countT[key]) {

            }
        }

        return true;  
    }
}
// TWO INTEGER SUM 

class Solution {
    twoSum(numbers, target) {
        let l = 0;
        let r = numbers.length - 1;

        while (l < r) {
            const curSum = numbers[l] + numbers[r];

            if (curSum > target) {
                r--;
            } else if (curSum < target) {
                l++;
            } else {
                return [l + 1, r + 1];
            }
        }

        return [];
    }
}

// BALLANCED BINARY TREE

class Solution {
    isBalanced(root) {
        return this.dfs(root)[0] === 1;
    }

    dfs(root) {
        if (!root) {
            return [1, 0];
        }

        const left = this.dfs(root.left);
        const right = this.dfs(root.right);

        const balanced =
            left[0] === 1 &&
            right[0] === 1 &&
            Math.abs(left[1] - right[1]) <= 1;
        const height = 1 + Math.max(left[1], right[1]);

        return [balanced ? 1 : 0, height];
    }
}

// MINIMUM STACK

class MinStack {
    constructor() {
        this.stack = [];
        this.minStack = [];
    }
    push(val) {
        this.stack.push(val);
        val = Math.min(
            val,
            this.minStack.length === 0
                ? val
                : this.minStack[this.minStack.length - 1],
        );
        this.minStack.push(val);
    }
    pop() {
        this.stack.pop();
        this.minStack.pop();
    }

    top() {
        return this.stack[this.stack.length - 1];
    }
    getMin() {
        return this.minStack[this.minStack.length - 1];
    }
}

var isPalindrome = function(x) {
    if (x < 0) {
        return false;
    }

    let reverse = 0;
    let xcopy = x;

    while (x > 0) {
        reverse = (reverse * 10) + (x % 10);
        x = Math.floor(x / 10);
    }

    return reverse === xcopy;    
};

var longestCommonPrefix = function(strs) {
    let pref = strs[0];
    let prefLen = pref.length;

    for (let i = 1; i < strs.length; i++) {
        let s = strs[i];
        while (pref !== s.substring(0, prefLen)) {
            prefLen--;
            if (prefLen === 0) {
                return "";
            }
            pref = pref.substring(0, prefLen);
        }
    }

    return pref;    
};
