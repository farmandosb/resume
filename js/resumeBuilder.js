/*
This is empty on purpose! Your code to build the resume will go here.
 */

   var bio = {
   	"name" : "Freddy Suarez",
   	"role" : "Java Developer, Mechanical Engineer",
   	"contacts" : {

          "email": "" ,
          "github": "farmandosb",
          "twitter": "",
          "location": "Buenos Aires"
      },
   	"welcomeMessage" : "Divide and conquer",
   	"skills" : [
   		"proactive", "methodic", "organized", "autodidact"
   	],
   	"biopic" : "https://github.com/farmandosb/resume/blob/master/images/face.jpeg?raw=true"

   }

 /*"display" : func(),*/

var formattedName = HTMLheaderName.replace("%data%", bio.name);

$("#header").prepend(HTMLheaderRole.replace("%data%", bio.role));
$("#header").prepend(formattedName);
/*for (i=0; i=3; i++){*/

//$("#topContacts, #footerContacts").append(HTMLmobile.replace("%data%", bio.contacts.mobile));
//$("#topContacts, #footerContacts").append(HTMLemail.replace("%data%", bio.contacts.email));
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
            "employer": "Francisco J. Abello y Asociados, S.A.",
            "title": "Projects Engineer",
            "location": "Buenos Aires, Argentina",
            "dates": "enero 2019 - now",
            "description": "Design of mechanical systems. Autocad, Revit."
    },

    {
	    "employer": "Laboratorios Leti, S.A.V",
            "title": "Project Engineer",
            "location": "Guarenas, Venezuela",
            "dates": "julio 2013 - julio 2017",
            "description": "Leading  construction of new production's areas"
    }
	]}

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
		"name":"Educacion IT",
		"location" : "Buenos Aires",
		"degree": "Java Developer Engineer",
        "majors": "",
        "dates": "julio 2019 - Actual",
        "url": "https://www.educacionit.com/"},
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

var displayedu = function(){
  $("#education").append(HTMLschoolStart);
  for (course in education.schools){


		var formattedSchoolName= HTMLschoolName.replace("%data%", education.schools[course].name);
		var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[course].degree);
		var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[course].dates);
		$(".education-entry:last").append(formattedSchoolName);
    $(".education-entry:last").append(formattedSchoolDegree);
    $(".education-entry:last").append(formattedSchoolDates);
	}


$(".education-entry:last").append(HTMLonlineClasses);

  for (course in education.onlineCourses){
		var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);
		var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title);
		var formattedOnlineSchoolTitle = formattedOnlineTitle + formattedOnlineSchool;
		$(".education-entry:last").append(formattedOnlineSchoolTitle);

		var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[course].dates);
		//var formattedWlocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
		//var formattedWdescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
		//$(".work-entry:last").append(formattedWlocation);
		$(".education-entry:last").append(formattedOnlineDates);
		//$(".work-entry:last").append(formattedWdescription);
	}
}
displayedu();

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
	}]



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
