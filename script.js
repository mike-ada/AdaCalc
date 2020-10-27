"use strict";


const max_digits = 8;
const _device_expression = document.getElementById("expression");
const _device_operand = document.getElementById("operand");


const screen = {
	//arrow functions have been used to define this object's internal methods
	set: {
		expression: (value) => { _device_expression.innerText = value; },
		operand: (value) => { _device_operand.innerText = value; },
	},
	clear: {
		expression: () => { _device_expression.innerText = ""; },
		operand: () => { _device_operand.innerText = ""; },
		all: () => { 
			_device_expression.innerText = "";
			_device_operand.innerText = "";
		},
	},
	get: {
		expression: () => { return _device_expression.innerText; },
		operand: () => { return _device_operand.innerText; },
	},
};


const calculation = {
	//use regular functions to define this object's intermal methods
	_expression: [],
	push: function (exp) { },
	pop: function () { },
	last: function () { },
	clear: function () { },
	debug: function () { },
	expression: function() { }
};


function append_value(original, append, glue, spacer) {
}


function valid_leadingzeros(value) { 
}


function valid_decimals(value) {
}


function trim_invalid_numerics(value) { 
}


function control_pressed(control) {
	switch(control) {
		case "c": break;
		case "ac": break;
		case "=": break;
	}
}


function digit_pressed(digit) {
	console.log("digit pressed: " + digit);
}


function operator_pressed(operator) {
	console.log("operator pressed: " + operator);
}


function evaluate(expression) {
}


//search for all HTML objects that are using the class name 'button'
var buttons = document.getElementsByClassName('button');
for(let i = 0; i < buttons.length; i++) { //loop through each 'button' instance
	buttons[i].addEventListener('click', function() { //attach a 'click' event listener
    	switch(this.dataset.action) { //invoke a specific function based on the type of button 'clicked'
			//pass the ID to the selected function
			case("digit"): digit_pressed(this.id); break; 
			case("operator"): operator_pressed(this.id); break;
			case("control"): control_pressed(this.id); break;
		}
	})
}

//once the oload event has fired, execute any requested functions
window.onload = () => {
};