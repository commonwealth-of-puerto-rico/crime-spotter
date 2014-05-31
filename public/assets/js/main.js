var map, municipalitieSearch = []

/* Basemap Layers */
var mapquestOSM = L.tileLayer("http://{s}.mqcdn.com/tiles/1.0.0/osm/{z}/{x}/{y}.png", {
  maxZoom: 19,
  subdomains: ["otile1", "otile2", "otile3", "otile4"],
  attribution: 'Tiles courtesy of <a href="http://www.mapquest.com/" target="_blank">MapQuest</a> <img src="http://developer.mapquest.com/content/osm/mq_logo.png">. Map data (c) <a href="http://www.openstreetmap.org/" target="_blank">OpenStreetMap</a> contributors, CC-BY-SA.'
});
var mapquestOAM = L.tileLayer("http://{s}.mqcdn.com/tiles/1.0.0/sat/{z}/{x}/{y}.jpg", {
  maxZoom: 18,
  subdomains: ["oatile1", "oatile2", "oatile3", "oatile4"],
  attribution: 'Tiles courtesy of <a href="http://www.mapquest.com/" target="_blank">MapQuest</a>. Portions Courtesy NASA/JPL-Caltech and U.S. Depart. of Agriculture, Farm Service Agency'
});
var mapquestHYB = L.layerGroup([L.tileLayer("http://{s}.mqcdn.com/tiles/1.0.0/sat/{z}/{x}/{y}.jpg", {
  maxZoom: 18,
  subdomains: ["oatile1", "oatile2", "oatile3", "oatile4"]
}), L.tileLayer("http://{s}.mqcdn.com/tiles/1.0.0/hyb/{z}/{x}/{y}.png", {
  maxZoom: 19,
  subdomains: ["oatile1", "oatile2", "oatile3", "oatile4"],
  attribution: 'Labels courtesy of <a href="http://www.mapquest.com/" target="_blank">MapQuest</a> <img src="http://developer.mapquest.com/content/osm/mq_logo.png">. Map data (c) <a href="http://www.openstreetmap.org/" target="_blank">OpenStreetMap</a> contributors, CC-BY-SA. Portions Courtesy NASA/JPL-Caltech and U.S. Depart. of Agriculture, Farm Service Agency'
})]);

/* Overlay Layers */
var municipalities = L.geoJson(null, {
  style: function (feature) {
    return {
      color: "black",
      fill: false,
      opacity: 1,
      clickable: false
    };
  },
  onEachFeature: function (feature, layer) {
    municipalitieSearch.push({
      name: layer.feature.properties.NAME,
      source: "municipalities",
      id: L.stamp(layer),
      bounds: layer.getBounds()
    });
  }
});
$.getJSON("data/municipalities.geojson", function (data) {
  municipalities.addData(data);
});

var murders = L.geoJson(null, {
  pointToLayer: function (feature, latlng) {
    return L.marker(latlng, {
      icon: L.icon({
        iconUrl: "assets/img/marker_murder.png",
        iconSize: [24, 28],
        iconAnchor: [12, 28],
        popupAnchor: [0, -25]
      }),
      title: "Asesinato",
      riseOnHover: true
    });
  },
  onEachFeature: function (feature, layer) {
    if (feature.properties) {
      var content = "<table class='table table-striped table-bordered table-condensed'>" + "<tr><th>Delito</th><td>" + "Asesinato"+ "</td></tr>" + "<tr><th>Fecha</th><td>" + moment(feature.properties.time, "YYYY-MM-DD,HH:mm:ss.sssZ").format('LLL');+ "</td></tr>" + "</table>";
      if (document.body.clientWidth <= 767) {
        layer.on({
          click: function (e) {
            $("#feature-title").html("Asesinato");
            $("#feature-info").html(content);
            $("#featureModal").modal("show");
          }
        });

      } else {
        layer.bindPopup(content, {
          maxWidth: "auto",
          closeButton: false
        });
      }
    }
  }
});

