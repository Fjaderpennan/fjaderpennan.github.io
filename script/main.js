var currentPage = "first";

var clickHandler = function() {
	var link = $(this);
	var linkNumber = link.attr("data-number");
	var page = story.pages[currentPage];
	var linkObject = page.options[linkNumber];
	currentPage = linkObject.target;
	console.log("clickHandler", currentPage);
	render(story.pages[currentPage]);
}

function render(page) {
	console.log("render", page);
	//$("header #title").text(story.title);
	//$("main #title").text(page.title);
	$("#main_title").text(story.title);
	$("#page_title").text(page.title);
	$("#image").attr("src", "img/" + page.image);
	$("#paragraph").text(page.text);

	$("#options").empty();
	var options = page.options;
	for(var i = 0; i < options.length; i++) {
		var option = options[i];
		var link = $("<li></li>");

		link.text(option.text);
		link.attr("data-number", i);

		$("#options").append(link);
	}
}

$("#options").on("click", "li", clickHandler);

render(story.pages[currentPage]);