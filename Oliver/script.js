//Basic
// var sandwiches = { 
// 	"sandwich": "hamburger", 
// 	"calories": "260" 
// };

// var fries = { 
// 	"fries_size": "Large French Fries", 
// 	"calories": "570" 
// };

// document.write("My favorite sandwich is a "+ sandwiches.sandwich +" which has approximately "+ sandwiches.calories +" calories, along with it I enjoy eating "+ fries.fries_size +" which have about "+fries.calories+" calories.");

//Intermediate
    // Unique ID
    // First Name
    // Last Name
    // Email address
    // Job Title
    // Salary

    var Persons = [
    {
    "Unique_ID": 1,
    "First_Name": "Tony",
    "Last_Name": "Stark",
    "Email_Adress": "ImIronMan@avengers.com",
    "Job_Title": "Iron-Man",
    "Salary": "Too Much"
    },
    {
    "Unique_ID": 2,
    "First_Name": "Ochaco",
    "Last_Name": "Uraraka",
    "Email_Adress": "ochaco.ur@ua.com",
    "Job_Title": "Young Hero",
    "Salary": "No Salary"
    },
    {
    "Unique_ID": 3,
    "First_Name": "Izuku", 
    "Last_Name": "Midoriya",
    "Email_Adress": "izuku.mi@ua.com",
    "Job_Title": "Young Hero",
    "Salary": "No Salary"
    }
    ];
for(let a =0; a < Persons.length; a++){
document.getElementsByClassName("ID")[a].innerHTML = Persons[a].Unique_ID;
document.getElementsByClassName("FN")[a].innerHTML = Persons[a].First_Name;
document.getElementsByClassName("LN")[a].innerHTML = Persons[a].Last_Name;
document.getElementsByClassName("Email")[a].innerHTML = Persons[a].Email_Adress;
document.getElementsByClassName("Job")[a].innerHTML = Persons[a].Job_Title;
document.getElementsByClassName("Salary")[a].innerHTML = Persons[a].Salary;
}