var rapes = L.geoJson(null, {
  pointToLayer: function (feature, latlng) {
    return L.marker(latlng, {
      icon: L.icon({
        iconUrl: "assets/img/marker_rape.png",
        iconSize: [24, 28],
        iconAnchor: [12, 28],
        popupAnchor: [0, -25]
      }),
      title: "Violación",
      riseOnHover: true
    });
  },
  onEachFeature: function (feature, layer) {
    if (feature.properties) {
      var content = "<table class='table table-striped table-bordered table-condensed'>" + "<tr><th>Delito</th><td>" + "Violación"+ "</td></tr>" + "<tr><th>Fecha</th><td>" + moment(feature.properties.time, "YYYY-MM-DD,HH:mm:ss.sssZ").format('LLL');+ "</td></tr>" + "</table>";
      if (document.body.clientWidth <= 767) {
        layer.on({
          click: function (e) {
            $("#feature-title").html("Violación");
            $("#feature-info").html(content);
            $("#featureModal").modal("show");
          }
        });

      } else {
        layer.bindPopup(content, {
          maxWidth: "auto",
          closeButton: false
        });
      }
    }
  }
});

var thefts = L.geoJson(null, {
  pointToLayer: function (feature, latlng) {
    return L.marker(latlng, {
      icon: L.icon({
        iconUrl: "assets/img/marker_theft.png",
        iconSize: [24, 28],
        iconAnchor: [12, 28],
        popupAnchor: [0, -25]
      }),
      title: "Robo",
      riseOnHover: true
    });
  },
  onEachFeature: function (feature, layer) {
    if (feature.properties) {
      var content = "<table class='table table-striped table-bordered table-condensed'>" + "<tr><th>Delito</th><td>" + "Robo"+ "</td></tr>" + "<tr><th>Fecha</th><td>" + moment(feature.properties.time, "YYYY-MM-DD,HH:mm:ss.sssZ").format('LLL'); + "</td></tr>" + "</table>";
      if (document.body.clientWidth <= 767) {
        layer.on({
          click: function (e) {
            $("#feature-title").html("Robo");
            $("#feature-info").html(content);
            $("#featureModal").modal("show");
          }
        });

      } else {
        layer.bindPopup(content, {
          maxWidth: "auto",
          closeButton: false
        });
      }
    }
  }
});

var aggressions = L.geoJson(null, {
  pointToLayer: function (feature, latlng) {
    return L.marker(latlng, {
      icon: L.icon({
        iconUrl: "assets/img/marker_aggression.png",
        iconSize: [24, 28],
        iconAnchor: [12, 28],
        popupAnchor: [0, -25]
      }),
      title: "Agresión Agravada",
      riseOnHover: true
    });
  },
  onEachFeature: function (feature, layer) {
    if (feature.properties) {
      var content = "<table class='table table-striped table-bordered table-condensed'>" + "<tr><th>Delito</th><td>" + "Agresión Agravada"+ "</td></tr>" + "<tr><th>Fecha</th><td>" + moment(feature.properties.time, "YYYY-MM-DD,HH:mm:ss.sssZ").format('LLL'); + "</td></tr>" + "</table>";
      if (document.body.clientWidth <= 767) {
        layer.on({
          click: function (e) {
            $("#feature-title").html("Agresión Agravada");
            $("#feature-info").html(content);
            $("#featureModal").modal("show");
          }
        });

      } else {
        layer.bindPopup(content, {
          maxWidth: "auto",
          closeButton: false
        });
      }
    }
  }
});

var breakins = L.geoJson(null, {
  pointToLayer: function (feature, latlng) {
    return L.marker(latlng, {
      icon: L.icon({
        iconUrl: "assets/img/marker_break_in.png",
        iconSize: [24, 28],
        iconAnchor: [12, 28],
        popupAnchor: [0, -25]
      }),
      title: "Escalamiento",
      riseOnHover: true
    });
  },
  onEachFeature: function (feature, layer) {
    if (feature.properties) {
      var content = "<table class='table table-striped table-bordered table-condensed'>" + "<tr><th>Delito</th><td>" + "Escalamiento"+ "</td></tr>" + "<tr><th>Fecha</th><td>" + moment(feature.properties.time, "YYYY-MM-DD,HH:mm:ss.sssZ").format('LLL'); + "</td></tr>" + "</table>";
      if (document.body.clientWidth <= 767) {
        layer.on({
          click: function (e) {
            $("#feature-title").html("Escalamiento");
            $("#feature-info").html(content);
            $("#featureModal").modal("show");
          }
        });

      } else {
        layer.bindPopup(content, {
          maxWidth: "auto",
          closeButton: false
        });
      }
    }
  }
});

