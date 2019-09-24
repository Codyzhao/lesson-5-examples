// RegExp Constructor
// /pattern/modifiers;

const regex1 = /\w+/i;
const regex2 = new RegExp('\\w+', 'i');

// Syntax
// common flags

// g : global match; find all matches rather than stopping after the first match

// i : ignore case; if u flag is also enabled, use Unicode case folding

// m : multiline; treat beginning and end characters (^ and $) as working
//     over multiple lines (i.e., match the beginning or end of each line
//     (delimited by \n or \r), not only the very beginning or end of the whole input string)

// Examples

// Using regular expression match
const s = "Please yes make my day!";
const re = /yes\smake/;
console.log(s.match(/yes\smake/));

// RegExp Object Methods
// Tests for a match in a string. Returns true or false
console.log(re.test(s));
// Tests for a match in a string. Returns the first match
console.log(re.exec(s));

// Using a regular expression to change data format
const re1 = /(\w+)\s(\w+)/;
const str1 = 'John Smith';
const output1 = str1.replace(re1, '$2, $1');
console.log(output1);

