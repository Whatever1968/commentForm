// create a function for the onclick to do "<button type="button" onclick="todoList()">Click me</button>"
function commentList(){
	// create a variable called "item" to connect to our input element in html
	var item = document.getElementById("commentInput").value
	// grab the value create a variable to enter the text into from the input item called "text"
	var text = document.createTextNode(item)
	// creating "li" element
	var newItem = document.createElement("li")
	// append the text entered on the "li"
	newItem.appendChild(text)
	// grab ordered list and append our 'li ' to it.
 	document.getElementById("commentList").appendChild(newItem)
}