var misappropriations = L.geoJson(null, {
  pointToLayer: function (feature, latlng) {
    return L.marker(latlng, {
      icon: L.icon({
        iconUrl: "assets/img/marker_misappropriation.png",
        iconSize: [24, 28],
        iconAnchor: [12, 28],
        popupAnchor: [0, -25]
      }),
      title: "Apropiación Ilegal",
      riseOnHover: true
    });
  },
  onEachFeature: function (feature, layer) {
    if (feature.properties) {
      var content = "<table class='table table-striped table-bordered table-condensed'>" + "<tr><th>Delito</th><td>" + "Apropiación Ilegal"+ "</td></tr>" + "<tr><th>Fecha</th><td>" + moment(feature.properties.time, "YYYY-MM-DD,HH:mm:ss.sssZ").format('LLL'); + "</td></tr>" + "</table>";
      if (document.body.clientWidth <= 767) {
        layer.on({
          click: function (e) {
            $("#feature-title").html("Apropiación Ilegal");
            $("#feature-info").html(content);
            $("#featureModal").modal("show");
          }
        });

      } else {
        layer.bindPopup(content, {
          maxWidth: "auto",
          closeButton: false
        });
      }
    }
  }
});

var carjackings = L.geoJson(null, {
  pointToLayer: function (feature, latlng) {
    return L.marker(latlng, {
      icon: L.icon({
        iconUrl: "assets/img/marker_carjacking.png",
        iconSize: [24, 28],
        iconAnchor: [12, 28],
        popupAnchor: [0, -25]
      }),
      title: "Vehículo Hurtado",
      riseOnHover: true
    });
  },
  onEachFeature: function (feature, layer) {
    if (feature.properties) {
      var content = "<table class='table table-striped table-bordered table-condensed'>" + "<tr><th>Delito</th><td>" + "Vehículo Hurtado"+ "</td></tr>" + "<tr><th>Fecha</th><td>" + moment(feature.properties.time, "YYYY-MM-DD,HH:mm:ss.sssZ").format('LLL'); + "</td></tr>" + "</table>";
      if (document.body.clientWidth <= 767) {
        layer.on({
          click: function (e) {
            $("#feature-title").html("Vehículo Hurtado");
            $("#feature-info").html(content);
            $("#featureModal").modal("show");
          }
        });

      } else {
        layer.bindPopup(content, {
          maxWidth: "auto",
          closeButton: false
        });
      }
    }
  }
});

var fires = L.geoJson(null, {
  pointToLayer: function (feature, latlng) {
    return L.marker(latlng, {
      icon: L.icon({
        iconUrl: "assets/img/marker_fire.png",
        iconSize: [24, 28],
        iconAnchor: [12, 28],
        popupAnchor: [0, -25]
      }),
      title: "Fuego",
      riseOnHover: true
    });
  },
  onEachFeature: function (feature, layer) {
    if (feature.properties) {
      var content = "<table class='table table-striped table-bordered table-condensed'>" + "<tr><th>Delito</th><td>" + "Fuego"+ "</td></tr>" + "<tr><th>Fecha</th><td>" + moment(feature.properties.time, "YYYY-MM-DD,HH:mm:ss.sssZ").format('LLL'); + "</td></tr>" + "</table>";
      if (document.body.clientWidth <= 767) {
        layer.on({
          click: function (e) {
            $("#feature-title").html("Fuego");
            $("#feature-info").html(content);
            $("#featureModal").modal("show");
          }
        });

      } else {
          layer.bindPopup(content, {
          maxWidth: "auto",
          closeButton: false
        });
      }
    }
  }
}); 



