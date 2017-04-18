// Create a "remove" task button and append it to each list item
var taskList = document.getElementsByTagName("LI");
var index;
for (index = 0; index < taskList.length; index++) {
	var removeButton = document.createElement("SPAN");
	var txt = document.createTextNode("\u00D7");
	removeButton.className = "remove_button";
	removeButton.appendChild(txt);
	taskList[index].appendChild(removeButton);

	var editSpan = document.createElement("SPAN");
	var editTxt = document.createTextNode("Edit");
	editSpan.className = "edit_button";
	editSpan.appendChild(editTxt);
	taskList[index].appendChild(editSpan);
}

// Click on a "done" button to hide the current list item
var removeButton = document.getElementsByClassName("remove_button");
for (var index = 0; index < removeButton.length; index++) {
	removeButton[index].onclick = function() {
		var div = this.parentElement;
		div.style.display = "none";
	}
}

var editButton = document.getElementsByClassName("edit_button");
for (var index = 0; index < editButton.length; index++) {
	editButton[index].onclick = function() {
		var div = this.parentElement;
		div.setAttribute("contentEditable", true);
	}
}

// Add a "checked" symbol when clicking on a list item
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);

// Create a new list item when clicking on the "ADD" button
function newElement() {
	var li = document.createElement("LI");
	var inputValue = document.getElementById("task_input_field").value;
	var t = document.createTextNode(inputValue);
	li.appendChild(t);
	if (inputValue === '') {
		alert("New task cannot be empty.");
	} else {
		document.getElementById("task_list").appendChild(li);
	}
	document.getElementById("task_input_field").value = "";

	var removeSpan = document.createElement("SPAN");
	var removeTxt = document.createTextNode("\u00D7");
	removeSpan.className = "remove_button";
	removeSpan.appendChild(removeTxt);
	li.appendChild(removeSpan);

	var editSpan = document.createElement("SPAN");
	var editTxt = document.createTextNode("Edit");
	editSpan.className = "edit_button";
	editSpan.appendChild(editTxt);
	li.appendChild(editSpan);

	for (i = 0; i < removeButton.length; i++) {
		removeButton[i].onclick = function() {
			var div = this.parentElement;
			console.log(div);
			div.style.display = "none";
		}
	}
}