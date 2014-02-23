$(document).ready(function(){

	/*------------------------begin Leaflet map set up-----------------------------*/

	L.Icon.Default.imagePath = "/assets";

  	var map = L.map('map').setView([18.466889,-66.105929], 13); 

	L.tileLayer('http://{s}.tile.cloudmade.com/141d19526e4d486fbbb9d5dc96cd3e7e/997/256/{z}/{x}/{y}.png', {
	    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://cloudmade.com">CloudMade</a>',
	    maxZoom: 18
	}).addTo(map);

	L.marker([18.466889,-66.105929]).addTo(map);

	/*------------------------end Leaflet map set up-----------------------------*/


	$('.datepicker').datepicker();

	$('.multiselect').multiselect();
});