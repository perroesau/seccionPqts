$.getJSON("https://www.transatlantica.travel/assets/archivos/storage/paquetes_disponibles.json",function(json){
	var paquetesTodos=json.paquetes;
	var cotizacion=json.cotizaciones.BSP;
	var i=0;
	var tarjetas=[];
	var pqtsParaMostrar=12;
	var titulo='<div class="swiper-slide"><div class="column"><div class="post-module"><div class="thumbnail"><div class="date">';
	var postContent='<div class="post-content"><div class="category">Paquetes</div>';
	const monthNames = ["ENE", "FEB", "MAR", "ABR", "MAY", "JUN","JUL", "AGO", "SEP", "OCT", "NOV", "DIC"];
	
	$.each(paquetesTodos,function(){
		var salida=this.salidas[0];
		var fecha=salida.salida.fecha;
		var dia=fecha.substring(8);
		var mes=monthNames[parseInt(fecha.substring(5,7))];
		var diaSalida='<div class="day">'+dia+'</div>';
		var mesSalida='<div class="month">'+mes+'</div></div>';
		var imgCard='<img src='+salida.imagenes[0]+' style="height:350px;"/></div>'//fin del thumbnail de card
		var titCard='<h1 class="title">'+this.nombre+'</h1>';
		var subtotal=Math.round(salida.importes.total*cotizacion);
		var titPrice='<h2 class="sub_title">Desde $'+subtotal.toLocaleString()+'</h2>';
		var descripcion='<p class="description">'+salida.descripcion.replace(/<div>|<\/div>/gm, "<br>")+'</p></div></div></div></div>';
		var tarjeta=[titulo,diaSalida,mesSalida,imgCard,postContent,titCard,titPrice,descripcion];
		tarjetas.push(tarjeta.join(""));
		i++;
		//return (i<pqtsParaMostrar);
			});
		$("#contenedor").append(tarjetas);
		slider();
		swiper();
		//console.log(tarjetas);
	})
	
	function slider(){  $('.post-module').hover(function() {
    $(this).find('.description').stop().animate({
      height: "toggle",
      opacity: "toggle"
    }, 300);
	});}
	
	function swiper(){
    var swiper = new Swiper('.swiper-container', {
	// init:false,	
	 slidesPerView: 3,
      spaceBetween: 30,
      freeMode: true,
	//  grabCursor:true,
	 // watchOverflow:true, no muestra btns paginación sino hay suficientes elementos.
	   pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
	   breakpoints: {
    // when window width is <= 360px
    360: {
      slidesPerView: 1,
      spaceBetween: 10
    },
    // when window width is <= 480px
    480: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    // when window width is <= 640px
    640: {
      slidesPerView: 3,
      spaceBetween: 30
    }
  }
    });
	}
