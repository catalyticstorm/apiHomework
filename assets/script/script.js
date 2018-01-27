// JavaScript Document
$("button").on("click", function() {
	var animal = $(this).attr("data-animal");
	var queryY = "https://api.giphy.com/v1/gifs/search?q=" + animal + "&api_key=yh9saNmTKKzAbZkT6CRTMPNeU0SB1Le5&limit=1&rating=y";
	var queryG = "https://api.giphy.com/v1/gifs/search?q=" + animal + "&api_key=yh9saNmTKKzAbZkT6CRTMPNeU0SB1Le5&limit=1&rating=g";
	var queryPG = "https://api.giphy.com/v1/gifs/search?q=" + animal + "&api_key=yh9saNmTKKzAbZkT6CRTMPNeU0SB1Le5&limit=1&rating=pg";
	var queryPGTHTN = "https://api.giphy.com/v1/gifs/search?q=" + animal + "&api_key=yh9saNmTKKzAbZkT6CRTMPNeU0SB1Le5&limit=1&rating=pg13";

	$.ajax({ url: queryY, method: "GET" }).then(function(response) {
		var yStuff = response.data;
		console.log(yStuff);
		$("#gifDivY").prepend('<img src="' + yStuff[0].images.fixed_height.url + '" alt="">');
	});

	$.ajax({ url: queryG, method: "GET" }).then(function(response) {
		var gStuff = response.data;
		$("#gifDivG").prepend('<img src="' + gStuff[0].images.fixed_height.url + '" alt="">');
	});
	
	$.ajax({ url: queryPG, method: "GET" }).then(function(response) {
		var pgStuff = response.data;
		$("#gifDivPG").prepend('<img src="' + pgStuff[0].images.fixed_height.url + '" alt="">');
	});
	
	$.ajax({ url: queryPGTHTN, method: "GET" }).then(function(response) {
		var pgTHTNStuff = response.data;
		$("#gifDivPGTHTN").prepend('<img src="' + pgTHTNStuff[0].images.fixed_height.url + '" alt="">');
	});
});
	
