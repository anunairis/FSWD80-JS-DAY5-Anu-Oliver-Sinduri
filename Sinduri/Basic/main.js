
// function calculateAge() {
// 	var birthday = document.getElementById('birthdate').value;
// 	var a = new Date(birthday);
// 	var bYear = a.getFullYear();
// 	var today = new Date();
// 	var tYear = today.getFullYear();
// 	var age = tYear - bYear;
// 	document.getElementById('calculate').innerHTML = "Your age is " + age;
// 	console.log(age);
// }

function submitData() {
	var sandwiches = { "sandwich": "hamburger", "calories": "260" };
	var fries = { "fries_size": "Large French Fries", "calories": "570" };
	var result = document.getElementById('result');
	result.innerHTML = "My favorite sandwich is a " + sandwiches.sandwich + " which has approximtely " + sandwiches.calories + " calories, along with it I enjoy eating " + fries.fries_size + " which have about " + fries.calories + " calories."

}

submitData();

