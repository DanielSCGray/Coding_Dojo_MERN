/* 
Given by Riot games.
*/

// b : 70
// a : 164 -> 184
// c : 32 -> 42

const str1 = "b70a164c32a20c10";
const expected1 = "a184b70c42";

/**
 * Rehashes an incorrectly hashed string by combining letter count occurrences
 * and alphabetizing them.
 * Time: O(?).
 * Space: O(?).
 * @param {string} s An incorrectly hashed string.
 * @returns {string} The correctly rehashed string alphabetized.
 */
function rehash(s) {
    let hash = {};
    let num ='';
    let key = '';
    for (let i = 0; i < s.length; i++) {
        let char = s[i];
        if (isNaN(char)) {
            key = char;
            if (!hash[key]) {
                hash[key] = 0
            }
        } else {
            num += char;
            if (isNaN(s[i+1])) {
                hash[key] += parseInt(num)
                num = ''
            }
        }
        
    }
    let sorted = Object.keys(hash).sort()
    console.log(sorted)
    let retStr =''
    for (const key of sorted) {
        retStr += key + hash[key]
    }
    return retStr

}


console.log(rehash(str1))
//a184b70c42
/*****************************************************************************/