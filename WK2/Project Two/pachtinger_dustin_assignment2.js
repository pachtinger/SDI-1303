/*JavaScript
Dustin M. Pachtinger
1303

*/

/*
Characters:
Will be pretty much anything you would like.  You will be able to choose from a man, woman, and make their different characteristics.


Back Setting:
You are a citizen of the United States.  The country is in peril.  The economy is tanking.  Our government is trying to start wars with other countries. (but what for?)  The government is spying you and all the other American citizens.  Government agencies are building up for a war.  DHS, FBI, CIA, etc, have been stock piling weapons, ammo, light armored tanks.  They have also built FEMA camps.  They just have not told the American people why.  That is up to you.


Object/Setting/Goals/Missions:
The object of this game is to not only survive as a citizen of the United States as a good citizen, but to also figure out what is going on.  While doing this, you must follow the rules and laws of society.  As you go along progressing in the game, your character will become aware as you become aware of the situation and why the government is doing what it is doing.  You must figure out what the lies are and what the facts are.  As you and your character progress, you must act out lawfully to gain ground in the fight.  You must know when the time is to break the law and when it is not time to break the law.  You must also know when to challange what laws are real laws and which ones are unconstitutional.  To win you must win over the people and use them to help you stop the what is going on and wrong with the government.

*/

var nameChoice = [
			"David",
			"Dustin",
			"Brandon",
			"Tom",
			"Sarah",
			"Denise",
			"Brenda"
];

var ageChoice = [
			18,
			21,
			30,
			35,
			45,
			50
];

var polChoice = [
			"democrat",
			"republican",
			"liberal",
			"unknown"
];

var gameLength = [
			3,
			6,
			9,
			12,
			24,
			undefined
];

var roundsPerChoice = 31;
var addMaleChar = ("James");
var addFemChar = ("Donna");


//assuming you picked your characters name:
console.log ("Hello " + nameChoice[1] + "." + " The year is 2013, and it is starting to look like an interesting year to be " + ageChoice[2] + " years old and in your adult life.");

//choice of length of game and political race.
console.log ("You have chosen to play this game for " + gameLength[3] + " rounds, labled as " + polChoice[3]+ " for your political choice.");
//console.log ("Each month will represent " + (roundsPerChoice * gameLength[]) + " turns.");







