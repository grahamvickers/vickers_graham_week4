(() => {
		console.log('Butt Sex');

		const theButton =  document.querySelector("#buttonHolder img")
		
		function changeHeadline()
			{document.querySelector("h1").textContent = "Hello Nube";
			document.querySelector("p").textContent = "try out this puzzle I have for you";
		}
		// set up the puzzle pieces and boards
		//
		theButton.addEventListener("click", changeHeadline);

})();
