//your code here
function swapTheme(){
	const app = document.getElementById("app");
	const button = document.getElementById("swap");

	app.classList.toggle("day");
	app.classList.toggle("night");

	button.classList.toggle("button-day");
  button.classList.toggle("button-night");
}
   
    const swapButton = document.getElementById("swap");
swapButton.addEventListener("click", swapTheme);