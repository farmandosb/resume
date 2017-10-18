/*
This is empty on purpose! Your code to build the resume will go here.
 */

 var bio = {
 	"name" : "Freddy Suárez",
 	"role" : "Mechanical Engineer, Frontend Developer",
 	"contacts" : {
 		"mobile": "+54-911-2671-7400",
        "email": "freddy.armando.suarez@gmail.com" ,
        "github": "farmandosb",
        "twitter": "string (optional)",
        "location": "Montserrat, Buenos Aires"
    },
 	"welcomeMessage" : "Keep it simple",
 	"skills" : [
 		"proactive", "methodic", "keep it simple"
 	],
 	"biopic" : "images/face.jpeg",
 	/*"display" : func(),*/
 };

var formattedName = HTMLheaderName.replace("%data%", bio.name);

$("#header").prepend(HTMLheaderRole.replace("%data%", bio.role));
$("#header").prepend(formattedName);
/*for (i=0; i=3; i++){*/

$("#topContacts, #footerContacts").append(HTMLmobile.replace("%data%", bio.contacts.mobile));
$("#topContacts, #footerContacts").append(HTMLemail.replace("%data%", bio.contacts.email));
$("#topContacts, #footerContacts").append(HTMLlocation.replace("%data%", bio.contacts.location));

//$("#topContacts").append(HTMLmobile.replace("%data%", bio.contacts.mobile));

$("#header").append(HTMLbioPic.replace("%data%", bio.biopic));
$("#header").append(HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage));
$("#header").append(HTMLskillsStart);

for (i=0; i<bio.skills.length; i++){
	$("#skills").append(HTMLskills.replace("%data%", bio.skills[i]));
}

var work = {
	"jobs" : [
		{
	    	"employer": "Laboratorios Leti, S.A.V",
            "title": "Project Engineer",
            "location": "Guarenas, Venezuela",
            "dates": "july 2013 - july 2017",
            "description": "Drawing plans and leading construction of new pharmaceutical areas incluiding services installations"
		},
		{
			"employer": "Avilaire Aire Acondicionado, C.A.", 
            "title": "Service Engineer",
            "location": "Caracas, Venezuela",
            "dates": "january 2013 - juny 2013",
            "description": "Leading technical maintenance, installations and services to customers"
		}
	]
}

var displaywork = function(){
	for (job in work.jobs){
		$("#workExperience").append(HTMLworkStart);

		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
		var formattedEmployerTitle = formattedEmployer + formattedTitle;
		$(".work-entry:last").append(formattedEmployerTitle);

		var formattedWdates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		var formattedWlocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
		var formattedWdescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
		$(".work-entry:last").append(formattedWlocation);
		$(".work-entry:last").append(formattedWdates);
		$(".work-entry:last").append(formattedWdescription);
	}
}
displaywork();

$("#main").append(internationalizeButton);
var inName = function(splitName){
	splitName = bio.name.split(" ");
	splitName[0] = splitName[0].slice(0,1).toUpperCase() + splitName[0].slice(1).toLowerCase();
	splitName[1] = splitName[1].toUpperCase();
	internationalizedName = splitName[0]+" "+splitName[1];
	return internationalizedName;
}


var education = {
	"schools": [
	{
		"name":"Universidad Central de Venezuela",
		"location" : "Caracas",
		"degree": "Mechanical Engineer",
        "majors": "",
        "dates": "april 2006 - december 2012",
        "url": ""
    }],
    "onlineCourses": [
    {
    	"title": "Javascript Basics",
    	"school": "Udacity",
    	"dates": "september 2017",
        "url": "string",
        "display": "string"
    }]
}

var projects = [
	{
		"title": "a1",
		"dates": "a2",
		"description": "a3",
		"images": "images/197x148.gif"
	},
	{
		"title": "b1",
		"dates": "b2",
		"description": "b3",
		"images": "images/197x148.gif"
	}];



projects.display = function(){
	for (proj in projects){
		$("#projects").append(HTMLprojectStart);

		var title = HTMLprojectTitle.replace("%data%", projects[proj].title);
		var dates = HTMLprojectDates.replace("%data%", projects[proj].dates);
		
		var description = HTMLprojectDescription.replace("%data%", projects[proj].description);
		var images = HTMLprojectImage.replace("%data%", projects[proj].images);
		
		$(".project-entry:last").append(title);
		$(".project-entry:last").append(dates);
		$(".project-entry:last").append(description);
		$(".project-entry:last").append(images);
	}

}
//projects.display();


$("#mapDiv").append(googleMap);
