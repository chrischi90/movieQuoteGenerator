$(document).ready(function () {
	generate();

	function generate () {
		var quotes = [
			"There is no spoon. @Neo",
			"But why male models? @Derek Zoolander",
			"Dark and difficult times lie ahead. Soon we must all face the choice between what is right and what is easy. @Dumbledore",
			"None of you seem to understand... I'm not locked in here with you. You're locked in here with me! @Rorschach",
			"Maybe. Maybe not. Maybe fuck yourself @Dignam",
			"I've seen things you people wouldn't believe. Attack ships on fire off the shoulder of Orion. I've watched C-beams glitter in the dark near the Tannhauser Gate. All those moments will be lost in time, like tears... in rain. Time to die. @Roy Batty",
			"My friends, you bow to no one @Aragorn",
			"What we do in life echoes in eternity. @Maximus",
			"Evil will always triumph because good is dumb. @Lord Helmet",
			"Get busy living, or get busy dying. @Andy Dufresne",
			"Milk was a bad choice. @Ron Burgundy",
			"Life moves pretty fast. If you don't stop and look around once in a while, you could miss it. @Ferris Beuller",
			"There is an idea of a Patrick Bateman; some kind of abstraction. But there is no real me: only an entity, something illusory. And though I can hide my cold gaze, and you can shake my hand and feel flesh gripping yours and maybe you can even sense our lifestyles are probably comparable... I simply am not there. @Patrick Bateman",
			"King Kong ain't got shit on me! @Alonzo Harris",
			"If my calculations are correct, when this baby hits 88 miles per hour... you're gonna see some serious shit. @Doc Brown",
			"Do or do not. There is no try @Yoda",
			
		];

		var randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
		var quoteSplit = randomQuote.split("@");
		$('.saying').text(quoteSplit[0]);
		$('.author').text(quoteSplit[1]);


	}

	$('.button').on("click", function(){
		generate();
	});


		

  
});