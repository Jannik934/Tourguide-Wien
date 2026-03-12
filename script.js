// Map init
const map=L.map('map').setView([48.2082,16.3738],13);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{maxZoom:19}).addTo(map);
const animatedIcon=L.divIcon({className:'pulse-marker',iconSize:[20,20]});
if(navigator.geolocation){navigator.geolocation.getCurrentPosition(pos=>{L.marker([pos.coords.latitude,pos.coords.longitude],{icon:animatedIcon}).addTo(map).bindPopup('📍 Dein Standort').openPopup();map.setView([pos.coords.latitude,pos.coords.longitude],14);});}
const poi=[{name:'Schloss Schönbrunn',coords:[48.1845,16.3122],img:'images/schoenbrunn.jpg'},{name:'Stephansdom',coords:[48.2084,16.3731],img:'images/stephansdom.jpg'}];
poi.forEach(p=>{L.marker(p.coords,{icon:animatedIcon}).addTo(map).bindPopup(`<h3>${p.name}</h3>`);});