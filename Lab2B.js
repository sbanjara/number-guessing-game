var Lab2B = ( function() {

	/* add "private members" (if any) here */
	
	var count = 0;
	var secret_number = Math.floor(Math.random()*100);

	return {
	
		/* add "public methods" (if any) here */

		init: function() {
			
			var output_p = document.createElement("p");
			var output_p1 = document.createElement("p");
			output_p.innerHTML = "I am thinking about a number between 1 and 100...";
			document.getElementById("output").appendChild(output_p);
			output_p1.innerHTML = "Can you guess which number am I thinking?? Please enter your guess in the form above.";
			document.getElementById("output").appendChild(output_p1);

		},

		processInput: function() {

			/* Get Input */

			var input_t = document.getElementById("input").value;
			var user_input = parseInt(input_t);

			if ( input_t.length > 0 && !isNaN(input_t)) {

				/* Create New Paragraph */
		
				var output_p = document.createElement("p");

				if( user_input < 1 || user_input > 100 ) {
					output_p.innerHTML = "The number you entered is invalid. Please enter a number between 1 and 100.";
				}
					
				else if(user_input < secret_number) {
					count += 1;
					output_p.innerHTML = user_input + " is too low.";
				}

				else if(user_input > secret_number) {
					count += 1;
					output_p.innerHTML = user_input + " is too high.";
				}

				else {
					count += 1;
					output_p.innerHTML = "Congratulations!! You guessed the number in " + count + " guess(es).";
				}
				
				if(count === 8) {
					output_p.innerHTML = "Sorry! You couldn't guesss it right. The correct number is " + secret_number;
				}   
				
				/* Append Paragraph to Output Container */

				document.getElementById("output").appendChild(output_p);
				
				/* Clear Input Field */

				document.getElementById("input").value = "";
		
			}

			else {
				
				var output_p = document.createElement("p");
				output_p.innerHTML = "Invalid Entry! Please enter a number between 1 and 100.";
				document.getElementById("output").appendChild(output_p);
				document.getElementById("input").value = "";

			}

		}

	};

}());