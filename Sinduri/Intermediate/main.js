
// function sgenerateTable() {
// 	var i = 0;
// 	var j = 0;
// 	var numberEmployees = employees.length;
// 	var result = document.getElementById('result');
// 	result.style.width = "70%";
// 	result.setAttribute('border', '1');
// 	result.setAttribute('cellspacing', '0');
// 	result.setAttribute('cellpadding', '5');
// 	result.setAttribute('margin', '50');
// 	var col = [];
// 	for (var i = 0; i < numberEmployees; i++) {
//             for (var key in employees[i]) {
//                 if (col.indexOf(key) === -1) {
//                     col.push(key);
//                 }
//             }
//         }
 
//  	var tr = result.insertRow(-1);

//  	for (var i = 0; i < col.length; i++) {
//             var th = document.createElement("th");      
//             th.innerHTML = col[i];
//             tr.appendChild(th);
//         }

//      for (var i = 0; i < numberEmployees; i++) {

//             tr = result.insertRow(-1);

//             for (var j = 0; j < col.length; j++) {
//                 var tabCell = tr.insertCell(-1);
//                 tabCell.innerHTML = employees[i][col[j]];
//             }
//   }
// }
console.table(employees)
function sgenerateTable() {
	var i = 0;
	// var j = 0;
	var numberEmployees = employees.length;
	var result = document.getElementById('result');
	result.style.padding = "1px";
	result.style.border = "thick solid blue"
	result.innerHTML += "<table width=80%>";
	result.innerHTML += "<tr><td><b>UserId</b></td><td><b>First Name</b></td><td><b>Last Name</b></td><td><b>Email Id</b></td><td><b>Job Title</b></td><td><b>Salary</b></td></tr>";
	var text = "";
	for (i=0; i<numberEmployees; i++) {
		text += "<tr>";
		text += "<td width=100>" + employees[i].userID + "</td>";
		text += "<td width=100>" + employees[i].firstName + "</td>";
		text += "<td width=100>" + employees[i].lastName + "</td>";
		text += "<td width=150>" + employees[i].emailId + "</td>";
		text += "<td width=150>" + employees[i].jobTitle + "</td>";
		text += "<td width=150>" + employees[i].salary + "</td>";
		text += "</tr>";
		
	}

text += "</table>";	
result.innerHTML += text;
}

sgenerateTable();

