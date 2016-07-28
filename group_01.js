//var atticus = ["Atticus", "2405", "47000", 3];
//var jem = ["Jem", "62347", "63500", 4];
//var boo = ["Boo", "11435", "54000", 3];
//var scout = ["Scout", "6243", "74750", 5];

function Person(name, empNumber, oldSalary, reviewRating) {
	this.name = name;
	this.empNumber = empNumber;
	this.oldSalary = oldSalary;
	this.reviewRating = reviewRating;
}
var atticus = new Person("Atticus", "2405", "47000", 3);
var jem = new Person("Jem", "62347", "63500", 4);
var boo = new Person("Boo", "11435", "54000", 3);
var scout = new Person("Scout", "6243", "74750", 5);

var employees = [atticus, jem, boo, scout];

function calcBonus (empArray) {
	//document.write("<ul>");
	document.write("<table style=width:75%>");
	document.write("<tr><th>Employee Name</th><th>% STI</th><th>New Salary</th><th>Total Bonus</th></tr>");
	empArray.forEach (function(employee, i) {
        var currentEmp = [];
        currentEmp[0] = employee.name;
				//console.log(currentEmp);
        var bonus = 0;
        switch (employee.reviewRating) {
        	case 1:
        	case 2: bonus = 0;
        	break;
        	case 3: bonus = .04;
        	break;
        	case 4: bonus = .06;
        	break;
        	case 5: bonus = .1;
        	break;
        	default:

        }
        if (employee.empNumber.length == 4) {
        	bonus += .05;
        }
        employee.oldSalary = parseInt(employee.oldSalary);
        if (employee.oldSalary>65000) {
        	bonus -= .01;
        }
        if (bonus > .13) {
             bonus = .13;

        }
        var totalBonus = employee.oldSalary * bonus;
        totalBonus = Math.round(totalBonus);
        currentEmp[3] = totalBonus;
        currentEmp[1] = bonus;
        currentEmp[2] = parseInt(employee.oldSalary) + totalBonus;
       	console.log(currentEmp);
       	//document.write("<li>Name: " + currentEmp[0] + " %STI: " + (currentEmp[1]*100) + "% Salary plus STI: $" + currentEmp[2] + " Total Bonus: $" + currentEmp[3]);
       	document.write("<tr><td>" + currentEmp[0] + "</td><td>" + (currentEmp[1]*100) + "%</td><td>$" + currentEmp[2] + "</td><td>$" + currentEmp[3] + "</td></tr>")
        });
		//document.write("</ul>");
		document.write("</table>")
	}
	calcBonus(employees);
