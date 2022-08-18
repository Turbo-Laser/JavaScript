const Persona=[{
	id:1234,
	nick_name: "Lerkisers",
	score_duo:1095,
	score_flex:285,
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


function Renovar(){
	if(Persona[0].score_duo>=0 && Persona[0].score_duo<=100){
		console.log("Hierro 4 - "+ Persona[0].score_duo + " PL")
	}else if(Persona[0].score_duo>=101 && Persona[0].score_duo<=200){	
		console.log("Hierro 3 - " + (Persona[0].score_duo-101) + " PL")
	}else if(Persona[0].score_duo>=201 && Persona[0].score_duo<=300){	
		console.log("Hierro 2 - " + (Persona[0].score_duo-201) + " PL")
	}else if(Persona[0].score_duo>=301 && Persona[0].score_duo<=400){	
		console.log("Hierro 1 - "+ (Persona[0].score_duo-301) + " PL")
	}else if(Persona[0].score_duo>=401 && Persona[0].score_duo<=500){	
		console.log("Bronce 4 - "+ (Persona[0].score_duo-401) + " PL")
	}else if(Persona[0].score_duo>=501 && Persona[0].score_duo<=600){	
		console.log("Bronce 3 - "+ (Persona[0].score_duo-501) + " PL")
	}else if(Persona[0].score_duo>=601 && Persona[0].score_duo<=700){	
		console.log("Bronce 2 - "+ (Persona[0].score_duo-601) + " PL")
	}else if(Persona[0].score_duo>=701 && Persona[0].score_duo<=800){	
		console.log("Bronce 1 - "+ (Persona[0].score_duo-701) + " PL")
	}else if(Persona[0].score_duo>=801 && Persona[0].score_duo<=900){
		console.log("plata 4 - "+ (Persona[0].score_duo-801) + "PL")
	}else if(Persona[0].score_duo>=901 && Persona[0].score_duo<=1000){
		console.log("plata 3 - "+ (Persona[0].score_duo-901) + "PL")
	}else if(Persona[0].score_duo>=1001 && Persona[0].score_duo<=1100){
		console.log("plata 2 -"+ (Persona[0].score_duo-1001) + "PL")
	}else if(Persona[0].score_duo>=1101 && Persona[0].score_duo<=1200){
		console.log("plata 1 -"+ (Persona[0].score_duo-1101) + "PL")
	}else if(Persona[0].score_duo>=1201 && Persona[0].score_duo<=1300){
		console.log("Oro 4 -"+ (Persona[0].score_duo-1201) + "PL")
	}else if(Persona[0].score_duo>=1301 && Persona[0].score_duo<=1400){
		console.log("Oro 3 -"+ (Persona[0].score_duo-1301) + "PL")
	}else if(Persona[0].score_duo>=1401 && Persona[0].score_duo<=1500){
		console.log("Oro 2 -"+ (Persona[0].score_duo-1401) + "PL")
	}else if(Persona[0].score_duo>=1501 && Persona[0].score_duo<=1600){
		console.log("Oro 1 -"+ (Persona[0].score_duo-1501) + "PL")

	}
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
