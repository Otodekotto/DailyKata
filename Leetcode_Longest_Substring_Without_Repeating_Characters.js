/**
 * Given a string s, find the length of the longest
 * substring
 * without repeating characters.
 *
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let maxLength = 0;
  let start = 0;
  const charLastIndexMap = {};

  for (let end = 0; end < s.length; end++) {
    const char = s[end];

    if (
      charLastIndexMap[char] !== undefined &&
      charLastIndexMap[char] >= start
    ) {
      start = charLastIndexMap[char] + 1;
    }

    charLastIndexMap[char] = end;

    const currentLength = end - start + 1;

    maxLength = Math.max(maxLength, currentLength);
  }
  console.log(maxLength);
  return maxLength;
};

let case1String1 = "abcabcbb";
lengthOfLongestSubstring(case1String1);
//expected 3

let case2String1 = "bbbbb";

lengthOfLongestSubstring(case2String1);
//expected 1