var markers = L.markerClusterGroup();
var crime_collection_request = "http://crimenes-api.herokuapp.com/crimes?polygon=[[-64.500732421875,19.06990562064469],[-68.01361083984375,19.06990562064469],[-68.01361083984375,17.368988699356095],[-64.500732421875,17.368988699356095]]&from_date=2013-01-01&to_date=2014-04-22&is_geojson=true";
$.getJSON(crime_collection_request, function (data) {

  murders.addData(data['murder']);
  var murder_total = data['murder']['features'].length;
  $("#murder_total").html("<b>"+murder_total+"</b>");

  var rape_total = data['rape']['features'].length;
  rapes.addData(data['rape']);
  $("#rape_total").html("<b>"+rape_total+"</b>");

  var theft_total = data['theft']['features'].length;
  thefts.addData(data['theft']);
  $("#theft_total").html("<b>"+theft_total+"</b>");

  var aggression_total = data['aggression']['features'].length;
  aggressions.addData(data['aggression']);
  $("#aggression_total").html("<b>"+aggression_total+"</b>");

  var breakin_total = data['break_in']['features'].length;
  breakins.addData(data['break_in']);
  $("#breakin_total").html("<b>"+breakin_total+"</b>");

  var misappropriation_total = data['misappropriation']['features'].length;
  misappropriations.addData(data['misappropriation']);
  $("#misappropriation_total").html("<b>"+misappropriation_total+"</b>");

  var carjacking_total = data['carjacking']['features'].length;
  carjackings.addData(data['carjacking']);
  $("#carjacking_total").html("<b>"+carjacking_total+"</b>");

  var fire_total = data['fire']['features'].length;
  fires.addData(data['fire']);
  $("#fire_total").html("<b>"+fire_total+"</b>");

  $("#total_crimes").html("<b>"+(murder_total+rape_total+theft_total+aggression_total+breakin_total+misappropriation_total+carjacking_total+fire_total)+"</b>");
  //Create chart

  var data = [
    {
      name: 'Asesinato',
      y: murder_total,
      color: '#F2142B'
    },
    {
      name: 'Violación',
      y: rape_total,
      color: '#F10088'
    },
    {
      name: 'Robo',
      y: theft_total,
      color: '#89C557'
    },
    {
      name: 'Agresión<br>Agravada',
      y: aggression_total,
      color: '#FFAE55'
    },
    {
      name: 'Escalamiento',
      y: breakin_total,
      color: '#00ABDC'
    },
    {
      name: 'Vehículo<br>Hurtado',
      y: carjacking_total,
      color: '#04B67A'
    },
    {
      name: 'Apropiación<br>Ilegal',
      y: misappropriation_total,
      sliced: true,
      selected: true,
      color: '#8D5D40'
    },
    {
      name: 'Fuego',
      y: fire_total,
      color: '#F65736'
    }
  ];
  drawCrimeChart(data);

});


var heatmap = L.heatLayer(null, {radius: 20, blur:20, max:0.4,maxZoom:18});
var initial_request = "http://crimenes-api.herokuapp.com/crimes?polygon=[[-64.500732421875,19.06990562064469],[-68.01361083984375,19.06990562064469],[-68.01361083984375,17.368988699356095],[-64.500732421875,17.368988699356095]]&from_date=2013-01-01&to_date=2014-04-22&is_geojson=false";
$.getJSON(initial_request, function(data) {
  heatmap.setLatLngs(data);
});

map = L.map("map", {
  center: [18.258720, -66.473524],
  layers: [mapquestOSM]
});

/* Larger screens get expanded layer control */
if (document.body.clientWidth <= 767) {
  var isCollapsed = true;
} else {
  var isCollapsed = false;
}

var baseLayers = {
  "Street Map": mapquestOSM,
  "Aerial Imagery": mapquestOAM,
  "Imagery with Streets": mapquestHYB
};

var overlays = {
  'Ver "Heatmap"': heatmap,
  //"Pueblos": municipalities,
  "<img src='assets/img/marker_murder.png' width='24' height='28'>&nbsp;Asesinatos": L.geoJson(),
  "<img src='assets/img/marker_rape.png' width='24' height='28'>&nbsp;Violaciones": L.geoJson(),
  "<img src='assets/img/marker_theft.png' width='24' height='28'>&nbsp;Robos": L.geoJson(),
  "<img src='assets/img/marker_aggression.png' width='24' height='28'>&nbsp;Agresión Agravada": L.geoJson(),
  "<img src='assets/img/marker_break_in.png' width='24' height='28'>&nbsp;Escalamientos": L.geoJson(),
  "<img src='assets/img/marker_misappropriation.png' width='24' height='28'>&nbsp;Apropiación Ilegal": L.geoJson(),
  "<img src='assets/img/marker_carjacking.png' width='24' height='28'>&nbsp;Vehículos Hurtados": L.geoJson(),
   "<img src='assets/img/marker_fire.png' width='24' height='28'>&nbsp;Fuego": L.geoJson()
};

var layerControl = L.control.layers(baseLayers, overlays, {
  collapsed: isCollapsed
}).addTo(map);

