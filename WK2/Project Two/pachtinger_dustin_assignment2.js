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

var nameChoices = [
			"David",
			"Dustin",
			"Brandon",
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

var polChoices = [
			"democrat",
			"republican",
			"liberal",
			"grassrots",
			"other",
			"unknown"
];

var gameLengths = [
			3,
			6,
			9,
			12,
			24,
			48
];

var roundsPerChoice = 31;
var addMaleChar = ("James");
var addFemChar = ("Donna");


//assuming you picked your characters name:
console.log ("Hello " + nameChoices[1] + "." + " The year is 2013, and it is starting to look like an interesting year to be " + ageChoice[2] + " years old and in your adult life.");

//choice of length of game and political race.  There will be an undefined game length in the end someday so you can play as long as you want.
//console.log ("You have chosen to play this game for " + gameLength[3] + " rounds, labled as " + polChoice[3]+ " for your political choice.");
console.log ("The rounds per choice of game length is listed below:" );
console.log ("We have " + gameLengths.length + " choices for game length.");

console.log ("This shows the end.");

for (var i = 0, j = nameChoice.length; i < j; i++){
	var toAmTurns = (roundsPerChoice * gameLength[i]);
	console.log ("You can choose " + nameChoice[i] + " as a name choice for the purpose of this asssignment." + "\n" + "You can choose" + polChoice[i] + " as a political choice to go with the name" + "\n" + "You can choose " + gameLength[i] + " months, as a choice, depending on how long you want to play the game.");
	console.log ("There are " + toAmTurns + " turns with this game length choice");

};




/*

console.log ("This shows the end.");
 var tankNames = ["Shark Tank", "Sting Ray Tank", "Dolphin Tank", "Fish Tank"],
	minutesPerTank = [20, 15, 25, 30],
	kidNames = ["Braden", "Rhys", "Zoe"];
        var visitTank = function(whatTank) {
            var tankName = tankNames[whatTank],
            minutesThisTank = minutesPerTank[tankNumber];
            console.log(kidNames[1] + " wanted us to visit the " + tankName + " for " + minutesThisTank + " minutes. So I set the timer on my watch!");
            for (var minutes = 0; minutes < minutesThisTank; minutes += 10) {
                    var minutesRemain = minutesThisTank - minutes;
                    console.log("We have " + minutesRemain + " minutes left. " + minutes + " minutes have past.");
            }
            console.log("We finished with the " + tankName + ".");
        };
        for (var tankNumber = 0; tankNumber < tankNames.length; tankNumber++) {
            visitTank(tankNumber);
        };
*/
