// Create a new list item when clicking on the "ADD" button
function newElement() {
	var li = document.createElement("LI");
	var inputValue = document.getElementById("task_input_field").value;
	var t = document.createTextNode(inputValue);
	li.appendChild(t);

	if (inputValue === "") {
		alert("New task cannot be empty.");
	} else {
		document.getElementById("task_list").appendChild(li);
	}
	document.getElementById("task_input_field").value = "";

	var removeSpan = newRemoveButton()
	li.appendChild(removeSpan);

	removeSpan.onclick = function(e) {
		var list = document.getElementById("task_list");
		list.removeChild(this.parentElement);
	};

	var doneInput = newCheckbox()
	li.insertBefore(doneInput, li.childNodes[0]);

	doneInput.addEventListener("change", function(e) {
		this.parentElement.classList.toggle("checked");
	});
}

// Returns a new "remove" button.
function newRemoveButton() {
	var removeSpan = document.createElement("SPAN");
	var removeTxt = document.createTextNode("\u00D7");
	removeSpan.className = "remove_button";
	removeSpan.appendChild(removeTxt);
	return removeSpan;
}

// Returns a new "checkbox" input element.
function newCheckbox() {
	var checkbox = document.createElement("INPUT")
	checkbox.setAttribute("type", "checkbox")
	return checkbox;
}