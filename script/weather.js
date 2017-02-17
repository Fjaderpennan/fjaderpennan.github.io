var story = {
	title: "Weather",
	pages: {
		first: {
			title: "At the bus stop",
			text: "text",
			image: "testimg.png",
			options:
				[
					{ text: "Go home", target: "second" },
					{ text: "Walk", target: "third" }
				]
		},
		second: {
			title: "At home",
			text: "text",
			image: "testimg.png",
			options:
				[
					{ text: "Go to bus stop", target: "first" },
					{ text: "Walk", target: "third" }
				]
		},
		third: {
			title: "Walking",
			text: "text",
			image: "testimg.png",
			options:
				[
					{ text: "Go to bus stop", target: "first" },
					{ text: "Go home", target: "second" }
				]
		}
	}
}