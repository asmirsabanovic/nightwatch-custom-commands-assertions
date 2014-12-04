## Nightwatch custom commands and assertions

These are some commands and assertion I use when I'm testing with nightwatch.js and selenium

Here's a list:

### Commands

- **jqueryClick**: clicks an element using jquery selectors
	
	```js
	browser.jqueryClick(".classname:first > input:checked")
	browser.jqueryClick("div:has(.classname):contains('something'):last")
	```
	 
- **jqueryElement**: returns an element using jquery selectors
	
	```js
	browser.jqueryClick(".classname:first > input:checked")
	browser.jqueryClick("div:has(.classname):contains('something'):last")
	```
	
- **setSelect2Data**: set a select2 value using select2("data")
	
	```js
	browser.setSelect2Data("input[type=hidden].has-select2", {id:1, text: "hello"})
	```
	
- **setSelect2Value**: set a select2 value using select2("value")
	
	```js
	browser.jqueryClick("select.has-select2:hidden", "some value")
	```
	
- **setValueAndTrigger**: set a value on an <input> or a <select> and trigger a `change` event
	
	```js
	browser.setValueAndTrigger("select", "some value")
	```
	
- **shell**: execute a command on the shell
	
	```js
	browser.shell("mysql -u root database_name < fakedata.sql")
	```
	
### Assertion

Some assertion requires a command, so be sure to tell nightwatch to include those commands (you need to change nightwatch.json)

- **urlMatch**: check if the url matches the regex provided
	
	```js
	browser
		.url("http://www.google.com")
		.assert.urlMatch(/.com$/)
	```
	
	requires command: none

- **jqueryElementPresent**: check if the url matches the regex provided
	
	```js
	browser
		.url("http://www.github.com")
		.assert.jqueryElementPresent("div:eq(2)")
	```
	
	requires command: jqueryElement