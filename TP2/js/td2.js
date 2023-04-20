/**
* 
* M413 - TD2
* * 
* 	@author Jean-Michel Bruneau
*	@copyright UCA - IUT -INFO
* 	@version	1.0
* 	@date			2021-01-31
*
*/
"use strict";

// M413 - TD2
let message = 'JavaScript is ok :)';
// alert( message);
console.log(message);

function onLoad() {
	console.log('Processus de chargement du document terminé…');
	addDiv();
	initSelect();
	//
	// All your JavaScript code goes here !
	//

}

// Toute les ressources de la page sont complètement chargées.
window.onload = onLoad;

function initSelect() {
	const root = document.documentElement;

	root.addEventListener('click', select2);

	function select(event) {
		const target = event.target;
		if (target !== root) {
			if (target.style.backgroundColor == 'red') {
				target.style.backgroundColor = "transparent";
			}
			else {
				target.style.backgroundColor = 'red';
			}
		}
	}

	function select2(event) {
		const target = event.target;
		const div = document.getElementById("insert-div");
		if (target.parentNode !== root && target !== root && target.parentNode !== div && target !== div) {
			const selectedElements = document.querySelectorAll(".selected");
			selectedElements.forEach((el) => {
				el.classList.remove("selected");
			});
			target.classList.add("selected");
			insertElement(target);
		}
	}

}

function addDiv() {
	var div = document.createElement("div");
	div.id = "insert-div";

	var select = document.createElement("select");
	select.id = "insert-type";
	select.name = "type";

	var optionDiv = document.createElement("option");
	optionDiv.value = "div";
	optionDiv.innerText = "div";

	var optionP = document.createElement("option");
	optionP.value = "p";
	optionP.innerText = "p";

	var optionSpan = document.createElement("option");
	optionSpan.value = "span";
	optionSpan.innerText = "span";

	var input = document.createElement("input");
	input.type = "text";
	input.id = "insert-text";
	input.value = "My new Text Element";

	select.appendChild(optionDiv);
	select.appendChild(optionP);
	select.appendChild(optionSpan);
	div.appendChild(select);
	div.appendChild(input);

	var headerDiv = document.getElementById("header");
	document.body.insertBefore(div, headerDiv);
}

function insertElement(target) {
	let parentTarget = target.parentNode;

	var type = document.getElementById("insert-type").value;
	var value = document.getElementById("insert-text").value;

	var element = document.createElement(type);
	element.innerText = value;

	parentTarget.insertBefore(element, target);
}

function search() {
	var searchText = document.getElementById('search-text').value;
	clearSelection();

	function clearSelection() {
		var selected = document.querySelectorAll('.select');
		for (var i = 0; i < selected.length; i++) {
			selected[i].classList.remove('select');
		}
	}

	if (!searchText == "") {

		function traverse(node) {
			var child, next;

			switch (node.nodeType) {
				case 1:
					if (node.tagName.toLowerCase() != 'script') {
						for (child = node.firstChild; child; child = next) {
							next = child.nextSibling;
							traverse(child);
						}
					}
					break;

				case 3:
					var text = node.nodeValue;
					var re = new RegExp(searchText, 'gi');
					if (re.test(text)) {
						var parent = node.parentNode;
						var html = parent.innerHTML;
						html = html.replace(re, '<span class="select">$&</span>');
						parent.innerHTML = html;
					}
					break;
			}
		}

		traverse(document.body);
	}
}