(function(){


	var imagen=document.getElementById("hero");

	var timer = setInterval(function(){
		alert(imagen)
		imagen=imagen=="../assets/images/mujer.jpg" ? "../assets/images/hero.jpg" : "../assets/images/mujer.jpg";
		document.getElementById("hero")=imagen;
	}, 3000);
})();


(function(){


	var imagen=document.getElementById("hero").style.backgroundImage;

	var timer = setInterval(function(){
		alert(imagen)
		imagen=imagen==url("assets/images/mujer.jpg") ? url("assets/images/hero.jpg") : url("assets/images/mujer.jpg");

		document.getElementById("hero").style.backgroundImage=imagen;
		alert(imagen)
	}, 3000);
})();