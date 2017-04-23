$( document ).ready(function () {
	setUpInputField();
});

// Sets up the input field so tasks can be added when pressing "Enter".
function setUpInputField() {
	$("#task_input_field").keypress(function(event) {
		if (event.which == 13) {
			$("#add_task_button").click();
			return false;
		}
	});
}

// Create a new list item when clicking on the "ADD" button
function newElement() {
	var inputValue = $("#task_input_field").val();

	if (inputValue === "") {
		alert("New task cannot be empty.");
	} else {
		$("#task_input_field").val("");

		var li = $(document.createElement("LI"));
		$("#task_list").append(li);

		var doneInput = newCheckbox()
		li.append(doneInput);

		var taskLabel = newTaskLabel(inputValue);
		li.append(taskLabel);

		var editSpan = newEditButton()
		li.append(editSpan);

		var removeSpan = newRemoveButton()
		li.append(removeSpan);

		li.keypress(function(event) {
			if(event.which == 13){
				taskLabel.attr('contenteditable','false');
				return false;
			}
		});

		// Only show remove button after 1 task has been added to the list.
		if ($("#task_list li").length == 1) {
			toggleRemoveCheked();
		}
	};
}


// Removes selected tasks from to-do list.
function removeSelected() {
	$("#task_list li").each(function(index, element) {
		var taskItem = $(element);
		if (taskItem.hasClass("checked")) {
			taskItem.fadeOut(function() { 
				$(this).remove();
				// Hide "Clear Completed Tasks" if there are no tasks on the list.
				if ($("#task_list li").length == 0) {
					toggleRemoveCheked();
				}
			});
		}
	})
}

// Returns a new task label. Takes the input text as argument.
function newTaskLabel(taskText) {
	var taskLabel = $(document.createElement("LABEL"));
	var text = $(document.createTextNode(taskText));
	taskLabel.append(text);
	return taskLabel;
}

// Returns a new "remove" button.
function newRemoveButton() {
	var removeSpan = $(document.createElement("DIV"));
	var removeTxt = $(document.createTextNode("\u00D7"));
	removeSpan.append(removeTxt);
	removeSpan.addClass("remove_button");
	removeSpan.bind("click", function() {
		removeSpan.parent().remove();
		if ($("#task_list li").length == 0) {
			toggleRemoveCheked();
		}
	});
	return removeSpan;
}

// Returns a new "checkbox" input element.
function newCheckbox() {
	var checkbox = $(document.createElement("INPUT"));
	checkbox.attr("type", "checkbox")
	checkbox.bind("change", function() {
		checkbox.parent().toggleClass("checked");
	});
	return checkbox;
}

// Returns a new "Edit" button.
function newEditButton() {
	var editSpan = $(document.createElement("DIV"));
	var editText = $(document.createTextNode("\u270E"));
	editSpan.append(editText);
	editSpan.addClass("edit_button");
	editSpan.bind("click", function() {
		editSpan.siblings("label").attr('contenteditable','true');
	});
	return editSpan;
}

// Shows and hides the "Clear Complete Tasks" button.
function toggleRemoveCheked() {
	var removeSelectedButton = $("#remove_button_container");
	removeSelectedButton.fadeToggle();
}
