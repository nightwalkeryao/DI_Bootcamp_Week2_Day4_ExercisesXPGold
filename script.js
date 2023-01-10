// Exercise 1 : is_Blank

// Write a program to check whether a string is blank or not.

/**
 * Determine whether a string is blank
 * @param any str 
 * @returns boolean
 */
function isBlank(str) {
    return !String(str).trim().length
}
console.log("isBlank('')", isBlank(''))
console.log("isBlank('abc')", isBlank('abc'))


// Exercise 2 : Abbrev_name

// Write a JavaScript function to convert a string into an abbreviated form.

/**
 * Convert a string into an abbreviated form
 * @param string str 
 * @returns string The converted string
 */
function abbrevName(str) {
    let words = str.split(' ')
    words = words.map((w, i) => i > 0 ? w.charAt(0).toUpperCase() + '.' : w)
    return words.join(' ')
}
console.log('abbrevName("Robin Singh")', abbrevName("Robin Singh"))
console.log('abbrevName("Yao Kan KOUASSI")', abbrevName("Yao Kan KOUASSI"))


// Exercise 3 : SwapCase
// Write a JavaScript function which takes a string as an argument and swaps the case of each character. 

/**
 * Swap the case of each character in the given string
 * @param string str 
 * @returns string
 */
function swapCase(str) {
    return str.split('').map(c => c == c.toUpperCase() ? c.toLowerCase() : c.toUpperCase()).join('');
}
console.log("swapCase('The Quick Brown Fox')", swapCase('The Quick Brown Fox'))


// Exercise 4 : Omnipresent value

// 1. Create a function that determines whether an argument is omnipresent for a given array.
// A value is omnipresent if it exists in every subarray inside the main array.

/**
 * Determine whether the given value is present in all subarrays
 * @param number[] arrays
 * @param number value 
 * @returns boolean true if value is present in all subarrays, false otherwise
 */
function isOmnipresent(arrays, value) {
    let result = true
    arrays.forEach(a => {
        if(!a.includes(value)) result = false
    })
    return result
}
console.log("isOmnipresent([[1, 1], [1, 3], [5, 1], [6, 1]], 1)", isOmnipresent([[1, 1], [1, 3], [5, 1], [6, 1]], 1))
console.log("isOmnipresent([[1, 1], [1, 3], [5, 1], [6, 1]], 6)", isOmnipresent([[1, 1], [1, 3], [5, 1], [6, 1]], 6))