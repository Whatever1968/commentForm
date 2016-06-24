// create a function for the onclick to do "<button type="button" onclick="todoList()">Click me</button>"
//function commentList(){
	//// create a variable called "item" to connect to our input element in html
	//var item = document.getElementById("commentInput").value
	//// grab the value create a variable to enter the text into from the input item called "text"
	//var text = document.createTextNode(item)
	//// creating "li" element
	//var newItem = document.createElement("li")
	//// append the text entered on the "li"
	//newItem.appendChild(text)
	//// grab ordered list and append our 'li ' to it.
 	//document.getElementById("commentList").appendChild(newItem)
//
 	////r array = []
 	////r(i = 0; i < array; i++)
 		////(i < array.lenght){
 			////cument.getElementById("commentList"(newItem)
 		////
//}


// set the array
var myArray = []

// create the onlclick event on the comment button
document.getElementById("commentButton").onclick = function alerted (){

// put the latest comment to front of array 
    myArray.unshift(document.getElementById("commentInput").value)

    // cleared the previous content
    document.getElementById("commentList").innerHTML = ""

    // create the 4 loop so it will loop throught the array
    for(i = 0; i < myArray.length; i++){

    	// pull info from array to store in the variable item
    	var item = myArray[i]

    	// converted it into text
    	var text = document.createTextNode(item)

    	// creating a element happens to be an li
    	var newItem = document.createElement("li")

    	// take new li item and adding text to it
    	newItem.appendChild(text)

    	// take new item and using append child to add to comment list
    	document.getElementById("commentList").appendChild(newItem)
    }
}
