    var output = document.getElementById("output");
    var kms = 0;
    var duration = 0;
    function getlocation() {  
        if(navigator.geolocation){  
            navigator.geolocation.getCurrentPosition(howFar)  
          }  
        else  
        {  
             alert("Your browser does not support Geolocation API.")  
         }
          }  
       
     function howFar(position){  
       var lat1  = position.coords.latitude;
       var long1 = position.coords.longitude;  
       
       //Coordinates of Statue of Liberty
  

       var lat2  =  40.690400;
       var long2 = -74.045792;
       kms = distance(lat1, long1, lat2, long2, 'K');
       kms = parseFloat(kms).toFixed(2)
       //alert(kms);
       duration = parseFloat(kms / 5 / 24).toFixed(2) // days 
       document.getElementById('output').innerHTML = "<br> You are <h3>" + kms +  " Kilometers </h3> away from Statue of Liberty.<br>";
       document.getElementById('days').innerHTML = "<strong>" + duration + "<strong>";
       document.getElementById('q2').style.display = "inline";
     } 

     function distance(lat1, lon1, lat2, lon2, unit) {
	if ((lat1 == lat2) && (lon1 == lon2)) {
		return 0;
	}
	else {
		var radlat1 = Math.PI * lat1/180;
		var radlat2 = Math.PI * lat2/180;
		var theta = lon1-lon2;
		var radtheta = Math.PI * theta/180;
		var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
		if (dist > 1) {
			dist = 1;
		}
		dist = Math.acos(dist);
		dist = dist * 180/Math.PI;
		dist = dist * 60 * 1.1515;
		if (unit=="K") { dist = dist * 1.609344 }
		if (unit=="N") { dist = dist * 0.8684 }
		return dist;
	}
}
