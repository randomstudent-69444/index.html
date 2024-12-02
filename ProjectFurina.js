var slideIndex = 1
		showDivs(slideIndex);

	function plusDivs(n) {
  showDivs(slideIndex += n);
}

		function showDivs(n) {
			var i;
			var x = document.getElementsByClassName("slidepics");

			if (n > x.length) { slideIndex = 1
		}

			if (n < 1) { slideIndex = x.length
		}

			for (i = 0; i < x.length; i++) { x[i].style.display = "none";
		}
			x[slideIndex-1].style.display = "block";

		}


function pageone(){

homepage.style.display = "block";
aboutus.style.display = "none";
contact.style.display = "none";

}

function pagetwo() {

	homepage.style.display = "none";
	aboutus.style.display = "block";
	contact.style.display = "none";
}

function pagethree() {

	homepage.style.display = "none";
	aboutus.style.display = "none";
	contact.style.display = "block";
}

function login() {

loginhud.style.display = "block";
darkener.style.display = "block";
}

function publicclass() {

	loginhud.style.display = "none";
	darkener.style.display = "none";
}

function t() {

	location.href = "dashboard.html";


}



