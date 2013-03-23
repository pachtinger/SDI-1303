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
var sexChoice = [
			"female",
			"male",
			"hermaphrodite"
];
var ageChoice = [
			18,
			21,
			30,
			35,
			45,
			50,
			"old",
			"young",
			"average"
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
var hairChoices = {
		female :[
					"ponytail",
					"french braided",
					"bun",
					"micro-mini\'s",
					"butch",
					"other"
					],
		male	:[
					"bald",
					"high & tight",
					"crew cut",
					"spiked",
					"long",
					"other"
					]
};
var partSizes = [
		"big",
		"small",
		"long",
		"medium",
		"short",
		"oblongated",
		"stub nosed",
		"slender",
		"muscular",
		"fat",
		"average",
		"tall"
];
var colorChoices = [
		"blue",
		"brown",
		"green",
		"hazel",
		"blonde",
		"black",
		"red",
		"auburn",
		"pink",
		"purple",
		"white",
		"gray"
];
var clothes = [
		"shirts",
		"pants",
		"shorts",
		"dress",
		"skirt",
		"pantihose",
		"shoes"
];
var accessories = [
		"wallet",
		"purse",
		"neckaless",
		"bracelet",
		"nose peircing",
		"lip peircing",
		"tounge peircing",
		"watch",
		"earrings",
		"ring"
];
var money = [
		"cash",
		"checks",
		"checking account",
		"savings account",
		"retirement savings accounts",
		"credit cards",
		"PayPal"
];
var assests = [
		"house",
		"automobile",
		"stocks"
];




//Begining
console.log ("INSTRUCTIONS & INFORMATION" + "\n" + "--About The Game--");

var currentDate = new Date();
console.log ("It is " + currentDate + ". Time is passing by, and you need to buld a character and political path.");
console.log ("You must also decide on the length of time you would like to play this game for?");
console.log ("Starting with your avatar buildup in it's begining stages, what you will have to decide will be similar to other games, where you have to decide the gender, among other options.  It will be similar to this:");
function avatarChoices(){
	var whatsYourSex = window.prompt ("Pick your gender." + "\n" + "Your options are: Male, Female, Other");
		if (whatsYourSex === "female" || whatsYourSex === "Female" || whatsYourSex === "F" || whatsYourSex === "f"){
			console.log ("You can pick from these hairstyle choices: " + "\n" + hairChoices.female.toString());
			console.log ("You can also pick from these color's to go with your hair: " + "\n" + colorChoices.toString());
			console.log ('If you choose "Other" for your hairstyle choice, you can also choose your length of hair from these available options:');
				var lengthChoice = (partSizes[4] + "|" + partSizes[2] + "|" + partSizes[3]);
				console.log (lengthChoice);
		}else if (whatsYourSex === "male" || whatsYourSex === "Male" || whatsYourSex === "M" || whatsYourSex === "m"){
			console.log ("You can pick from these hairstyle choices: " + "\n" + hairChoices.male.toString());
			console.log ("You can also pick from these color's to go with your hair: " + "\n" + colorChoices.toString());
			console.log ('If you choose "Other" for your hairstyle choice, you can also choose your length of hair from these available options:');
				var lengthChoice = (partSizes[4] + "|" + partSizes[2] + "|" + partSizes[3]);
				console.log (lengthChoice);
		}else if (whatsYourSex === "other" || whatsYourSex === "Other" || whatsYourSex === "O" || whatsYourSex === "o"){
			var othRem = hairChoices.female.pop();
			console.log ('If you have choosen this option of "other", this can only mean you are a "Hermaphrodite", or not human, in either case, you can choose from both of the options available for male and female.');
			console.log ("You can pick from these hairstyle choices: " + "\n" + hairChoices.female.toString() + "\n" + hairChoices.male.toString());
			console.log ("You can also pick from these color's to go with your hair: " + "\n" + colorChoices.toString());
			console.log ('If you choose "Other" for your hairstyle choice, you can also choose your length of hair from these available options:');
			var lengthChoice = (partSizes[4] + "|" + partSizes[2] + "|" + partSizes[3]);
			console.log (lengthChoice);
	}else{
		window.alert ("You have entered an incorrect response." + "\n" + " You can restart and try again if you choose.");
		var pageRestart = window.confirm("Would you like to reload the page?");
			if (pageRestart === true){
						location.reload(true);
					}else{
						console.log ("You will now be redirected to Google.");
						window.location = ("http://www.google.com");
						}
	};
}
avatarChoices();





var roundsPerChoice = 31;
var addMaleChar = ("James");
var addFemChar = ("Donna");

console.log ("\n" + "After deciding your avatar, you will be answering quesitons like this:");
//Boolean
/*("Do you believe our government is corrupt?" + ("Do you believe that you have been conditioned to think, act, and respond a certain way to how we Americans live in our society with only little civil liberty adjustments or do you think that is just conspiracy theory? "));
*/
function freeYourself (truthBeTold){
			var makeChoice = window.confirm ("Do you believe our government is corrupt?");
				if (makeChoice == true){
				console.log ("As an American citizen, if you are one, you are very wise in your choice." + "\n" + "Americans, far to often are blind to the obvious, and their own rights and freedoms, that are being taken away from them at an alarming rate!" + "\n" + "Reality is always harder to accept than fiction." + "\n" + "It is time for Americans to wake up and take our rights and freedoms back" + "\n" + "In the end, we as the people, are stronger than those who are corrupt and in power.");
		}else{
				console.log ("You really need to wake up and see the world around you." + "\n" + "It is alright that you have your opinion,  but ignoring the facts of reality to hide behind it, is what is destroying America." + "\n" + "But please, by no means take my word for it."  + "\n" + "I want you to doubt me and educate yourself." + "\n" + "Please, edcuate yourself, then tell me what the facts are and what is going on!");
}
};
freeYourself ();

//Strin

/*
var quarterFlip = confirm ('Click "OK" for heads, and "Cancel" for tales.');
	if (quarterFlip == true)
	{
		console.log (weLeave + " and head for " + moa + "!" + "\n");
	}else{
		console.log (weStayHome + " and look for a mansion to live in." + "\n");
};
*/
console.log ("For example, you can choose the options and it would look like one of the choices from below:");


for (var i = 0, j = nameChoices.length; i < j; i++){
	var toAmTurns = (roundsPerChoice * gameLengths[i]);
	console.log ("You can choose " + nameChoices[i] + " as a name choice for the purpose of this asssignment." + "\n" + "You can choose " + polChoices[i] + " as a political choice to go with the name" + "\n" + "You can choose " + gameLengths[i] + " months, as a choice, depending on how long you want to play the game.");
	console.log ("There are " + toAmTurns + " turns with this game length choice");

};
//String



//assuming you picked your characters name:
console.log ("Hello " + nameChoices[1] + "." + " The year is 2013, and it is starting to look like an interesting year to be " + ageChoice[2] + " years old and in your adult life.");

//choice of length of game and political race.  There will be an undefined game length in the end someday so you can play as long as you want.
console.log ("You have chosen to play this game for " + gameLengths[3] + " rounds, labled as " + polChoices[3]+ " for your political choice.");


//Total Options




console.log ("This shows the end.");


