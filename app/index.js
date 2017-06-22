var L = require('leaflet');

var mymap = L.map('mapid').setView([35.68, 139.76], 13);

L.tileLayer('タイルサーバのURL', {
    maxZoom: 18
}).addTo(mymap);
