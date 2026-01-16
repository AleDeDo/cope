var map = L.map('map').setView([39.4714069, -0.3829845], 13);
      	 
      	 //CartoDB layer names: light_all / dark_all / light_nonames / dark_nonames
      	 var layer = L.tileLayer('http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png', {
            attribution: ''
         });
      	 
         layer.addTo(map);
  
      var marker = L.marker([39.4714069, -0.3829845]).addTo(map);
      marker.bindPopup("<img src='https://alededo.github.io/cope/img/fallas-1.jpg'/><h3>Falla Plaza del Pilar</h3><p>Falla Sección Especial</p><p style='text-align:center'><a href='https://www.google.com/maps/place/Falla+Plaza+del+Pilar/@39.4718686,-0.3849559,17z/data=!3m1!4b1!4m6!3m5!1s0xd604f4f3f1b553b:0x3fce5adac6726d02!8m2!3d39.4718645!4d-0.382381!16s%2Fg%2F1w0r17bt?entry=ttu&g_ep=EgoyMDI2MDExMy4wIKXMDSoASAFQAw%3D%3D' target='_blank'><i class='material-symbols-outlined circle'>arrow_top_right</i></a></p>");
