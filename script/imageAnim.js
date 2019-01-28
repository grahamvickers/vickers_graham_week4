(() => {
		console.log('fired')

		// set up the puzzle and pieces boards
		//
		// need a reference to each pic that we want to create
		const thePieces = ["topLeft", "topRight", "bottomLeft", "bottomRight"]

		// get a reference to the drag side
		let piecesBoard = document.querySelector(".puzzle-pieces")
		let puzzleBoard = document.querySelector(".puzzle-board")

		// get a reference to the buttons at the bottom so we can change the puzzle
		let puzzleSelectors = document.querySelectorAll("#buttonHolder img")

		// functions go in the middle
		function createPuzzlePieces(pictureIndex){
			// generate images here -> need to make 4 (top left, top right, bottom left, bottom right)
			// debugger;
			//
			// loop through the image refs and generate one for forEach
			thePieces.forEach((piece, index) => {
					let newPuzzlePiece = `<img id="piece${index}" class="puzzle-image"
							src="images/${piece + pictureIndex}.jpg" alt="puzzle piece">`;

					piecesBoard.innerHTML += newPuzzlePiece;
			});
		}

		function resetPuzzlePieces() {
			// change the current puzzle, regenerate the pieces
			// debugger;
			// clean out the puzzle pieces div
			piecesBoard.innerHTML = "";

			// generate new pieces
			createPuzzlePieces(this.dataset.puzzleref);
		}

		// event handling goes here
		puzzleSelectors.forEach(button => button.addEventListener("click", resetPuzzlePieces));

		// call this function to set up / generate the pieces on load
		createPuzzlePieces(0);

})();

// console.log('Butt Sex');
//
// const theButton =  document.querySelector("#buttonHolder img")
//
// function changeHeadline()
// 	{document.querySelector("h1").textContent = "Hello Nube";
// 	document.querySelector("p").textContent = "try out this puzzle I have for you";
// }
// // set up the puzzle pieces and boards
// //
// theButton.addEventListener("click", changeHeadline);
