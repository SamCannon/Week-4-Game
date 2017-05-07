



$("#gameBoard").ready(function() {

	$("#swgTheme").ready(function() {
		$("#swgTheme").prop("volume", 0.25);
	});

	$("#intro1").delay(3000).fadeOut(1000);
	$("#intro2").delay(9000).fadeOut(2000);

	$("#option1").click(function() {
		$("#option1, #option2, #option3, #option4, #option5").remove();

		$("#enemy1").append("<img src='images/vader.png' height='115px'>");
		$("#enemy2").append("<img src='images/yoda.jpg' height='115px'>");
		$("#enemy3").append("<img src='images/sidious.jpg' height='115px'>");
		$("#enemy4").append("<img src='images/mace.jpg' height='115px'>");

		$("#you").append("<img src='images/ogObi.jpg' height='150px'>");
		$("#selectHead").css("display:none;");
		$(".enBut").css("display", "block;");


	});

	$("#option2").click(function() {
		$("#option1, #option2, #option3, #option4, #option5").remove();

		$("#enemy1").append("<img src='images/ogObi.jpg' height='115px'>");
		$("#enemy2").append("<img src='images/yoda.jpg' height='115px'>");
		$("#enemy3").append("<img src='images/sidious.jpg' height='115px'>");
		$("#enemy4").append("<img src='images/mace.jpg' height='115px'>");

		$("#you").append("<img src='images/vader.png' height='150px'>");

	});

	$("#option3").click(function() {
		$("#option1, #option2, #option3, #option4, #option5").remove();

		$("#enemy1").append("<img src='images/ogObi.jpg' height='115px'>");
		$("#enemy2").append("<img src='images/vader.png' height='115px'>");
		$("#enemy3").append("<img src='images/sidious.jpg' height='115px'>");
		$("#enemy4").append("<img src='images/mace.jpg' height='115px'>");

		$("#you").append("<img src='images/yoda.jpg' height='150px'>");

	});

	$("#option4").click(function() {
		$("#option1, #option2, #option3, #option4, #option5").remove();

		$("#enemy1").append("<img src='images/ogObi.jpg' height='115px'>");
		$("#enemy2").append("<img src='images/vader.png' height='115px'>");
		$("#enemy3").append("<img src='images/yoda.jpg' height='115px'>");
		$("#enemy4").append("<img src='images/mace.jpg' height='115px'>");

		$("#you").append("<img src='images/sidious.jpg' height='150px'>");

	});

	$("#option5").click(function() {
		$("#option1, #option2, #option3, #option4, #option5").remove();

		$("#enemy1").append("<img src='images/ogObi.jpg' height='115px'>");
		$("#enemy2").append("<img src='images/vader.png' height='115px'>");
		$("#enemy3").append("<img src='images/yoda.jpg' height='115px'>");
		$("#enemy4").append("<img src='images/sidious.jpg' height='115px'>");

		$("#you").append("<img src='images/mace.jpg' height='150px'>");

	});


	///////////////////////////////////////////////////////////////////////////////////////////////////////




});


/**$("#fighterSelection").ready(function() {

	var imgArray = ["ogObi.jpg", "vader.png", "yoda.jpg", "sidious.jpg", "mace.jpg"];

	var idIndex = 1;
	var imgIndex = 0;

	//var ygObi = {name:"Obi Wan (young)", hp:50};
	var ogObi = {name:"Obi Wan (old)", hp:50, ap:6};
	var vader = {name:"Darth Vader", hp:50, ap:6};
	var yoda = {name:"Yoda", hp:50, ap:6};
	var sidious = {name: "Darth Sidious", hp:50, ap:6};
	var mace = {name:"Mace Windu", hp:50, ap:6};

	var cls = "class=\"option\"";
	var id = "id=\"option"+idIndex+"\"";



	$(imgArray).each(function() {
		$("#fighterSelection").append("<p"+cls + " " + id"><img class='fighterImg' src='images/"+imgArray[imgIndex]+"' height='115px'></p>");
		
		$("#option"+idIndex).click(function() {



		});

		idIndex += 1;
		imgIndex += 1;

		
	});

});**/