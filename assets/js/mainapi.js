

const url = "https://apis.modernizacion.cl/dpa/provincias"

fetch(url)
.then(response => response.json())
.then(data=> {

	console.log(data)

	let element = document.getElementById('elementapi')
	for (i=0; i<data.length; i++) {
		titulo=data[i].title;
		var para = document.createElement("p");
		var node = document.createTextNode('Titulo: '+titulo);
		para.appendChild(node)
		element.appendChild(para)	
	}
	
})
