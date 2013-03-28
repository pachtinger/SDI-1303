/*JavaScript
Dustin M. Pachtinger
1303

*/
//Instuctions and Information on Games
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
console.log ("It is " + currentDate + "." + "\n" + "Time is passing by, and you need to buld a character and political path. You must also decide on the length of time you would like to play this game for? Starting with your avatars buildup/makeup from it's begining stages, what you will have to decide will be similar to other games, where you have to decide the gender, among other options.  It will be similar to the examples of information being asked below this:");
console.log ("\n" + "----First you should introduce your avatar and get building!----");

var avatarName = window.prompt ("Please enter your avatar's name:");
var nameChoice = avatarName;
console.log ("You have chosen " + nameChoice + " as your avatar's name!");
console.log ("So " + nameChoice + ", what would you like your avatar to look like?");

//Run Avatar Choices Function:
function avatarChoices(){
	var whatsYourSex = window.prompt ("Pick your gender." + "\n" + "Your options are: Male, Female, Other");
	//var genderChoice = whatsYourSex;
		if (whatsYourSex === "female" || whatsYourSex === "Female" || whatsYourSex === "F" || whatsYourSex === "f"){
				console.log ("As a female character, you can pick from these hairstyle choices: " + "\n" + hairChoices.female.toString());
				console.log ("You can pick from these colors to dye your hair: " + "\n" + colorChoices.toString());
				console.log ('If you choose "Other" for your hairstyle choice, you can also choose your length of hair from these available options:');
					var lengthChoice = (partSizes[4] + "|" + partSizes[2] + "|" + partSizes[3]);
					console.log (lengthChoice);
						return gender = ("female");
	}else if (whatsYourSex === "male" || whatsYourSex === "Male" || whatsYourSex === "M" || whatsYourSex === "m"){
				console.log ("As a male character, you can pick from these hairstyle choices: " + "\n" + hairChoices.male.toString());
				console.log ("You can pick from these color to dye your hair: " + "\n" + colorChoices.toString());
				console.log ('If you choose "Other" for your hairstyle choice, you can also choose your length of hair from these available options:');
					var lengthChoice = (partSizes[4] + "," + partSizes[2] + "," + partSizes[3]);
					console.log (lengthChoice);
						return gender = ("male");
	}else if (whatsYourSex === "other" || whatsYourSex === "Other" || whatsYourSex === "O" || whatsYourSex === "o"){
			var othRem = hairChoices.female.pop();
				console.log ('If you have choosen this option of "other", this can only mean you are a "Hermaphrodite", or not human, in either case, you can choose from both of the options available for male and female.');
				console.log ("You can pick from these hairstyle choices: " + "\n" + hairChoices.female.toString() + "\n" + hairChoices.male.toString());
				console.log ("You can pick from these colors to dye your hair: " + "\n" + colorChoices.toString());
				console.log ('If you choose "Other" for your hairstyle choice, you can also choose your length of hair from these available options:');
					var lengthChoice = (partSizes[4] + "|" + partSizes[2] + "|" + partSizes[3]);
					console.log (lengthChoice);
						return gender = ("hermaphrodite");
	}else{
		window.alert ("You have entered an incorrect response." + "\n" + " You can restart and try again if you choose.");
		var pageRestart = window.confirm("Would you like to reload the page?");
			if (pageRestart === true){
				location.reload(true);
	}else{
		console.log ("You will now be redirected to Google.");
		window.location = ("http://www.google.com");
		}
	}
}
avatarChoices();

var roundsPerChoice = 31;
var addMaleChar = ("James");
var addFemChar = ("Donna");

alert("**WARNING**WARNING**WARNING**" + "\n" + "This game may not conincide with your beliefs in politics.  You may, and probably will find this game offending at times.");
var stayOrGo = window.confirm ("Would you like to continue?");
	if (stayOrGo === false){
console.log (" You will now be redirected to Google.");
window.location = ("http://www.google.com");
	}else{
console.log ("\n" + "Your still here! Thanks for staying to learn more about the game and how to play it. Are you ready to gain further knowledge and experience?");
}

