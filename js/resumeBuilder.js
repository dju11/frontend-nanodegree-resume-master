

$("#main").append(internationalizeButton);

// append googleMap to the page
$("#mapDiv").append(googleMap);

//define the objects first.  then write in the display functions, then call the display functions last. 

// Bio section 

var bio = { 
	"name": "Daniel Underhill", 
	"role": "Web Developer",
	"contacts": { 
		"phone": "413-444-4444",
		"email": "daniel.j.underhill@gmail.com",
		"Github": "%githuburl%",
		"location": "15 commonwealth avenue, Great Barrington MA 01230"},
	"welcome message": "Hello and welcome to my interactive resume",
	"skills": ['karate', 'singing', 'shuffle dancing', 'producing crap music', 'typng errirs'],
	"biopic": "/images/fry.jpg"
};


// Work section
var work = {
	"jobs": [
		{
			"employer": "O'Connor Professional Group",
			"title": "Case Manager",
			"location": "Boston, MA",
			"dates": "May 2016 - Present",
			"description": "worked as a professional case manager in one-on-one counseling and coaching services"
		}, 

		{
			"employer": "LaSala Real Estate",
			"title": "Operations Manager",
			"location": "Hartford, CT",
			"dates": "April 2015 - June 2016",
			"description": "Managed the daily operations of property management firm and real estate brokerage. Worked in marketing, sales, customer communications, bookkeeping, and invoicing activity."
		}, 

		{
			"employer": "Mary Roses Estate",
			"title": "Estate Manager and Personal Caretaker",
			"location": "Salisbury, CT",
			"dates": "May 2008 - November 2014",
			"description": "Personal in-home care companion and estate management and maintenence"
		}
	]
};

// Projects section
var projects = {
	"projects": [
		{
			"title": "Portfolio Project",
			"dates": "May 2015 - August 2016",
			"description": "An interactive and responsive web page with examples of student work built using the Bootstrap framework.",
			"images": ["images/fry.jpg", "images/fry.jpg"]
		},

		{
			"title": "Second Project",
			"dates": "September 2016 - October 2016",
			"description": "A personal project aimed at a human and that is closely aligned with the plot of the film Cruel Intentions.",
			"images": ["images/fry.jpg"]
		}

	]
};


var education = {
"schools": [
	{
	"name": "University of Connecticut",
	"location": "Storrs, CT",
	"degree": "bachelors of science",
	"majors": "Physiology and Neurobiology",
	"minors": "Business Administration",
	"dates": "2002-2006, 2012-2014"
	}, 

	{
	"name": "Dubspot",
	"location": "NYC, New York",
	"degree": "technical",
	"majors": "Mixing/Mastering Engineer",
	"minors": "N/A",
	"dates": "2014"
	}
],

"online courses": [
	{
	"title": "Webtooling", 
	"school": "Udacity",
	"dates": "2015", 
	"url": "N/A"
	},

	{
	"title": "Obejct Oriented JavaScript", 
	"school": "Udacity",
	"dates": "2015", 
	"url": "N/A"
	} 

	] 
}; 


bio.display = function() {
  // append content to the header
  var formattedName = HTMLheaderName.replace("%data%", bio.name);
$('#header').append(formattedName);

if (bio.skills.length > 0){ 

	$('#header').append(HTMLskillsStart);

	for (var i = 0; i < bio.skills.length; i++) { 
	var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
	$('#skills').append(formattedSkill);
		}
	} 	
};


work.display = function() {
if (work.jobs.length > 0){ 

	$("#workExperience").append(HTMLworkStart);

	for (var i = 0; i < work.jobs.length; i++) { 
	var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
	var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title); 
	var formattedEmployerTitle = formattedEmployer + formattedTitle; 
	$(".work-entry:last").append(formattedEmployerTitle);

	var formattedDates = HTMLworkDates.replace("%data%", work.jobs[i].dates);
	$(".work-entry:last").append(formattedDates);

	var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[i].description);
	$(".work-entry:last").append(formattedDescription); 

		}
	} 	
};


//encapsulate the projects display method within the projects object itself
projects.display = function() {
	// something will probably break
	if (projects.projects.length > 0) {
		//create the div by accessing the "div creator" HTMLprojectStart and then append to the appropriate section in the DOM (#projects)
		$("#projects").append(HTMLprojectStart); 

			//create the for loop that will iterate over the array stored in the projects property of the projects object - hand it the functionality it will perform
		for (var i = 0; projects.projects.length > 0; i++){
			//replace the placeholder text of HTMLprojectTitle with the actual title held in each project array object of the projects property. assign result to a variable (formattedProject) too. 
			var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[i].title);
			//append that variable to the div created for that project (array object/index) in the DOM by appending to the div with class "project entry"
			$(".project-entry:last").append(formattedTitle); 


			var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[i].dates); 
			$(".project-entry:last").append(formattedDates); 

			var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[i].description); 
			$(".project-entry:last").append(formattedDescription); 


			if (projects.projects[i].images.length > 0) {
				//nested for loop to iterate through pictures of each projects array object's picture array
				// note - have to give images a new variable since i is already being used for the individual iterations of projects array.
				for (var x= 0; x < projects.projects[i].images.length; x++){
				var formattedImages = HTMLprojectImage.replace("%data%", projects.projects[i].images[x]);
				$(".project-entry:last").append(formattedImages); 
				}
			}

		}
	}

};


education.display = function() { 

if (education.schools.length > 0) { 
	$("#education'").append(HTMLschoolStart);
}
};


// 	for (var i =0; i < education.schools.length; i++){ 
// 		var formattedName = HTMLschoolName.replace("%data", education.schools[i].name);
// 		var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
// 		var formattedDates = HTMLschoolDates.replace("%data%", education.schools[i].dates);
// 		var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location); 
// 		var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[i].major);

// 		$(".education-entry:last").append(formattedName); 
// 		}
// 	}
// };


// + formattedDates,formattedLocation,formattedMajor,formattedDegree

function inName(name){
	name = name.trim().split(" ");
	console.log(name);
	name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();
	name[1] = name[1].toUpperCase();

	name = name.join(" ");
	return name;
}


// call the education display functions here 
bio.display();
projects.display();
education.display(); 
work.display(); 




