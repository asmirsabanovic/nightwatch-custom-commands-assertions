//The param "selector" that is passed to a custom command or assertion
//can be an array of selector, or a string.
//It's an array when a custom command is called from a section, and
//this array cannot be used straight away in a command, because nightwatch
//or selenium encode it in JSON, but the array itself has circular references
//that json doesn't like. So I simply extract the selectors for each item
//of the array and return it
let getMultipleSelectors = function(selector) {
	if (Array.isArray(selector)) {
		let section_selector = selector[0].selector;
		let real_selector = selector[1].selector;
		return [section_selector,real_selector];
	} else {
		return selector;
	}
};