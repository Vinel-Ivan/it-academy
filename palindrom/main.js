const checkPalindrome = (str) => {
    const reversedStr = str.split('').reverse().join('');
    return console.log(reversedStr === str);
   }

checkPalindrome('looooool');
checkPalindrome('nepalindrom');
checkPalindrome(' pa li ndrom,mordn il ap ')
