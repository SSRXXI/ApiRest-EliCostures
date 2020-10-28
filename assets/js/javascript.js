
//document.getElementById("hero")="../assets/images/mujer.jpg";

(function(){

	var igualacero=document.getElementById("carronumber").value;
	if (!igualacero){
		document.getElementById("carronumber1").value=0;
	}
	var imagen=document.getElementById("hero").style.backgroundImage;

	var timer = setInterval(function(){

		imagen=imagen=='url("assets/images/mujer.jpg")' ? 'url("assets/images/hero.jpg")' : 'url("assets/images/mujer.jpg")';

		document.getElementById("hero").style.backgroundImage=imagen;
		document.getElementById("hero").style.transition = "all 1.5s";
	}, 8500);
})();

document.querySelector("#inicio_").addEventListener('touchstart', fa);

function fa(evi){ 

	console.log('evi: '+evi.touches);
	$('.navbar-collapse').collapse('hide');
}

document.querySelector("#servicio_").addEventListener('touchstart', fb);

function fb(evs){ 

	console.log('evs: '+evs.touches);
	$('.navbar-collapse').collapse('hide');
}

document.querySelector("#contacto_").addEventListener('touchstart', fc);

function fc(evc){ 

	console.log('evc: '+evc.touches);
	$('.navbar-collapse').collapse('hide');
}

function disminuir(){

	console.log("haah")
	valor=document.getElementById('carronumber').value;
	console.log(valor);
	if (valor>0){
		valor=valor-1
		document.getElementById('carronumber').value=valor
	}
}

function aumentar(){

	console.log("aumme")
	valor=document.getElementById('carronumber').value;
	console.log(valor);
	valor=parseInt(valor)+1
	document.getElementById('carronumber').value=valor
	}
