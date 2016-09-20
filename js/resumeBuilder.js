
var bio = { 
	"name": "Daniel Underhill", 
	"role": "Web Developer",
	"contact info": { 
		"phone": "413-444-4444",
		"email": "daniel.j.underhill@gmail.com",
		"Github": "%githuburl%",
		"location": "Massachusetts"},
	"welcome message": "Hello and welcome to my interactive resume",
	"skills": ['karate', 'singing', 'shuffle dancing', 'producing crap music'],
	"biopic": "images/fry.jpg"
};

var formattedName = HTMLheaderName.replace("%data%", bio.name);
$('#header').append(formattedName);

if (bio.skills.length > 0){ 

	$('#header').append(HTMLskillsStart);

	var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
	$('#skills').append(formattedSkill);


	formattedSkill = HTMLskills.replace("%data%", bio.skills[1]); 
	$('#skills').append(formattedSkill);

	formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
	$('#skills').append(formattedSkill);

	formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
	$('skills').append(formattedSkill); 

	formattedSkill = HTMLskills.replace("%data%", bio.skills[4]);
	$('skills').append(formattedSkill); 
	};






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
}


for (job in work.jobs){ 
	$("#workExperience").append(HTMLworkStart); 

	var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
	var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title); 

	var formattedEmployerTitle = formattedEmployer + formattedTitle; 

	$(".work-entry:last").append(formattedEmployerTitle); 

	};



// var projects = {
// 	"projects": [
// 		{
// 			"title": "Portfolio Project",
// 			"dates": "May 2015 - August 2016",
// 			"description": "An interactive and responsive web page with examples of student work built using the Bootstrap framework.",
// 			"images": "https://github.com/dju11/Project-1---Trial-Portfolio-.git"
// 		}
// 	]
// }


// var education = {
// "schools": [
// 	{
// 	"name": "University of Connecticut",
// 	"schools' cities": "Storrs, CT",
// 	"majors": "Physiology and Neurobiology",
// 	"minors": "Business Administration",
// 	"graduation years": "2012"
// 	}, 

// 	{
// 	"name": "Dubspot",
// 	"schools' cities": "NYC, New York",
// 	"majors": "Mixing/Mastering Engineer",
// 	"minors": "N/A",
// 	"graduation years": "2014"
// 	}
// ],

// "online courses": [
// 	{
// 	"title": "Webtooling", 
// 	"school": "Udacity",
// 	"dates": "2015", 
// 	"url": "N/A"
// 	},

// 	{
// 	"title": "Obejct Oriented JavaScript", 
// 	"school": "Udacity",
// 	"dates": "2015", 
// 	"url": "N/A"
// 	} 

// 	] 
// } 




