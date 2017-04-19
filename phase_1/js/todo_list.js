// Sets up the input field so tasks can be added when pressing "Enter".
function setUpInputField() {
	var inputField = document.getElementById("task_input_field");
	inputField.addEventListener("keydown", function(e) {
		if(e.key == "Enter"){
			e.preventDefault();
			document.getElementById("add_task_button").click();
		}
	});
}

setUpInputField();

// Create a new list item when clicking on the "ADD" button
function newElement() {
	var li = document.createElement("LI");
	var inputValue = document.getElementById("task_input_field").value;

	if (inputValue === "") {
		alert("New task cannot be empty.");
	} else {
		document.getElementById("task_list").appendChild(li);
	}

	document.getElementById("task_input_field").value = "";

	var doneInput = newCheckbox()
	li.appendChild(doneInput);

	doneInput.addEventListener("change", function(e) {
		this.parentElement.classList.toggle("checked");
	});

	var taskLabel = newTaskLabel(inputValue);
	li.appendChild(taskLabel);

	var editSpan = newEditButton()
	li.appendChild(editSpan);

	editSpan.onclick = function(e) {
		taskLabel.contentEditable = true;
	};

	li.addEventListener("keydown", function(e) {
		if(e.key == "Enter"){
			event.preventDefault();
			taskLabel.contentEditable = false;
		}
	});

	var removeSpan = newRemoveButton()
	li.appendChild(removeSpan);

	removeSpan.onclick = function(e) {
		var list = document.getElementById("task_list");
		list.removeChild(this.parentElement);
	};
}

// Returns a new task label. Takes the input text as argument.
function newTaskLabel(taskText) {
	var taskLabel = document.createElement("LABEL");
	var text = document.createTextNode(taskText);
	taskLabel.appendChild(text);
	taskLabel.className = "task-label";
	return taskLabel;
}

// Returns a new "remove" button.
function newRemoveButton() {
	var removeSpan = document.createElement("DIV");
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

// Returns a new "Edit" button.
function newEditButton() {
	var editSpan = document.createElement("DIV");
	var editText = document.createTextNode("\u270E");
	editSpan.className = "edit_button";
	editSpan.appendChild(editText);
	return editSpan;
}