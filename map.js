var map = L.map('map').setView([39.4714069, -0.3829845], 13);
      	 
      	 //CartoDB layer names: light_all / dark_all / light_nonames / dark_nonames
      	 var layer = L.tileLayer('http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png', {
            attribution: ''
         });
      	 
         layer.addTo(map);
  
      var marker = L.marker([39.4714069, -0.3829845]).addTo(map);
      marker.bindPopup("<img src='https://alededo.github.io/cope/img/fallas-1.jpg'/><h3>Falla Plaza del Pilar</h3><p>Falla Sección Especial</p><p style='text-align:center'><a href='google.com/maps/dir//39.4714069,-0.3829845' target='_blank'><i class='material-symbols-outlined circle'>arrow_top_right</i></a></p>");