function freeYourself (){
	var makeChoice = window.confirm ("Do you believe our government is corrupt?");
		if (makeChoice === true){
console.log ("\n" + "---- American citizen, you are very wise in your choice. ----" + "\n" + "*/*"+ "\n" +"\t" + 'The American People far to often are blinded by the obvious because of misleading information that is being thrown at them through mainstream media amongst other sources. Their own rights and freedoms at stake, the people are slowly becomging aware that their "Rights and Freedoms" are being taken away from them at an alarming rate!' + " Those that are still not aware, are not aware because of the long list of reasons which will be brought out during the game play of this game. When it comes to people and their politics, it is easy to see that reality is always harder to accept than fiction. " + "We as a society have been brain washed and trained to think and believe in a certain psychological way." + "\n" + "\t" + "It is time for Americans to wake up and take back our rights and freedoms! In the end, we as the people, are stronger than those who are corrupt and in power. " + 'Throughout the game, as your avatar becomes aware of this corruption and a multitude of other corruptions and alarming information, hopefully you will make the right choices to keep your avatar not only alive, but also keep the avtars "Rights and Freedoms" in tact.' + "\n" + "\t" + 'In the end, what will the cost be? Will you live? Will you succeed? What will your virtual world look like? Whether it is in the game for your avatar or in real life, the future depends on "YOU"! Remember to keep an open mind while playing this game to all possabilities and stay alert and focused to your surroudings and the flow of information.');
console.log ("*/*");
console.log ("\n" + "After you decide your avatar's name and characteristics, you will be answering quesitons and seeing political statements that may not be indicative of your beliefs or liking of the political system.");
	}else{
console.log ("*/*" + "\n" + "\t" + "You really need to wake up and see the world around you. It is alright that you have your opinion,  but ignoring the facts of reality and hiding behind ignorance, is what is destroying America, and the rest of society in inside of it. However, please, by no means take the word of the game for validity of the information it is putting out there. It is good to have doubt, to doubt the legitity of this game, along with the thousands of people who are finally waking up to the corruption being dealt from those in power, and it is okay to doubt those who are experienced in areas of government and power that deal directly with the resources of where some of this information is coming from. Why? Because if you doubt the legitity of the information in this game, there is a small hope that you as person will go out and find the truth on your own. Maybe even fullfill an extra extended challenge to the game, which is a challange to you to use that doubt and go out and educate yourself on what is going on in today's society. Don't just believe one source such as mainstream media or even what is told to you by the President and those in power. "  +  'Investigate the information to the best of your ability. Follow the resources. Check things out accademically. Never stop edcuating yourself! During this time, it is almost a sure thing that you will be able to come back to the game and cite even further the corruptions that have been mentioned in this game, alone with a whole new list of corruptions. Knowledge is power, and not accepting what you are being told is a great start to finding the truth. Remember to "Question Everything", and the truth will find you.');
console.log ("*/*");
	}
}
freeYourself ();
console.log ("\n");

console.log ("----A list of more choices your avatar character will have to chose between is referenced below.----");
function recap(){
	for ( var i = 0, j = polChoices.length, g = gameLengths.length; i < g, i < j; i++){
		console.log ("You could choose " + polChoices[i] + " as a political choice for your avatar" + "\n" + "There is also a choice of " + gameLengths[i] + " months for the length of game play you would want to play.");
	}
}
recap();
console.log ("\n");

console.log("In this game, there will be a realistic mode. In this mode, your age will determine the length of game play. Please see the explantion and examples below for clarification!");
console.log ("\n");

console.log ("----Please see example listed below.----");
console.log ("How old would you like your avatar to be?");

var age = parseInt(prompt("Enter your avatar " + nameChoice + "\'s age.", 0));

//Age Calculations 				This should say: If you are "age" years old, and chose to play the game for "however long", you would be "this old" by the end of the game.  If your age is past "national for gender", this game would not be a realistic game by definition referncing the time sensative reality feature.  Otherwise you could choose the indefinite playing time feature, which allows you to play as long as you choose and retire when you feel you want to retire in the game or just end the game.  ANd or be given a realistic time scale.
//Basically it will-- ask your age-- subtract your age from national death age for your gender--turn remaining age into months-- 31 turns per month--Show an option of How long you could play and how many turns that would be. Show rest of options.

//Age (Life Expextancies)
function lifeExpectancies(){
	if (gender === "female"){
		var lifeExpectancy = femaleLifeEx - age;
		return lifeExpectancyLeft = lifeExpectancy;
	}else if (gender === "male"){
		var lifeExpectancy = maleLifeEx - age;
		return lifeExpectancyLeft = lifeExpectancy;
	}else if (gender === "hermaphrodite"){
		var lifeExpectancy = hermLifeEx - age;
		return lifeExpectancyLeft = lifeExpectancy;
	}else{
		console.log ("You shouldn't be seeing this, and have made an error!")
	}
}

console.log ("this is line " + lifeExpectancies());

//Age (Breakdown into Months)

/*
function yearsToMonths(){
	var realisticMonths = lifeExpectancyLeft * 12;
		var totalTurns = realisticMonths * 4;
			return yourTotalTurns = totalTurns;
		}


yearsToMonths();
console.log ("The life expectancy you have left is " + lifeExpectancies() + " years on average.");
console.log ("You have " + yearsToMonths() + " months of life left!");
console.log ("Which means you would have " + yourTotalTurns + " total turns for your game if you choose reality mode.");
*/

/*

	var ageInMonths = age * 12;

		function ageToTurns(totalAgeAfter){
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
		var gameLengthReality = totalAgeAfter * gameLengths[i];
		return gameLengthReality;
			}
	}


console.log (gameLengthReality);
gameLengthReality;

//for (var i = 0, j = nameChoices.length; i < j; i++){
//	var toAmTurns = roundsPerChoice * gameLengths[i];


console.log ("Your avatar is " + ageForm + " years old!");
var conAge = ageForm * 12;
//var findTurnsMinAge = toAmTurns + conAge;




//console.log (findTurnsMinAge);
//var newAge = findTurnsMinAge / 12;
//toAmTurns;


//console.log ("Your avatar will be " + newAge + " years old by the end of this game");



//String


//choice of length of game and political race.  There will be an undefined game length in the end someday so you can play as long as you want.
console.log ("You have chosen to play this game for " + gameLengths[3] + " rounds, labled as " + polChoices[3]+ " for your political choice.");


//Total Options

*/


console.log ("This shows the end.");


