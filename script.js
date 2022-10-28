window.onunload = function () {
  window.scrollTo(0, 0);
}

window.onbeforeunload = function () {
    document.getElementById('screen-darkener').style.opacity = '1';
		document.getElementById('screen-darkener').style.visibility = 'visible';
}







var prevScrollpos = window.pageYOffset;


window.onscroll = function() {
	var currentScrollPos = window.pageYOffset;
	var quarterscreenheight = (screen.height)/4
	var halfscreenheight = (screen.height)/2

	if (prevScrollpos > currentScrollPos) {
		document.getElementById("topNav").style.top = "0";
  }	else if (prevScrollpos <= currentScrollPos && currentScrollPos > quarterscreenheight) {
		document.getElementById("topNav").style.top = "-20vh";
  }
  prevScrollpos = currentScrollPos;


	
		
  prevScrollpos = currentScrollPos;
	

	
	if (currentScrollPos <= halfscreenheight) {
		document.getElementById("topNav").style.backgroundColor = "rgba(0,0,0,0)";
	} else {
		document.getElementById("topNav").style.backgroundColor = "rgba(0,0,0,1)";
	}



}





function reveal() {
  var reveals = document.querySelectorAll(".phase-cover-text");
	var reveals2 = document.querySelectorAll(".timeline-text");
	var reveals3 = document.querySelectorAll(".mars-info-table-row");
	var reveals4 = document.querySelectorAll(".mars-counter-number");
	var reveals5 = document.querySelectorAll(".location-row");
	var reveals6 = document.querySelectorAll(".location-text");
	var reveals7 = document.querySelectorAll(".component-reveals");
	var reveals8 = document.querySelectorAll(".mars-counter-text");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 0;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
	for (var i = 0; i < reveals2.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals2[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals2[i].classList.add("active2");
    } else {
      reveals2[i].classList.remove("active2");
    }
	}
	for (var i = 0; i < reveals3.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals3[i].getBoundingClientRect().top;
    var elementVisible = 0;

    if (elementTop < windowHeight - elementVisible) {
      reveals3[i].classList.add("active3");
    } else {
      reveals3[i].classList.remove("active3");
    }
  }
	for (var i = 0; i < reveals4.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals4[i].getBoundingClientRect().top;
    var elementVisible = 0;

    if (elementTop < windowHeight - elementVisible) {
      reveals4[i].classList.add("active4");
    } else {
      reveals4[i].classList.remove("active4");
    }
  }
	for (var i = 0; i < reveals5.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals5[i].getBoundingClientRect().top;
    var elementVisible = 0;

    if (elementTop < windowHeight - elementVisible) {
      reveals5[i].classList.add("active5");
    } else {
      reveals5[i].classList.remove("active5");
    }
  }
	for (var i = 0; i < reveals6.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals6[i].getBoundingClientRect().top;
    var elementVisible = 0;

    if (elementTop < windowHeight - elementVisible) {
      reveals6[i].classList.add("active6");
    } else {
      reveals6[i].classList.remove("active6");
    }
  }
	for (var i = 0; i < reveals7.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals7[i].getBoundingClientRect().top;
    var elementVisible = 100;

    if (elementTop < windowHeight - elementVisible) {
      reveals7[i].classList.add("active7");
    } else {
      reveals7[i].classList.remove("active7");
    }
  }
	for (var i = 0; i < reveals8.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals8[i].getBoundingClientRect().top;
    var elementVisible = 0;

    if (elementTop < windowHeight - elementVisible) {
      reveals8[i].classList.add("active8");
    } else {
      reveals8[i].classList.remove("active8");
    }
  }
}

window.addEventListener("scroll", reveal);


	