(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';
var button = $('#button');
var form = $('#passwordform');

form.on('submit', function (e) {
	e.preventDefault();
	var username = $('#username');
	var password = $('#password');
	var error1 = $('#error1');
	var error2 = $('#error2');
	var error3 = $('#error3');
	var error4 = $('#error4');
	var error5 = $('#error5');
	var error6 = $('#error6');
	var error7 = $('#error7');
	var hasError = false;
	error1.html('');
	error2.html('');

	username.show();
	password.show();

	if (username.val() === '') {
		hasError = true;
		error1.html('Please enter an email address before loggin in.');
		error2.html('Your user was not found.');
		error1.css({ paddingLeft: '6em' });
		error2.css({ paddingLeft: '5em' });
		error5.hide();
	}

	if (password.val() === '') {
		hasError = true;
		error3.html('Please enter a password before logging in.');
		error4.html('The password you entered is incorrect.');
		error3.css({ paddingLeft: '4.25em' });
		error4.css({ paddingLeft: '4em' });
	}

	if (username.val() !== '' && username.val().indexOf('@') === -1) {
		hasError = true;
		error5.show();
		error5.html('Email must contain an \'@\'.');
		error5.css({ paddingLeft: '5.5em' });
	}

	if (username.val().indexOf('@') > -1) {
		error5.hide();
	}

	if (password.val() === 'password123' || password.val() === 'pandas' || password.val() === 'honeycrisp') {
		error3.hide();
		error4.hide();
		error6.hide();
	}

	if (password.val() !== '' && (password.val() !== 'password123' || password.val() !== 'pandas' || password.val() !== 'honeycrisp')) {
		error3.hide();
		error4.hide();
		error6.html('Must enter a valid password.');
		error6.css({ paddingLeft: '4.25em' });
	}

	if (username.val() === 'aaron@theironyard.com' && password.val() === 'password123' || username.val() === 'admin@google.com' && password.val() === 'pandas' || username.val() === 'm@gmail.com' && password.val() === 'honeycrisp') {
		hasError = false;
		window.location = 'http://theironyard.com';
	}

	if (username.val() !== 'aaron@theironyard.com' && password.val() === 'password123' || username.val() === 'aaron@theironyard.com' && password.val() !== 'password123' || username.val() !== 'admin@google.com' && password.val() === 'pandas' || username.val() === 'admin@google.com' && password.val() !== 'pandas' || username.val() !== 'm@gmail.com' && password.val() === 'honeycrisp' || username.val() === 'm@gmail.com' && password.val() !== 'honeycrisp') {
		hasError = true;
		error7.show();
		error7.html('Please enter a valid username/password combination.');
		error7.css({ paddingLeft: '4em' });
	}
});

},{}]},{},[1])


//# sourceMappingURL=bundle.js.map