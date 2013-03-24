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
var sexChoice = [
			"female",
			"male",
			"hermaphrodite"
];
var ageChoice = [
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
var maleLifeEx = 83;
var femaleLifeEx = 85;
var hermLifeEx = 65;


//Begining
console.log ("INSTRUCTIONS & INFORMATION" + "\n" + "--About The Game--");

var currentDate = new Date();
console.log ("It is " + currentDate + ". Time is passing by, and you need to buld a character and political path.");
console.log ("You must also decide on the length of time you would like to play this game for?");
console.log ("Starting with your avatar buildup in it's begining stages, what you will have to decide will be similar to other games, where you have to decide the gender, among other options.  It will be similar to this:");
console.log ("First you should introduce your avatar and get building!");

function  avatarName(){
	var nameChoice = window.prompt ("Please enter your avatar's name:");
console.log ("Your name is " + nameChoice + "!");
return nameChoice;
}

console.log ("So " + nameChoice + " , what would you like your avatar to look like?");

function avatarChoices(){
	var whatsYourSex = window.prompt ("Pick your gender." + "\n" + "Your options are: Male, Female, Other");
	var genderChoice = whatsYourSex;
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


//Boolean
/*("Do you believe our government is corrupt?" + ("Do you believe that you have been conditioned to think, act, and respond a certain way to how we Americans live in our society with only little civil liberty adjustments or do you think that is just conspiracy theory? "));
*/
function freeYourself (truthBeTold){
	var makeChoice = window.confirm ("Do you believe our government is corrupt?");
		if (makeChoice === true){
console.log ("As an American citizen who is " + ageForm + " years old, you are very wise in your choice." + "\n" + "The American People, far to often are blind to the obvious, and their own rights and freedoms, that are being taken away from them at an alarming rate!" + "\n" + "There is a long list of reasons why people are not aware of what is going on, which will indirectly come to light throughout the proccess of the game." + "\n" + "It is easy to see that reality is always harder to accept than fiction when it comes to politics." + "\n" + "It is time for Americans to wake up and take our rights and freedoms back" + "\n" + "In the end, we as the people, are stronger than those who are corrupt and in power." + "\n" + "Throughout the game, as your avatar becomes aware of this and a multitude of other corruptions and alarming information, hopefully you will make the right choices to keep your avatar not only alive, but free with the avatars rights and freedoms in tact." + "In the end, what will the cost be? WIll you live? WIll you succeed? What will your virtual world look like?");
console.log ("The future depends on you, in the game for your avatar and in real life, remember to keep an open mind while playing this game to all possabilities and stay alert and focused to your surroudings.");
console.log ("\n" + "After deciding your avatar, you will be answering quesitons like this, and you will be seeing political statements that may not be complete with your beliefs or liking of the political system.");
alert("**WARNING**WARNING**WARNING**" + "\n" + "This game may not conincide with your beliefs in politics.  You may, and probably will find this game offending at times.");
//console.log ("Enlight of the warning, at this time, I will ask if you would like to continue playing the game?");  -- If need to add extra console log for warning
var stayOrGo = window.confirm ("Would you like to contiue?");
	if (stayOrGo === false){
console.log (" You will now be redirected to Google.");
window.location = ("http://www.google.com");
	}else{
console.log ("Your still here! Thanks for staying to play the game. Are you ready to gain further knowledge and experience?");
		}
	}else{
alert("**WARNING**WARNING**WARNING**" + "\n" + "This game may not conincide with your beliefs in politics.  You may, and probably will find this game offending at times.");
var stayOrGo = window.confirm ("Would you like to contiue?");
	if (stayOrGo === false){
console.log (" You will now be redirected to Google.");
window.location = ("http://www.google.com");
	}else{
console.log ("Your still here! Thanks for staying to play the game. Are you ready to gain further knowledge and experience? Keep an open mind! The hardest part is letting go of beliefs and opening your mind to new possablities.");
	}
console.log ("You really need to wake up and see the world around you." + "\n" + "It is alright that you have your opinion,  but ignoring the facts of reality to hide behind it, is what is destroying America." + "\n" + "But please, by no means take my word for it."  + "\n" + "I want you to doubt me, this game, and the thousands of people, along with those who are experienced in areas of government and power that deal directly with where this information is coming from. Why? Because I want you to use that doubt to go out and educate yourself." + "\n" + "Please, never stop edcuating yourself, then tell me what the facts are and what is going on when you find the truth!");
console.log ("Question Everything!" + "\n" + "The future depends on you, in the game for your avatar and in real life.");
	}
};
freeYourself ();
console.log ("For example, you can choose the options and it would look like one of the choices from below:");
for (var i = 0, j = nameChoices.length; i < j; i++){
	var toAmTurns = roundsPerChoice * gameLengths[i];

console.log ("To Recap:")
console.log ("You have choosen " + nameChoice + " as a name for your avatar." + "\n" + "You could choose " + polChoices[i] + " as a political choice for your avatar" + "\n" + "There is also a choice of " + gameLengths[i] + " months for the length of game play you would want to play.");
console.log ("That works out to be " + toAmTurns + " turns per this game choices length.");
console.log ("\n");

console.log("In this game, your age will determine the realistics in length of game play.");
console.log("What that means is, if you start out the game at an " + ageChoice[2] + '\middle age, and you decide to play the game until death, the system will give you the amount of turns based off of your age and a monthly caculation until the national average of death for a male/female is met.');
console.log ("\n");

if (whatsYourSex === "female" || whatsYourSex === "Female" || whatsYourSex === "F" || whatsYourSex === "f"){
	var whatsYourSex = femaleGender;
		}else if (whatsYourSex === "male" || whatsYourSex === "Male" || whatsYourSex === "M" || whatsYourSex === "m"){
	var whatsYourSex = maleGender;
		}else if (whatsYourSex === "other" || whatsYourSex === "Other" || whatsYourSex === "O" || whatsYourSex === "o"){
		var whatsYourSex = hermGender;
		}else{
			console.log ("Pick a correct gender.");
		};
}

console.log ("Please see example:");
console.log ("How old would you like your avatar to be?");
var ageForm = parseInt(prompt("Enter your avatar " + nameChoice + "\'s age.", 0));
while ageToTurns(totalAgeAfter){
		var conAge = ageForm * 12;
if (whatsYourSex === maleGender){
		var maleMonCal = maleLifeEx * 12;
		var totalMalMonCal = maleMonCal - conAge;
		var totalAgeAfter = totalMalMonCal;
	}else if (whatsYourSex === femaleGender){
		var femaleMonCal = femaleLifeEx * 12;
		var totalFemMonCal = femaleMonCal - conAge;
		var totalAgeAfter = totalFemMonCal;
	}else if (whatsYourSex === hermGender){
		var hermMonCal = hermLifeEx * 12;
		var totalHerMonCal = hermMonCal - conAge;
		var totalAgeAfter = totalHerMonCal;
	}else{
		console.log ("You have entered information incorrectly, please restart.");
	}
for (var i = 0, j = gameLengths.length; i < j; i++){
	do calcMonths(){
		var gameLengthReality =
			}
	}


for (var i = 0, j = nameChoices.length; i < j; i++){
	var toAmTurns = roundsPerChoice * gameLengths[i];


console.log ("Your avatar is " + ageForm + " years old!");
var conAge = ageForm * 12;
//var findTurnsMinAge = toAmTurns + conAge;




//console.log (findTurnsMinAge);
//var newAge = findTurnsMinAge / 12;
//toAmTurns;


//console.log ("Your avatar will be " + newAge + " years old by the end of this game");
};


//String


//choice of length of game and political race.  There will be an undefined game length in the end someday so you can play as long as you want.
console.log ("You have chosen to play this game for " + gameLengths[3] + " rounds, labled as " + polChoices[3]+ " for your political choice.");


//Total Options




console.log ("This shows the end.");


