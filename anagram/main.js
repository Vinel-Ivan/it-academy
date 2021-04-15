const sort = function(str) {
    return str.replace(/\s+/g, '').toLowerCase().split('').sort().join('');
  }
  
function isAnagram(original, test) {
    return console.log(original.trim() === test.trim() ? false : sort(original) === sort(test));
}

isAnagram('anna','aann');
isAnagram('not anagram','here Is False');
isAnagram('AnaGram is, here','Here, is anagram');