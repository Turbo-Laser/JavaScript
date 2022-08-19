const Persona=[{
	id:1234,
	nick_name: "Lerkisers",
	score_duo:95,
	score_flex:495,
	nivel:49,
	imagen: "/img/lerkis.jpg",
}]
const gaseosas =[
	{
		id: 321564645,
		marca: 'postobon',
		sabor: 'uva',
		presentacion: 350,
		precio: 1500	
	},
	{
		id: 6546456,
		marca: 'postobon',
		sabor: 'manzana',
		presentacion: 350,
		precio: 1500	
	},
	{
		id: 65465465,
		marca: 'cocacola',
		sabor: 'cocacola',
		presentacion: 350,
		precio: 1800	
	},
  {
		id: 65465465,
		marca: 'KOLA ROMAN',
		sabor: 'KOLA ROMAN',
		presentacion: 350,
		precio: 1800	
	},
]
 /*function Persona(){
	this.id;
	this.nombre;
	this.apellido;
 }
 Persona.prototype.Saludar=function(){
	return 'Bienvenido Sr: ' + this.nombre + ' ' + this.apellido + ' su Id es: ' + this.id;
 }*/

 var templatePersona = '<table><tbody><tr><td><img src="' + 
 	Persona[0].imagen +
	'" width="100"/><p class="text_center">'+
	Persona[0].nivel +'</p></td><td><h1>'+
	Persona[0].nick_name +
	'</h1></td></tr></tbody></table>'
 
 document.querySelector('#persona').innerHTML = templatePersona;  

 function Rankear(score){
	if(score>=0 && score<=100){		
		return [{
			rank: "Hierro 4",
			valor: score,
			imagen: "/img/iron.webp",			
		}]
	}else if(score>=101 && score<=200){
		return [{
			rank: "Hierro 3",
			valor: score - 101,
			imagen: "/img/iron.webp",			
		}]
	}else if(score>=201 && score<=300){
		return [{
			rank: "Hierro 2",
			valor: score - 201,
			imagen: "/img/iron.webp",			
		}]
	}else if(score>=301 && score<=400){
		return [{
			rank: "Hierro 1",
			valor: score - 301,
			imagen: "/img/iron.webp",			
		}]
	}else if(score>=401 && score<=500){
		return [{
			rank: "Bronce 4",
			valor: score - 401,
			imagen: "/img/bronze.webp",			
		}]
	}else if (score>=501 && score<=600){
		return [{
			rank: "Bronce 3",
			valor: score - 501,
			imagen: "/img/bronze.webp",			
		}]
	}else if (score>=601 && score<=700){
		return [{
			rank: "Bronce 2",
			valor: score - 601,
			imagen: "/img/bronze.webp",			
		}]
	}else if(score>=701 && score<=800){
		return [{
			rank: "Bronce 1",
			valor: score - 701,
			imagen: "/img/bronze.webp",			
		}]
	}else if (score>=801 && score<=900){
		return [{
			rank: "Plata 4",
			valor: score - 801,
			imagen: "/img/silver.webp",			
		}]
	}else if(score>=901 && score<=1000){
		return [{
			rank: "Plata 3",
			valor: score - 901,
			imagen: "/img/silver.webp",
		}]
	
	}else if(score>=1001 && score<=1100){
		return [{
			rank: "Plata 2",
			valor: score - 1001,
			imagen: "/img/silver.webp",
		}]	
	
	}else if(score>=1101 && score<=1200){
		return [{
			rank: "Plata 1",
			valor: score - 1101,
			imagen: "/img/silver.webp",	
		}]
		
	}else if(score>=1201 && score<=1300){
		return [{
			rank: "Oro 4",
			valor: score - 1201,
			imagen: "/img/gold.wedp",
		}]
	}else if(score>=1301 && score<=1400){
		return [{
			rank: "Oro 3",
			valor: score - 1301,
			imagen: "/img/gold.wedp",
		}]	
	
	}else if(score>=1401 && score<=1500){
		return [{
			rank: "Oro 2",
			valor: score - 1401,
			imagen: "/img/gold.wedp",
		}]	
	}else if(score_>=1501 && score<=1600){
		return [{
			rank: "Oro 1",
			valor: score - 1501,
			imagen: "/img/gold.wedp",
		}]
		
 }

function Renovar(){
	let Solo_duo = Rankear(Persona[0].score_duo)
	let Flexible = Rankear(Persona[0].score_flex)
    var template=''

	template='<div><img src="' + Solo_duo[0].imagen + '"/><p>'+Solo_duo[0].rank+'<br> ' +Solo_duo[0].valor + 'PL</p></div>'+ 
			'<div><img src="' + Flexible[0].imagen + '"/><p>'+Flexible[0].rank+'<br> ' +Flexible[0].valor + 'PL</p></div>'

	console.log(Solo_duo[0].rank + ' ' + Solo_duo[0].valor + ' ' + Solo_duo[0].imagen )
	console.log(Flexible[0].rank + ' ' + Flexible[0].valor + ' ' + Flexible[0].imagen)

	document.querySelector('#rango').innerHTML = template; 
}
function listar(){
  //Declaracion de VAriable
  var template=''
  const _persona = new Persona();
  _persona.id=document.getElementById('txtIdentificacion').value;
	_persona.nombre=document.getElementById('txtNombre').value;
	_persona.apellido=document.getElementById('txtApellido').value;
	

  for(let posicion in gaseosas){
    //console.log(gaseosas[posicion])
    template=template + '<tr><td>'+ posicion +'</td><td>'+ gaseosas[posicion].marca + '</td><td>'+ gaseosas[posicion].sabor+'</td></tr>'
  }
  //console.log(gaseosas)
  document.querySelector('#contenido').innerHTML = template;  
  //console.log(_persona.Saludar())
  //console.log()
  document.querySelector('#resultado').innerHTML = _persona.Saludar();  
}