map.on('overlayadd',function(a){
  if(a.name=="<img src='assets/img/marker_murder.png' width='24' height='28'>&nbsp;Asesinatos"){
    markers.addLayer(murders).addTo(map);
  }
  else if(a.name=="<img src='assets/img/marker_rape.png' width='24' height='28'>&nbsp;Violaciones"){
    markers.addLayer(rapes).addTo(map);
  }
  else if(a.name=="<img src='assets/img/marker_theft.png' width='24' height='28'>&nbsp;Robos"){
    markers.addLayer(thefts).addTo(map);
  }
  else if(a.name== "<img src='assets/img/marker_aggression.png' width='24' height='28'>&nbsp;Agresión Agravada"){
    markers.addLayer(aggressions).addTo(map);
  }
  else if(a.name== "<img src='assets/img/marker_break_in.png' width='24' height='28'>&nbsp;Escalamientos"){
    markers.addLayer(breakins).addTo(map);
  }
  else if(a.name== "<img src='assets/img/marker_misappropriation.png' width='24' height='28'>&nbsp;Apropiación Ilegal"){
    markers.addLayer(misappropriations).addTo(map);
  }
  else if(a.name== "<img src='assets/img/marker_carjacking.png' width='24' height='28'>&nbsp;Vehículos Hurtados"){
    markers.addLayer(carjackings).addTo(map);
  }
  else if(a.name== "<img src='assets/img/marker_fire.png' width='24' height='28'>&nbsp;Fuego"){
    markers.addLayer(fires).addTo(map);
  }
});

map.on('overlayremove',function(a){
  if(a.name=="<img src='assets/img/marker_murder.png' width='24' height='28'>&nbsp;Asesinatos"){
    markers.removeLayer(murders)
  }
  else if(a.name=="<img src='assets/img/marker_rape.png' width='24' height='28'>&nbsp;Violaciones"){
    markers.removeLayer(rapes);
  }
  else if(a.name=="<img src='assets/img/marker_theft.png' width='24' height='28'>&nbsp;Robos"){
    markers.removeLayer(thefts);
  }
  else if(a.name== "<img src='assets/img/marker_aggression.png' width='24' height='28'>&nbsp;Agresión Agravada"){
    markers.removeLayer(aggressions);
  }
  else if(a.name== "<img src='assets/img/marker_break_in.png' width='24' height='28'>&nbsp;Escalamientos"){
    markers.removeLayer(breakins);
  }
  else if(a.name== "<img src='assets/img/marker_misappropriation.png' width='24' height='28'>&nbsp;Apropiación Ilegal"){
    markers.removeLayer(misappropriations);
  }
  else if(a.name== "<img src='assets/img/marker_carjacking.png' width='24' height='28'>&nbsp;Vehículos Hurtados"){
    markers.removeLayer(carjackings);
  }
  else if(a.name== "<img src='assets/img/marker_fire.png' width='24' height='28'>&nbsp;Fuego"){
    markers.removeLayer(fires);
  }
});


/* Add overlay layers to map after defining layer control to preserver order */
map.addLayer(municipalities).addLayer(heatmap);

var sidebar = L.control.sidebar("sidebar", {
  closeButton: true,
  position: "left"
}).addTo(map);

/* Highlight search box text on click */
$("#searchbox").click(function () {
  $(this).select();
});

