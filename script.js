//your code here
function swapTheme(){
	const app = document.getElementById("app");
	const button = document.getElementById("swap");

	app.classList.toggle("day");
	app.classList.toggle("night");

	button.classList.toggle("button_day");
  button.classList.toggle("button_night");
}
   
    const swapButton = document.getElementById("swap");
swapButton.addEventListener("click", swapTheme);