
$.getJSON("https://www.transatlantica.travel/assets/archivos/storage/paquetes_disponibles.json",function(json){
	var paquetesTodos=json.paquetes;
	var cotizacion=json.cotizaciones.BSP;
	var i=0;
	var tarjetas=[];
	var pqtsParaMostrar=12;
	$.each(paquetesTodos,function(){
		var titulo='<h4 class="card-title">'+this.nombre+'</h4>';
		var salida=this.salidas[0];
		var img1='<img class="card-img-top img-fluid" src="'+salida.imagenes[0]+'" alt="paquetes turísticos">';
		var descr='<p class="card-text">'+salida.descripcion +'</p>';
		var subtotal=salida.importes.total*cotizacion;
		var total='<p class="card-text cristian">$ '+subtotal.toLocaleString()+'</p>';
		var tarjeta=['<div class="carousel-item col-md-4"><div class="card">',img1,'<div class="card-body">',titulo,descr,total,'</div></div></div>'];
        tarjetas.push(tarjeta.join(""));
		console.log(tarjetas);	
		i++;
		return (i<pqtsParaMostrar);
	});
	$("#contenedor").append(tarjetas);
})