/* Typeahead search functionality */
$(document).one("ajaxStop", function () {
  map.fitBounds(municipalities.getBounds());
  $("#loading").hide();

  var municipalitiesBH = new Bloodhound({
    name: "municipalities",
    datumTokenizer: function (d) {
      return Bloodhound.tokenizers.whitespace(d.name);
    },
    queryTokenizer: Bloodhound.tokenizers.whitespace,
    local: municipalitieSearch,
    limit: 10
  });

  var geonamesBH = new Bloodhound({
    name: "GeoNames",
    datumTokenizer: function (d) {
      return Bloodhound.tokenizers.whitespace(d.name);
    },
    queryTokenizer: Bloodhound.tokenizers.whitespace,
    remote: {
      url: "http://api.geonames.org/searchJSON?username=bootleaf&featureClass=P&maxRows=5&country=PR&name_startsWith=%QUERY",
      filter: function (data) {
        return $.map(data.geonames, function (result) {
          return {
            name: result.name + ", " + result.adminCode1,
            lat: result.lat,
            lng: result.lng,
            source: "GeoNames"
          };
        });
      },
      ajax: {
        beforeSend: function (jqXhr, settings) {
          settings.url += "&east=" + map.getBounds().getEast() + "&west=" + map.getBounds().getWest() + "&north=" + map.getBounds().getNorth() + "&south=" + map.getBounds().getSouth();
          $("#searchicon").removeClass("fa-search").addClass("fa-refresh fa-spin");
        },
        complete: function (jqXHR, status) {
          $('#searchicon').removeClass("fa-refresh fa-spin").addClass("fa-search");
        }
      }
    },
    limit: 10
  });
  municipalitiesBH.initialize();
  geonamesBH.initialize();

  /* instantiate the typeahead UI */
  $("#searchbox").typeahead({
    minLength: 3,
    highlight: true,
    hint: false
  }, {
    name: "municipalities",
    displayKey: "name",
    source: municipalitiesBH.ttAdapter(),
    templates: {
      header: "<h4 class='typeahead-header'>Pueblos</h4>"
    }
  }, {
    name: "GeoNames",
    displayKey: "name",
    source: geonamesBH.ttAdapter(),
    templates: {
      header: "<h4 class='typeahead-header'><img src='assets/img/globe.png' width='25' height='25'>&nbsp;GeoNames</h4>"
    }
  }).on("typeahead:selected", function (obj, datum) {
    if (datum.source === "municipalities") {
      map.fitBounds(datum.bounds);
    }
    if (datum.source === "GeoNames") {
      map.setView([datum.lat, datum.lng], 14);
    }
    if ($(".navbar-collapse").height() > 50) {
      $(".navbar-collapse").collapse("hide");
    }
  }).on("typeahead:opened", function () {
    $(".navbar-collapse.in").css("max-height", $(document).height() - $(".navbar-header").height());
    $(".navbar-collapse.in").css("height", $(document).height() - $(".navbar-header").height());
  }).on("typeahead:closed", function () {
    $(".navbar-collapse.in").css("max-height", "");
    $(".navbar-collapse.in").css("height", "");
  });
  $(".twitter-typeahead").css("position", "static");
  $(".twitter-typeahead").css("display", "block");
});

/* Placeholder hack for IE */
if (navigator.appName == "Microsoft Internet Explorer") {
  $("input").each(function () {
    if ($(this).val() === "" && $(this).attr("placeholder") !== "") {
      $(this).val($(this).attr("placeholder"));
      $(this).focus(function () {
        if ($(this).val() === $(this).attr("placeholder")) $(this).val("");
      });
      $(this).blur(function () {
        if ($(this).val() === "") $(this).val($(this).attr("placeholder"));
      });
    }
  });
}

//**************************************************************************

//Events handler



//---------------------------------
//Map events
map.on('zoomend', function(e){
  zoom = map.getZoom();
  if (zoom >= 13) {

  };

});
map.on('dragend', function(e){
  //fecthCrimes();
});

function fecthCrimes(action){
  $("#loading").show();
  var northEast_bound = map.getBounds()['_northEast'];
  var southWest_bound = map.getBounds()['_southWest'];

  var northEast = '['+[northEast_bound['lng'],northEast_bound['lat']]+']';
  var northWest = '['+[southWest_bound['lng'],northEast_bound['lat']]+']';
  var southWest = '['+[southWest_bound['lng'],southWest_bound['lat']]+']';
  var southEast = '['+[northEast_bound['lng'],southWest_bound['lat']]+']';

  var polygon = '['+northEast+','+northWest+','+southWest+','+southEast+']';
  var from_date = '2013-01-01';
  var to_date = '2014-04-22';
  
  if (action == 'initialize') {
    var is_geojson = false;
    var request = 'http://crimenes-api.herokuapp.com/crimes?polygon='+polygon+'&from_date='+from_date+'&to_date='+to_date+'&is_geojson='+is_geojson;
    $.getJSON(request, function(data) {
      //console.log(data);
      heatLayer = L.heatLayer(data, {radius: 20, blur:20, max:0.4,maxZoom:18}).addTo(map);
      $("#loading").hide();
    });
  };
}




function drawCrimeChart(data){
  $('#container').highcharts({
      chart: {
          plotBackgroundColor: null,
          plotBorderWidth: null,
          plotShadow: false
      },
      title: {
          text: 'Tipo de Crimen'
      },
      tooltip: {
        pointFormat: '<b>{point.y}</b>'
      },
      plotOptions: {
          pie: {
              allowPointSelect: true,
              cursor: 'pointer',
              dataLabels: {
                  enabled: true,
                  format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                  style: {
                      color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                  }
              }
          }
      },
      series: [{
          type: 'pie',
          name: 'Crimen',
          data: data
      }]
  });
}
