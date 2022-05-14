// Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

function reverseWords(str) {
    reverse = str.split(' ').map(element => element.split('').reverse().join(""));
	return reverse.join(" ");
}