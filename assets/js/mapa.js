function initialize() {

  // Exibir mapa;
  var myLatlng = new google.maps.LatLng(-23.1724084, -46.8810029);
  var mapOptions = {
    zoom: 18,
    center: myLatlng,
    panControl: false,
    // mapTypeId: google.maps.MapTypeId.ROADMAP
    mapTypeControlOptions: {
      mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'map_style']
    }
  }

  // Parâmetros do texto que será exibido no clique;
  var contentString = '<h2>ApetHotel</h2>' +
  '<p>R. Carlos Gomes, 1603 - Vila Graff, Jundiaí - SP<br>apethotel.com.br<br>(11) 96907-4567</p>' +
  '<a href="http://www.apethotel.com.br" target="_blank">clique aqui para mais informações</a>';
  var infowindow = new google.maps.InfoWindow({
      content: contentString,
      maxWidth: 700
  });

  // Exibir o mapa na div #mapa;
  var map = new google.maps.Map(document.getElementById("mapa"), mapOptions);

  // Marcador personalizado;
  var marker = new google.maps.Marker({
      position: myLatlng,
      map: map,
      title: 'ApetHotel',
      animation: google.maps.Animation.DROP
  });

//   // Exibir texto ao clicar no ícone;
  google.maps.event.addListener(marker, 'click', function() {
    infowindow.open(map,marker);
  });

  // Estilizando o mapa;
  // Criando um array com os estilos
  var styles = [
    {
      stylers: [
        { hue: "#41a7d5" },
        { saturation: 60 },
        { lightness: -20 },
        { gamma: 1.51 }
      ]
    },
    {
      featureType: "road",
      elementType: "geometry",
      stylers: [
        { lightness: 100 },
        { visibility: "simplified" }
      ]
    },
    {
      featureType: "road",
      elementType: "labels"
    }
  ];
}

// Função para carregamento assíncrono
function loadScript() {
  var script = document.createElement("script");
  script.type = "text/javascript";
  script.src = "http://maps.googleapis.com/maps/api/js?key=AIzaSyDBVFc-X7djTWTdxd6tv8yuGPiyvaPqAsk&sensor=true&callback=initialize";
  document.body.appendChild(script);
}

window.onload = loadScript;